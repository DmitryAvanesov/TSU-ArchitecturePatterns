import React from "react";
import "./Cell.css";
import CellModel from "./CellModel";

interface IProps {
  row: number;
  column: number;
}

function Cell(props: IProps) {
  const cell: CellModel = new CellModel(props.row, props.column);

  return (
    <div
      className={`cell ${
        (cell.row + cell.column) % 2 === 0 ? "triangle-down" : "triangle-up"
      }`}
      style={{ right: `${cell.column * 10}px` }}
    ></div>
  );
}

export default Cell;
