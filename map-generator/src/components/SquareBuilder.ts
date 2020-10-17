import Builder from "./Builder";
import CellModel from "./cell/CellModel";

export default class SquareBuilder implements Builder {
  private cellModel: CellModel;

  constructor() {
    this.cellModel = new CellModel();
  }

  public produceRow(row: number): void {
    this.cellModel.row = row;
  }

  public produceColumn(column: number): void {
    this.cellModel.column = column;
  }

  public produceType(): void {
    this.cellModel.type = "flat";
  }

  public getCellModel(): CellModel {
    const result = this.cellModel;
    this.cellModel = new CellModel();
    return result;
  }
}
