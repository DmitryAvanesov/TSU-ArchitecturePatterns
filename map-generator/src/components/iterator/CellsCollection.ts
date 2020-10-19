import CellModel from "../cell/CellModel";
import Aggregator from "./Aggregator";
import StaticIterator from "./StaticIterator";
import Iterator from "./Iterator";

export default class CellsCollection implements Aggregator {
  private items: CellModel[] = [];

  public getItems(): CellModel[] {
    return this.items;
  }

  public getCount(): number {
    return this.items.length;
  }

  public addItem(item: CellModel): void {
    this.items.push(item);
  }

  public getIterator(): Iterator<CellModel> {
    return new StaticIterator(this);
  }

  public getReverseIterator(): Iterator<CellModel> {
    return new StaticIterator(this, true);
  }
}
