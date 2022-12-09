import { useState } from "react";
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
      {grid?.map((row, colIndex,) => (
        <Row key={row[colIndex]}>
          {row?.map((value, rowIndex) => (
            <Cell
              key={rowIndex}
              onClick={() => {
                const cellIndex = rowIndex * 7 + colIndex
                const cellValue = grid[colIndex]
                // setGrid([...grid]);
                console.log(cellValue);
              }}
              value={value}
            />
          ))}
        </Row>
      ))}
    </GitGraph>
  );
}
