import {
  createToken,
  Lexer,
  Parser,
  IToken,
  tokenMatcher
} from "chevrotain"

import {
  Ast,
  buildMinusOpAst,
  buildNumberAst,
  buildPlusOpAst,
  buildRelativeCellAst,
  buildTimesOpAst
} from "../parser/Ast"

const EqualsOp = createToken({name: "EqualsOp", pattern: /=/})

/* arithmetic */
// abstract for + -
const AdditionOp = createToken({
  name: "AdditionOp",
  pattern: Lexer.NA
})
const PlusOp = createToken({name: "PlusOp", pattern: /\+/, categories: AdditionOp})
const MinusOp = createToken({name: "MinusOp", pattern: /-/, categories: AdditionOp})

// abstract for * /
const MultiplicationOp = createToken({
  name: "MultiplicationOp",
  pattern: Lexer.NA
})
const TimesOp = createToken({name: "TimesOp", pattern: /\*/, categories: MultiplicationOp})
const DivOp = createToken({name: "DivOp", pattern: /\//, categories: MultiplicationOp})

/* addresses */
const RelativeCell = createToken({name: "RelativeCell", pattern: /[A-Za-z]+[0-9]+/})

/* parenthesis */
const LParen = createToken({name: "LParen", pattern: /\(/})
const RParen = createToken({name: "RParen", pattern: /\)/})

/* terminals */
const Number = createToken({name: "Number", pattern: /[1-9]\d*/})

/* skipping whitespaces */
const WhiteSpace = createToken({
  name: "WhiteSpace",
  pattern: /[ \t\n\r]+/,
  group: Lexer.SKIPPED
})


/* order is important, first pattern is used */
const allTokens = [
  WhiteSpace,
  EqualsOp,
  PlusOp,
  MinusOp,
  TimesOp,
  DivOp,
  LParen,
  RParen,
  Number,
  RelativeCell,
  AdditionOp,
  MultiplicationOp
]

// F -> '=' E
// E -> M + E | M - E | M
// M -> C * M | C / M | C
// C -> N | A | P | num
// N -> '(' E ')'
// A -> adresy
// P -> procedury
class FormulaParser extends Parser {
  constructor() {
    super(allTokens, {outputCst: false})
    this.performSelfAnalysis()
  }

  public formula : AstRule = this.RULE("formula", () => {
    this.CONSUME(EqualsOp)
    return this.SUBRULE(this.additionExpression)
  })

  private additionExpression : AstRule = this.RULE("additionExpression", () => {
    const lhs: Ast = this.SUBRULE(this.multiplicationExpression, {LABEL: "lhs"})

    let result: {
      rhs?: Ast
      op?: IToken
    } = {}

    this.OPTION(() => {
      result.op = this.CONSUME(AdditionOp)
      result.rhs = this.SUBRULE2(this.additionExpression)
    })

    if (result.op! !== undefined && result.rhs! !== undefined) {
      if (tokenMatcher(result.op!, PlusOp)) {
        return buildPlusOpAst(lhs, result.rhs!)
      } else if (tokenMatcher(result.op!, MinusOp)) {
        return buildMinusOpAst(lhs, result.rhs!)
      } else {
        throw Error("Operator not supported")
      }
    } else {
      return lhs
    }
  })

  private multiplicationExpression : AstRule = this.RULE("multiplicationExpression", () => {
    const lhs: Ast = this.SUBRULE(this.atomicExpression)

    let result: {
      rhs?: Ast
      op?: IToken
    } = {}

    this.OPTION(() => {
      result.op = this.CONSUME(MultiplicationOp)
      result.rhs = this.SUBRULE2(this.multiplicationExpression)
    })

    if (result.op != undefined && result.rhs != undefined) {
      if (tokenMatcher(result.op, TimesOp)) {
        return buildTimesOpAst(lhs, result.rhs)
      } else {
        throw Error("Operator not supported")
      }
    } else {
      return lhs
    }
  })

  private atomicExpression : AstRule = this.RULE("atomicExpression", () => {
    return this.OR([
      {
        ALT: () => this.SUBRULE(this.parenthesisExpression)
      },
      {
        ALT: () => {
          const number = this.CONSUME(Number)
          return buildNumberAst(parseInt(number.image))
        }
      },
      {
        ALT: () => this.SUBRULE(this.relativeCellExpression)
      }
    ])
  })

  private relativeCellExpression : AstRule = this.RULE("relativeCellExpression", () => {
    const address = this.CONSUME(RelativeCell)
    return buildRelativeCellAst(address.image)
  })

  private parenthesisExpression : AstRule = this.RULE("parenthesisExpression", () => {
    this.CONSUME(LParen)
    const expression = this.SUBRULE(this.additionExpression)
    this.CONSUME(RParen)
    return expression
  })
}


type AstRule = (idxInCallingRule?: number, ...args: any[]) => (Ast)

const FormulaLexer = new Lexer(allTokens, {ensureOptimizations: true})
const parser = new FormulaParser()

export function parseFormula(text: string) {
  const lexResult = FormulaLexer.tokenize(text)
  parser.input = lexResult.tokens
  return parser.formula()
}
