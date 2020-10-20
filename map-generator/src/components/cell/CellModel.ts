import Visitor from "../visitor/Visitor";

export default abstract class CellModel {
  row?: number;
  column?: number;
  type?: string;

  abstract accept(visitor: Visitor): void;
}
