import CellModel from "../cell/CellModel";
import CellsCollection from "./CellsCollection";
import Iterator from "./Iterator";

export default class StaticIterator implements Iterator<CellModel> {
  private collection: CellsCollection;
  private position: number = 0;
  private reverse: boolean = false;

  constructor(collection: CellsCollection, reverse: boolean = false) {
    this.collection = collection;
    this.reverse = reverse;

    if (reverse) {
      this.position = collection.getCount() - 1;
    }
  }

  public current(): CellModel {
    return this.collection.getItems()[this.position];
  }

  public next(): CellModel {
    const item = this.collection.getItems()[this.position];
    this.position += this.reverse ? -1 : 1;
    return item;
  }

  public key(): number {
    return this.position;
  }

  public valid(): boolean {
    if (this.reverse) {
      return this.position >= 0;
    }

    return this.position < this.collection.getCount();
  }

  public rewind() {
    this.position = this.reverse ? this.collection.getCount() - 1 : 0;
  }
}
