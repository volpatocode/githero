import { useState } from "react";
import { number } from "yup";
import { initialGrid } from "./data";
import { GitGraph, Row, Cell } from "./styles";

export default function Graph() {
  const [grid, setGrid] = useState<number[][]>(initialGrid);

  // const setCell = (rowIndex: number, colIndex: number, value: number) => {
  //   const cellIndex = rowIndex * 7 + colIndex;
  //   const newGrid = [...grid];
  //   newGrid[rowIndex][colIndex] = value;
  //   setGrid([...newGrid]);
  // };

  return (
    <GitGraph>
      {grid?.map((row, rowIndex) => (
        <Row key={rowIndex}>
          {row?.map((value, colIndex) => (
            <Cell
              key={colIndex}
              // onClick={() => {
              //   const cellIndex = rowIndex * 7 + colIndex
              //   const cellValue = grid[colIndex][rowIndex]
              //   setGrid([...grid]);
              //   console.log(cellIndex, cellValue);
              // }}
              value={value}
            />
          ))}
        </Row>
      ))}
    </GitGraph>
  );
}
