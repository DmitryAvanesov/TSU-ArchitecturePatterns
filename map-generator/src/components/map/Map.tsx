import React from "react";
import Cell from "../cell/Cell";
import CellModel from "../cell/CellModel";
import "./Map.css";
import MapModel from "./MapModel";

function Map() {
  const map: MapModel = new MapModel();
  const cells: Array<JSX.Element> = new Array<JSX.Element>();

  for (let index = 0; index < map.cells.getCount(); index++) {
    const cell: CellModel = map.cells.getItems()[index];
    cells.push(<Cell key={`${cell.row}:${cell.column}`} cell={cell} />);
  }

  return (
    <div
      className="map"
      style={{
        gridTemplateColumns: `repeat(${map.width}, auto)`,
        gridTemplateRows: `repeat(${map.height}, auto)`,
      }}
    >
      {cells}
    </div>
  );
}

export default Map;
