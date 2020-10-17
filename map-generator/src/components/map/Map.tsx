import React from "react";
import Cell from "../cell/Cell";
import "./Map.css";
import MapModel from "./MapModel";

function Map() {
  const map: MapModel = new MapModel();
  const cells: Array<JSX.Element> = new Array<JSX.Element>();

  for (let row = 0; row < map.height; row++) {
    for (let column = 0; column < map.width; column++) {
      cells.push(<Cell key={`${row}:${column}`} row={row} column={column} />);
    }
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
