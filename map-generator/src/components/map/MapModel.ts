import CellModel from "../cell/CellModel";
import Director from "../Director";
import SquareBuilder from "../SquareBuilder";

export default class MapModel {
  width: number;
  height: number;
  cells: CellModel[];

  constructor() {
    this.width = 300;
    this.height = 150;
    this.cells = [];

    const director: Director = Director.getInstance();
    const builder: SquareBuilder = new SquareBuilder();
    director.setBuilder(builder);

    for (let row = 0; row < this.height; row++) {
      for (let column = 0; column < this.width; column++) {
        director.buildCellModel(row, column);
        this.cells.push(builder.getCellModel());
      }
    }
  }
}
