import {AbsoluteCellRange} from '../AbsoluteCellRange'
import {CellError, CellValue, SimpleCellAddress} from '../Cell'
import {ColumnsSpan} from '../ColumnsSpan'
import {IMatrix, Matrix, NotComputedMatrix, MatrixSize} from '../Matrix'
import {Ast} from '../parser'
import {RowsSpan} from '../RowsSpan'

export class MatrixVertex {

  get width(): number {
    if (this.matrix instanceof CellError) {
      return 0
    }
    return this.matrix.width()
  }

  get height(): number {
    if (this.matrix instanceof CellError) {
      return 0
    }
    return this.matrix.height()
  }

  get sheet(): number {
    return this.cellAddress.sheet
  }
  public static fromRange(range: AbsoluteCellRange, formula?: Ast): MatrixVertex {
    return new MatrixVertex(range.start, range.width(), range.height(), formula)
  }
  public cellAddress: SimpleCellAddress
  private formula: Ast | null
  public matrix: IMatrix | CellError

  constructor(cellAddress: SimpleCellAddress, width: number, height: number, formula?: Ast) {
    this.cellAddress = cellAddress
    this.formula = formula || null
    this.matrix = new NotComputedMatrix(new MatrixSize(width, height))
  }

  public setCellValue(matrix: Matrix | CellError) {
    this.matrix = matrix
  }

  public getCellValue(): Matrix | CellError {
    if (this.matrix instanceof NotComputedMatrix) {
      throw Error('Matrix not computed yet.')
    }
    return this.matrix as (Matrix | CellError)
  }

  public getMatrixCellValue(address: SimpleCellAddress): number | CellError {
    const col = address.col - this.cellAddress.col
    const row = address.row - this.cellAddress.row

    if (this.matrix instanceof CellError) {
      return this.matrix
    } else {
      return this.matrix.get(col, row)
    }
  }

  public setMatrixCellValue(address: SimpleCellAddress, value: number): void {
    const col = address.col - this.cellAddress.col
    const row = address.row - this.cellAddress.row
    if (this.matrix instanceof Matrix) {
      this.matrix.set(col, row, value)
    }
  }

  public getRange(): AbsoluteCellRange {
    return AbsoluteCellRange.spanFrom(this.cellAddress, this.width, this.height)
  }

  public getAddress(): SimpleCellAddress {
    return this.cellAddress
  }

  public setAddress(address: SimpleCellAddress) {
    this.cellAddress = address
  }

  public getFormula(): Ast | null {
    return this.formula
  }

  public setFormula(newFormula: Ast) {
    this.formula = newFormula
  }

  public isFormula(): boolean {
    return this.formula !== null
  }

  public spansThroughSheetRows(sheet: number, startRow: number, endRow: number = startRow): boolean {
    return (this.cellAddress.sheet === sheet) &&
      (this.cellAddress.row <= endRow) &&
      (startRow < this.cellAddress.row + this.height)
  }

  public spansThroughSheetColumn(sheet: number, col: number, columnEnd: number = col): boolean {
    return (this.cellAddress.sheet === sheet) &&
      (this.cellAddress.col <= columnEnd) &&
      (col < this.cellAddress.col + this.width)
  }

  public addRows(sheet: number, row: number, numberOfRows: number): void {
    if (this.matrix instanceof Matrix) {
      this.matrix.addRows(row - this.getAddress().row, numberOfRows)
    }
  }

  public addColumns(sheet: number, column: number, numberOfColumns: number): void {
    if (this.matrix instanceof Matrix) {
      this.matrix.addColumns(column - this.getAddress().col, numberOfColumns)
    }
  }

  public removeRows(removedRows: RowsSpan): void {
    if (this.matrix instanceof Matrix) {
      const removedRowsFromMatrix = this.rowsFromMatrix().intersect(removedRows)!
      this.matrix.removeRows(removedRowsFromMatrix.rowStart - this.getAddress().row, removedRowsFromMatrix.rowEnd - this.getAddress().row)
    }
  }

  public removeColumns(removedColumns: ColumnsSpan): void {
    if (this.matrix instanceof Matrix) {
      const removedColumnsFromMatrix = this.columnsFromMatrix().intersect(removedColumns)!
      this.matrix.removeColumns(removedColumnsFromMatrix.columnStart - this.getAddress().col, removedColumnsFromMatrix.columnEnd - this.getAddress().col)
    }
  }

  public isComputed() {
    return (!(this.matrix instanceof NotComputedMatrix))
  }

  public columnsFromMatrix() {
    return new ColumnsSpan(this.cellAddress.sheet, this.cellAddress.col, this.cellAddress.col + this.width - 1)
  }

  public rowsFromMatrix() {
    return new RowsSpan(this.cellAddress.sheet, this.cellAddress.row, this.cellAddress.row + this.height - 1)
  }
}
