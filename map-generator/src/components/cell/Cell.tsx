import React from "react";
import "./Cell.css";
import CellModel from "./CellModel";
import SquareCellModel from "./SquareCellModel";
import TriangleCellModel from "./TriangleCellModel";

interface IProps {
  cell: CellModel;
}

function Cell(props: IProps) {
  const { cell } = props;
  return (
    <div
      className={`${cell.type} ${
        cell instanceof TriangleCellModel ? "triangle" : "square"
      }`}
    ></div>
  );
}

export default Cell;
