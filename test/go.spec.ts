import { HyperFormula } from '../src'
import { adr } from './testUtils'

describe('Thilgen Test', () => {
  it('eval', () => {
    const engine = HyperFormula.buildFromSheets({
      Sheet1: [
        ['=TRUE()', 'goober', 1, '=B1&2'],
      ],
      Sheet2: [
        ['=Sheet1!D1','=Sheet1!C1','=Sheet1!B1','=Sheet1!A1']
      ],
      Sheet3: [
        [null,'hello','=SpecialValueLookup'],
        [11, 5,7],
        [-4, 13,9],
        [null, 'Row Sum','=SpecialGetRowSum'],
        [null, 'Row Sum Range','=SpecialGetRowSumRange'],
        [null, 'Col Sum','=SpecialGetColSum'],
        [null, 'Total Sum','=SpecialTotalSum'],
      ]
    })

    // if i try and pass in scope of sheet3 - this fails b/c it doesn't know about Sheet2
    //engine.addNamedExpression("SpecialValueLookup", '=Sheet2!$A$1')

    // this fails absolute check - but should it? ref is $A$1 and I am providing a scope - shouldn't that resolve?
    engine.addNamedExpression("SpecialValueLookup", '=CONCATENATE($B$1,"2")', 2)

    engine.addNamedExpression("SpecialGetRowSum", '=SUM($A$2,$C$2)', 2)
    
    //engine.addNamedExpression("SpecialGetRowSumRange", '=SUM(Sheet3!$A$2:Sheet3!$C$2)', 2)
    // should be equivalent to 
    engine.addNamedExpression("SpecialGetRowSumRange", '=SUM($A$2:$C$2)', 2)

    //engine.addNamedExpression("SpecialGetRowSum", '=SUM($A$2:$C$3)', 2)

    engine.addNamedExpression("SpecialGetColSum", '=SUM($A$2:$A$3)', 2)
    engine.addNamedExpression("SpecialTotalSum", '=SUM($A$2:$C$3)', 2)

    expect(engine.getCellValue({ sheet: 0, row: 0, col: 0 })).toEqual(true)
    expect(engine.getCellValue({ sheet: 0, row: 0, col: 1 })).toEqual('goober')
    expect(engine.getCellValue({ sheet: 0, row: 0, col: 2 })).toEqual(1)
    expect(engine.getCellValue({ sheet: 0, row: 0, col: 3 })).toEqual('goober2')

    expect(engine.getCellValue({ sheet: 1, row: 0, col: 0 })).toEqual('goober2')
    expect(engine.getCellValue({ sheet: 1, row: 0, col: 1 })).toEqual(1)
    expect(engine.getCellValue({ sheet: 1, row: 0, col: 2 })).toEqual('goober')
    expect(engine.getCellValue({ sheet: 1, row: 0, col: 3 })).toEqual(true)

    expect(engine.getCellValue({ sheet: 2, row: 0, col: 0 })).toEqual(null)
    expect(engine.getCellValue({ sheet: 2, row: 0, col: 1 })).toEqual('hello')
    expect(engine.getCellValue({ sheet: 2, row: 0, col: 2 })).toEqual('hello2')

    expect(engine.getCellValue({ sheet: 2, row: 1, col: 0 })).toEqual(11)
    expect(engine.getCellValue({ sheet: 2, row: 1, col: 1 })).toEqual(5)
    expect(engine.getCellValue({ sheet: 2, row: 1, col: 2 })).toEqual(7)

    expect(engine.getCellValue({ sheet: 2, row: 2, col: 0 })).toEqual(-4)
    expect(engine.getCellValue({ sheet: 2, row: 2, col: 1 })).toEqual(13)
    expect(engine.getCellValue({ sheet: 2, row: 2, col: 2 })).toEqual(9)

    expect(engine.getCellValue({ sheet: 2, row: 3, col: 0 })).toEqual(null)
    expect(engine.getCellValue({ sheet: 2, row: 3, col: 1 })).toEqual('Row Sum')
    expect(engine.getCellValue({ sheet: 2, row: 3, col: 2 })).toEqual(18)

    expect(engine.getCellValue({ sheet: 2, row: 4, col: 0 })).toEqual(null)
    expect(engine.getCellValue({ sheet: 2, row: 4, col: 1 })).toEqual('Row Sum Range')
    expect(engine.getCellValue({ sheet: 2, row: 4, col: 2 })).toEqual(23)

    expect(engine.getCellValue({ sheet: 2, row: 5, col: 0 })).toEqual(null)
    expect(engine.getCellValue({ sheet: 2, row: 5, col: 1 })).toEqual('Col Sum')
    expect(engine.getCellValue({ sheet: 2, row: 5, col: 2 })).toEqual(7)

    expect(engine.getCellValue({ sheet: 2, row: 6, col: 0 })).toEqual(null)
    expect(engine.getCellValue({ sheet: 2, row: 6, col: 1 })).toEqual('Total Sum')
    expect(engine.getCellValue({ sheet: 2, row: 6, col: 2 })).toEqual(41)
  })
})
