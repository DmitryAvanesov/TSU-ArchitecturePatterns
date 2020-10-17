import CellModel from "./cell/CellModel";

export default interface Builder {
  produceRow(row: number): void;
  produceColumn(column: number): void;
  produceType(): void;
}
