import React, { useState } from "react";
import Board from "./components/tic/Board";
import ResetButton from "./components/tic/ResetButton";
import Scoreboard from "./components/tic/Scoreboard";

import "./tictactoe.css";

const Tictactoe = () => {
  const WIN_CONDITIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xPlaying, setXPlaying] = useState(true);
  const [scores, setScores] = useState({ xScore: 0, oScore: 0 });
  const [gameOver, setGameOver] = useState(false);

  const handleBoxClick = (boxIdx) => {
    const updatedBoard = board.map((val, idx) => {
      if (idx === boxIdx) {
        return xPlaying ? "X" : "O";
      } else {
        return val;
      }
    });
    const winner = checkWinner(updatedBoard);

    if (winner) {
      if (winner === "O") {
        let { oScore } = scores;
        oScore += 1;
        setScores({ ...scores, oScore });
      } else {
        let { xScore } = scores;
        xScore += 1;
        setScores({ ...scores, xScore });
      }
    }
    setBoard(updatedBoard);
    setXPlaying(!xPlaying);
  };
  const checkWinner = (board) => {
    for (var i = 0; i < WIN_CONDITIONS.length; i++) {
      const [x, y, z] = WIN_CONDITIONS[i];
      if (board[x] && board[x] === board[y] && board[y] === board[z]) {
        setGameOver(true);
        return board[x];
      }
    }
  };
  const resetBoard = () => {
    setGameOver(false);
    setBoard(Array(9).fill(null));
    setXPlaying(true);
  };
  const resetGame = () => {
    setGameOver(false);
    setBoard(Array(9).fill(null));
    setXPlaying(true);
    setScores({ xScore: 0, oScore: 0 });
  };
  return (
    <div className="tic">
      <h1>TicTacToe</h1>
      <Scoreboard scores={scores} xPlaying={xPlaying} />
      <Board board={board} onClick={gameOver ? resetBoard : handleBoxClick} />
      <ResetButton text="Reset" resetBoard={resetBoard} />
      <ResetButton text="Hard Reset" resetBoard={resetGame} />
    </div>
  );
};

export default Tictactoe;
