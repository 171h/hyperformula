import {CellValue, SimpleCellAddress} from './Cell'
import {CriterionLambda} from './interpreter/Criterion'
import {Ast} from './parser/Ast'
import {Matrix} from "./Matrix";

/**
 * Represents vertex which keeps values of one or more cells
 */
export type CellVertex = FormulaCellVertex | ValueCellVertex | EmptyCellVertex | MatrixVertex

/**
 * Represents any vertex
 */
export type Vertex = CellVertex | RangeVertex

export class MatrixVertex {
  public readonly width: number
  public readonly height: number
  private formula: Ast
  private cellAddress: SimpleCellAddress
  private matrix: Matrix

  constructor(formula: Ast, cellAddress: SimpleCellAddress, width: number, height: number) {
    this.formula = formula
    this.cellAddress = cellAddress
    this.width = width
    this.height = height
    this.matrix = new Matrix([])
  }

  public setCellValue(matrix: CellValue) {
    this.matrix = matrix as Matrix
  }

  public getCellValue() {
    return this.matrix
  }

  public getMatrixCellValue(address: SimpleCellAddress): number {
    const col = address.col - this.cellAddress.col
    const row = address.row - this.cellAddress.row

    return this.matrix.get(col, row)
  }

  public getAddress() {
    return this.cellAddress
  }

  public getFormula() {
    return this.formula
  }
}

/**
 * Represents vertex which keeps formula
 */
export class FormulaCellVertex {
  /** Most recently computed value of this formula. */
  private cachedCellValue?: CellValue

  /** Formula in AST format */
  private formula: Ast

  /** Address which this vertex represents */
  private cellAddress: SimpleCellAddress

  constructor(formula: Ast, cellAddress: SimpleCellAddress) {
    this.formula = formula
    this.cellAddress = cellAddress
  }

  /**
   * Returns formula stored in this vertex
   */
  public getFormula(): Ast {
    return this.formula
  }

  /**
   * Returns address of the cell associated with vertex
   */
  public getAddress(): SimpleCellAddress {
    return this.cellAddress
  }

  /**
   * Sets computed cell value stored in this vertex
   */
  public setCellValue(cellValue: CellValue) {
    this.cachedCellValue = cellValue
  }

  /**
   * Returns cell value stored in vertex
   */
  public getCellValue() {
    if (this.cachedCellValue != null) {
      return this.cachedCellValue
    } else {
      throw Error('Value of the formula cell is not computed.')
    }
  }
}

/**
 * Represents vertex which keeps static cell value
 */
export class ValueCellVertex {
  /** Static cell value. */
  private cellValue: CellValue

  constructor(cellValue: CellValue) {
    this.cellValue = cellValue
  }

  /**
   * Returns cell value stored in vertex
   */
  public getCellValue() {
    return this.cellValue
  }

  /**
   * Sets computed cell value stored in this vertex
   */
  public setCellValue(cellValue: CellValue) {
    this.cellValue = cellValue
  }
}

/**
 * Represents singleton vertex bound to all empty cells
 */
export class EmptyCellVertex {
  /**
   * Retrieves singleton
   */
  public static getSingletonInstance() {
    if (!EmptyCellVertex.instance) {
      EmptyCellVertex.instance = new EmptyCellVertex()
    }
    return EmptyCellVertex.instance
  }

  /** Singleton instance. */
  private static instance: EmptyCellVertex

  /**
   * Retrieves cell value bound to that singleton
   */
  public getCellValue() {
    return 0
  }
}

/**
 * Represents cache structure for one criterion
 */
export type CriterionCache = Map<string, [CellValue, CriterionLambda]>

/**
 * Represents vertex bound to range
 */
export class RangeVertex {
  /** Cache for associative aggregate functions. */
  private functionCache: Map<string, CellValue>

  /** Cache for criterion-based functions. */
  private criterionFuncitonCache: Map<string, CriterionCache>

  constructor(private start: SimpleCellAddress, private end: SimpleCellAddress) {
    this.functionCache = new Map()
    this.criterionFuncitonCache = new Map()
    if (start.sheet !== end.sheet) {
      throw new Error('start range in different sheet than end range')
    }
  }

  /**
   * Returns cached value stored for given function
   *
   * @param functionName - name of the function
   */
  public getFunctionValue(functionName: string): CellValue | null {
    return this.functionCache.get(functionName) || null
  }

  /**
   * Stores cached value for given function
   *
   * @param functionName - name of the function
   * @param value - cached value
   */
  public setFunctionValue(functionName: string, value: CellValue) {
    this.functionCache.set(functionName, value)
  }

  /**
   * Returns cached value for given cache key and criterion text representation
   *
   * @param cacheKey - key to retrieve from the cache
   * @param criterionString - criterion text (ex. '<=5')
   */
  public getCriterionFunctionValue(cacheKey: string, criterionString: string): CellValue | null {
    const values = this.getCriterionFunctionValues(cacheKey)
    const value = values.get(criterionString)
    return value ? value[0] : null
  }

  /**
   * Returns all cached values stored for given criterion function
   *
   * @param cacheKey - key to retrieve from the cache
   */
  public getCriterionFunctionValues(cacheKey: string): Map<string, [CellValue, CriterionLambda]> {
    return this.criterionFuncitonCache.get(cacheKey) || new Map()
  }

  /**
   * Stores all values for given criterion function
   *
   * @param cacheKey - key to store in the cache
   * @param values - map with values
   */
  public setCriterionFunctionValues(cacheKey: string, values: CriterionCache) {
    this.criterionFuncitonCache.set(cacheKey, values)
  }

  /**
   * Clears function cache
   */
  public clear() {
    this.functionCache.clear()
    this.criterionFuncitonCache.clear()
  }

  /**
   * Returns start of the range (it's top-left corner)
   */
  public getStart(): SimpleCellAddress {
    return this.start
  }

  /**
   * Returns end of the range (it's bottom-right corner)
   */
  public getEnd(): SimpleCellAddress {
    return this.end
  }
}
