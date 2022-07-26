import React from "react";
import Box from "./Box";
import "./board.css";
const Board = ({ board, onClick }) => {
  return (
    <div className="board">
      {board.map((instance, idx) => (
        <Box
          value={instance}
          onClick={() => instance === null && onClick(idx)}
        />
      ))}
    </div>
  );
};

export default Board;
