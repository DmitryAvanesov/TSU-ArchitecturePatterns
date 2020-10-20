import SquareCellModel from "../cell/SquareCellModel";
import TriangleCellModel from "../cell/TriangleCellModel";

export default interface Visitor {
  visitTriangleCellModel(element: TriangleCellModel): void;
  visitSquareCellModel(element: SquareCellModel): void;
}
