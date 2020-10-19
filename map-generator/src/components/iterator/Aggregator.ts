import CellModel from "../cell/CellModel";
import Iterator from "./Iterator";

export default interface Aggregator {
  getIterator(): Iterator<CellModel>;
}
