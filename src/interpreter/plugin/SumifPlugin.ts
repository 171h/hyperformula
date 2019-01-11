import {cellError, cellRangeToSimpleCellRange, CellValue, ErrorType, getAbsoluteAddress, SimpleCellAddress, SimpleCellRange, rangeWidth, rangeHeight} from '../../Cell'
import {split, count} from '../../generatorUtils'
import {findSmallerRange, generateCellsFromRangeGenerator} from '../../GraphBuilder'
import {IAddressMapping} from '../../IAddressMapping'
import {AstNodeType, CellRangeAst, CellReferenceAst, ProcedureAst} from '../../parser/Ast'
import {CriterionCache, RangeVertex} from '../../Vertex'
import {buildCriterionLambda, Criterion, CriterionLambda, parseCriterion} from '../Criterion'
import {add} from '../scalar'
import {FunctionPlugin} from './FunctionPlugin'

/** Computes key for criterion function cache */
function sumifCacheKey(simpleConditionRange: SimpleCellRange): string {
  return `SUMIF,${simpleConditionRange.start.col},${simpleConditionRange.start.row}`
}

const COUNTIF_CACHE_KEY = 'COUNTIF'

type CacheBuildingFunction = (cacheKey: string, cacheCurrentValue: CellValue, newFilteredValues: IterableIterator<CellValue>) => CellValue

export class SumifPlugin extends FunctionPlugin {
  public static implementedFunctions = {
    sumif: {
      EN: 'SUMIF',
      PL: 'SUMAJEZELI',
    },
    countif: {
      EN: 'COUNTIF',
      PL: 'LICZJEZELI',
    },
  }

  /**
   * Corresponds to SUMIF(Range, Criterion, SumRange)
   *
   * Range is the range to which criterion is to be applied.
   * Criterion is the criteria used to choose which cells will be included in sum.
   * SumRange is the range on which adding will be performed.
   *
   * @param ast
   * @param formulaAddress
   */
  public sumif(ast: ProcedureAst, formulaAddress: SimpleCellAddress): CellValue {
    const criterionString = this.evaluateAst(ast.args[1], formulaAddress)
    if (typeof criterionString !== 'string') {
      return cellError(ErrorType.VALUE)
    }

    const criterion = parseCriterion(criterionString)
    if (criterion === null) {
      return cellError(ErrorType.VALUE)
    }

    const conditionRangeArg = ast.args[0]
    const valuesRangeArg = ast.args[2]

    if (conditionRangeArg.type === AstNodeType.CELL_RANGE && valuesRangeArg.type === AstNodeType.CELL_RANGE) {
      const simpleValuesRange = cellRangeToSimpleCellRange(valuesRangeArg, formulaAddress)
      const simpleConditionRange = cellRangeToSimpleCellRange(conditionRangeArg, formulaAddress)

      if (rangeWidth(simpleConditionRange) !== rangeWidth(simpleValuesRange) || rangeHeight(simpleConditionRange) !== rangeHeight(simpleValuesRange)) {
        return cellError(ErrorType.VALUE)
      }

      return this.evaluateRangeSumif(simpleConditionRange, simpleValuesRange, criterionString, criterion)
    } else if (conditionRangeArg.type === AstNodeType.CELL_REFERENCE && valuesRangeArg.type === AstNodeType.CELL_REFERENCE) {
      return this.evaluateCellSumif(ast, formulaAddress, criterion)
    } else {
      return cellError(ErrorType.VALUE)
    }
  }

  /**
   * Corresponds to COUNTIF(Range, Criterion)
   *
   * Range is the range to which criterion is to be applied.
   * Criterion is the criteria used to choose which cells will be included in sum.
   *
   * Returns number of cells on which criteria evaluates to true.
   *
   * @param ast
   * @param formulaAddress
   */
  public countif(ast: ProcedureAst, formulaAddress: SimpleCellAddress): CellValue {
    const conditionRangeArg = ast.args[0]

    const criterionString = this.evaluateAst(ast.args[1], formulaAddress)
    if (typeof criterionString !== 'string') {
      return cellError(ErrorType.VALUE)
    }

    const criterion = parseCriterion(criterionString)
    if (criterion === null) {
      return cellError(ErrorType.VALUE)
    }

    const criterionLambda = buildCriterionLambda(criterion)

    if (conditionRangeArg.type === AstNodeType.CELL_RANGE) {
      const simpleConditionRange = cellRangeToSimpleCellRange(conditionRangeArg, formulaAddress)
      return this.evaluateRangeCountif(simpleConditionRange, criterionString, criterion)
    } else if (conditionRangeArg.type === AstNodeType.CELL_REFERENCE) {
      const valueFromCellReference = this.evaluateAst(conditionRangeArg, formulaAddress)
      const criterionResult = criterionLambda(valueFromCellReference)
      if (criterionResult) {
        return 1
      } else {
        return 0
      }
    } else {
      return cellError(ErrorType.VALUE)
    }
  }

  /**
   * Computes SUMIF function for single-cell arguments
   *
   * @param ast - ast of the SUMIF function call
   * @param formulaAddress - address of the cell with function call
   * @param criterion - computed value of the criterion passed to function call
   */
  private evaluateCellSumif(ast: ProcedureAst, formulaAddress: SimpleCellAddress, criterion: Criterion): CellValue {
    const conditionReferenceArg = ast.args[0] as CellReferenceAst
    const valuesReferenceArg = ast.args[2] as CellReferenceAst

    const conditionValues = [this.evaluateAst(conditionReferenceArg, formulaAddress)][Symbol.iterator]()
    const computableValues = [this.evaluateAst(valuesReferenceArg, formulaAddress)][Symbol.iterator]()
    const criterionLambda = buildCriterionLambda(criterion)
    const filteredValues = ifFilter(criterionLambda, conditionValues, computableValues)
    return reduceSum(filteredValues)
  }

  /**
   * Computes SUMIF function for range arguments.
   *
   * @param ast - ast of the SUMIF function call
   * @param formulaAddress - address of the cell with function call
   * @param criterionString - raw value of the criterion passed to function call
   * @param criterion - computed value of the criterion passed to function call
   */
  private evaluateRangeSumif(simpleConditionRange: SimpleCellRange, simpleValuesRange: SimpleCellRange, criterionString: string, criterion: Criterion): CellValue {
    const valuesRangeVertex = this.rangeMapping.getRange(simpleValuesRange.start, simpleValuesRange.end)
    if (!valuesRangeVertex) {
      throw Error('Range does not exists in graph')
    }

    const cachedResult = this.findAlreadyComputedValueInCache(valuesRangeVertex, sumifCacheKey(simpleConditionRange), criterionString)
    if (cachedResult) {
      return cachedResult
    }

    const cache = this.buildNewCriterionCache(sumifCacheKey(simpleConditionRange), simpleConditionRange, simpleValuesRange,
      (cacheKey: string, cacheCurrentValue: CellValue, newFilteredValues: IterableIterator<CellValue>) => {
        return add(cacheCurrentValue, reduceSum(newFilteredValues))
      })

    if (!cache.has(criterionString)) {
      const resultValue = this.computeCriterionValue(criterion, simpleConditionRange, simpleValuesRange,
        (filteredValues: IterableIterator<CellValue>) => {
          return reduceSum(filteredValues)
        })
      cache.set(criterionString, [resultValue, buildCriterionLambda(criterion)])
    }

    valuesRangeVertex.setCriterionFunctionValues(sumifCacheKey(simpleConditionRange), cache)

    return cache.get(criterionString)![0]
  }

  private evaluateRangeCountif(simpleConditionRange: SimpleCellRange, criterionString: string, criterion: Criterion): CellValue {
    const conditionRangeVertex = this.rangeMapping.getRange(simpleConditionRange.start, simpleConditionRange.end)
    if (!conditionRangeVertex) {
      throw Error('Range does not exists in graph')
    }

    const cachedResult = this.findAlreadyComputedValueInCache(conditionRangeVertex, COUNTIF_CACHE_KEY, criterionString)
    if (cachedResult) {
      return cachedResult
    }

    const cache = this.buildNewCriterionCache(COUNTIF_CACHE_KEY, simpleConditionRange, simpleConditionRange,
      (cacheKey: string, cacheCurrentValue: CellValue, newFilteredValues: IterableIterator<CellValue>) => {
        return (cacheCurrentValue as number) + count(newFilteredValues)
      })

    if (!cache.has(criterionString)) {
      const resultValue = this.computeCriterionValue(criterion, simpleConditionRange, simpleConditionRange,
        (filteredValues: IterableIterator<CellValue>) => {
          return count(filteredValues)
        })
      cache.set(criterionString, [resultValue, buildCriterionLambda(criterion)])
    }

    conditionRangeVertex.setCriterionFunctionValues(sumifCacheKey(simpleConditionRange), cache)

    return cache.get(criterionString)![0]
  }

  /**
   * Finds existing CriterionCache or returns fresh one and fetch list of remaining values.
   *
   * @param cacheKey - key to retrieve from cache
   * @param beginRange - top-left corner of computing range
   * @param endRange - bottom-right corner of computing range
   */
  private getCriterionRangeValues(cacheKey: string, beginRange: SimpleCellAddress, endRange: SimpleCellAddress): [CriterionCache, CellValue[]] {
    const currentRangeVertex = this.rangeMapping.getRange(beginRange, endRange)!
    const {smallerRangeVertex, restRangeStart, restRangeEnd} = findSmallerRange(this.rangeMapping, beginRange, endRange)

    let smallerRangeResult = null
    if (smallerRangeVertex && this.graph.existsEdge(smallerRangeVertex, currentRangeVertex)) {
      smallerRangeResult = smallerRangeVertex.getCriterionFunctionValues(cacheKey)
    }

    if (smallerRangeVertex !== null) {
      beginRange = restRangeStart
      endRange = restRangeEnd
    }

    const rangeResult = []
    for (const cellFromRange of generateCellsFromRangeGenerator(beginRange, endRange)) {
      rangeResult.push(this.addressMapping.getCell(cellFromRange)!.getCellValue())
    }

    return [smallerRangeResult || new Map(), rangeResult]
  }

  private findAlreadyComputedValueInCache(rangeVertex: RangeVertex, cacheKey: string, criterionString: string) {
    return rangeVertex.getCriterionFunctionValue(cacheKey, criterionString)
  }

  private buildNewCriterionCache(cacheKey: string, simpleConditionRange: SimpleCellRange, simpleValuesRange: SimpleCellRange, cacheBuilder: CacheBuildingFunction): CriterionCache {
    const [smallerCache, values] = this.getCriterionRangeValues(cacheKey, simpleValuesRange.start, simpleValuesRange.end)

    const conditions = getPlainRangeValues(this.addressMapping, simpleConditionRange)
    const restConditions = conditions.slice(conditions.length - values.length)

    const newCache: CriterionCache = new Map()
    smallerCache.forEach(([value, criterionLambda]: [CellValue, CriterionLambda], key: string) => {
      const filteredValues = ifFilter(criterionLambda, restConditions[Symbol.iterator](), values[Symbol.iterator]())
      const newCacheValue = cacheBuilder(key, value, filteredValues)
      newCache.set(key, [newCacheValue, criterionLambda])
    })

    return newCache
  }

  private computeCriterionValue(criterion: Criterion, simpleConditionRange: SimpleCellRange, simpleValuesRange: SimpleCellRange, valueComputingFunction: ((filteredValues: IterableIterator<CellValue>) => (CellValue))) {
    const criterionLambda = buildCriterionLambda(criterion)
    const values = getRangeValues(this.addressMapping, simpleValuesRange)
    const conditions = getRangeValues(this.addressMapping, simpleConditionRange)
    const filteredValues = ifFilter(criterionLambda, conditions, values)
    return valueComputingFunction(filteredValues)
  }
}

function * getRangeValues(addressMapping: IAddressMapping, cellRange: SimpleCellRange): IterableIterator<CellValue> {
  for (const cellFromRange of generateCellsFromRangeGenerator(cellRange.start, cellRange.end)) {
    yield addressMapping.getCell(cellFromRange)!.getCellValue()
  }
}

export function getPlainRangeValues(addressMapping: IAddressMapping, cellRange: SimpleCellRange): CellValue[] {
  const result: CellValue[] = []
  for (const cellFromRange of generateCellsFromRangeGenerator(cellRange.start, cellRange.end)) {
    result.push(addressMapping.getCell(cellFromRange)!.getCellValue())
  }
  return result
}

export function* ifFilter(criterionLambda: CriterionLambda, conditionalIterable: IterableIterator<CellValue>, computableIterable: IterableIterator<CellValue>): IterableIterator<CellValue> {
  const conditionalSplit = split(conditionalIterable)
  const computableSplit = split(computableIterable)
  if (conditionalSplit.hasOwnProperty('value') && computableSplit.hasOwnProperty('value')) {
    const conditionalFirst = conditionalSplit.value as CellValue
    const computableFirst = computableSplit.value as CellValue
    if (criterionLambda(conditionalFirst)) {
      yield computableFirst
    }

    yield* ifFilter(criterionLambda, conditionalSplit.rest, computableSplit.rest)
  }
}

export function reduceSum(iterable: IterableIterator<CellValue>): CellValue {
  let acc: CellValue = 0
  for (const val of iterable) {
    acc = add(acc, val)
  }
  return acc
}
