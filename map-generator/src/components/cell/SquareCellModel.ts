import Visitor from "../visitor/Visitor";
import CellModel from "./CellModel";

export default class SquareCellModel extends CellModel {
  public accept(visitor: Visitor): void {
    visitor.visitSquareCellModel(this);
  }
}
