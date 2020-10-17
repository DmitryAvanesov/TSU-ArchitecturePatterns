import React from "react";
import Director from "../Director";
import SquareBuilder from "../SquareBuilder";
import "./Cell.css";
import CellModel from "./CellModel";

interface IProps {
  row: number;
  column: number;
}

function Cell(props: IProps) {
  const director: Director = Director.getInstance();
  const builder: SquareBuilder = new SquareBuilder();

  director.setBuilder(builder);
  director.buildCellModel(props.row, props.column);

  const cell: CellModel = builder.getCellModel();

  return <div className={`cell`}></div>;
}

export default Cell;
