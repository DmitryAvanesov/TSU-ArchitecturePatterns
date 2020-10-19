import Director from "../builder/Director";
import SquareBuilder from "../builder/SquareBuilder";
import Cell from "../cell/Cell";
import CellModel from "../cell/CellModel";
import CellsCollection from "../iterator/CellsCollection";

export default class MapModel {
  width: number;
  height: number;
  cells: CellsCollection;

  constructor() {
    this.width = 300;
    this.height = 150;
    this.cells = new CellsCollection();

    const director: Director = Director.getInstance();
    const builder: SquareBuilder = new SquareBuilder();
    director.setBuilder(builder);

    for (let row = 0; row < this.height; row++) {
      for (let column = 0; column < this.width; column++) {
        director.buildCellModel(row, column);
        this.cells.addItem(builder.getCellModel());
      }
    }
  }
}
