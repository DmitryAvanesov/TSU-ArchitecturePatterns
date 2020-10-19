import React from "react";
import "./Cell.css";
import CellModel from "./CellModel";

interface IProps {
  cell: CellModel;
}

function Cell(props: IProps) {
  const { cell } = props;
  return <div className={`${cell.type} ${cell.shape}`}></div>;
}

export default Cell;
