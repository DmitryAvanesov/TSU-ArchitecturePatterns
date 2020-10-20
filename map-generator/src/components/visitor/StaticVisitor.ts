import SquareCellModel from "../cell/SquareCellModel";
import TriangleCellModel from "../cell/TriangleCellModel";
import Visitor from "./Visitor";

export default class StaticVisitor implements Visitor {
  public visitTriangleCellModel(element: TriangleCellModel): void {}

  public visitSquareCellModel(element: SquareCellModel): void {}
}
