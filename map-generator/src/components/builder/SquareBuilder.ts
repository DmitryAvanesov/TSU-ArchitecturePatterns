import CellModel from "../cell/CellModel";
import SquareCellModel from "../cell/SquareCellModel";
import Builder from "./Builder";

export default class SquareBuilder implements Builder {
  private cellModel: CellModel;

  constructor() {
    this.cellModel = new SquareCellModel();
  }

  public produceRow(row: number): void {
    this.cellModel.row = row;
  }

  public produceColumn(column: number): void {
    this.cellModel.column = column;
  }

  public produceType(): void {
    const seed = Math.random();
    this.cellModel.type =
      seed < 0.000025
        ? "mountain"
        : seed < 0.00005
        ? "desert"
        : seed < 0.0001
        ? "lake"
        : "flat";
  }

  public getCellModel(): CellModel {
    const result = this.cellModel;
    this.cellModel = new SquareCellModel();
    return result;
  }
}
