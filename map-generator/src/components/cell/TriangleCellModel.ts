import Visitor from "../visitor/Visitor";
import CellModel from "./CellModel";

export default class TriangleCellModel extends CellModel {
  public accept(visitor: Visitor): void {
    visitor.visitTriangleCellModel(this);
  }
}
