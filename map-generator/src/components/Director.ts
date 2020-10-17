import Builder from "./Builder";

export default class Director {
  private static instance: Director;
  private builder?: Builder;

  private constructor() {}

  public static getInstance(): Director {
    if (!Director.instance) {
      Director.instance = new Director();
    }

    return Director.instance;
  }

  public setBuilder(builder: Builder): void {
    this.builder = builder;
  }

  public buildCellModel(row: number, column: number): void {
    this.builder?.produceRow(row);
    this.builder?.produceColumn(column);
    this.builder?.produceType();
  }
}
