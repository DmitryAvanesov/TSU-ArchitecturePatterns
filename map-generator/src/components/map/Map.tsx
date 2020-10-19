import React from "react";
import Cell from "../cell/Cell";
import "./Map.css";
import MapModel from "./MapModel";

function Map() {
  const map: MapModel = new MapModel();
  const cells: Array<JSX.Element> = new Array<JSX.Element>();

  for (let index = 0; index < map.cells.length; index++) {
    cells.push(
      <Cell
        key={`${map.cells[index].row}:${map.cells[index].column}`}
        cell={map.cells[index]}
      />
    );
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
