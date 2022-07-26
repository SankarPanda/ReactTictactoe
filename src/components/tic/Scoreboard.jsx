import React from "react";
import "./score.css";

const Scoreboard = ({ scores, xPlaying }) => {
  return (
    <div className="scoreBoard">
      <span className={`score x-score ${!xPlaying && "inactive"}`}>
        X-{scores.xScore}
      </span>
      <span className={`score o-score ${xPlaying && "inactive"}`}>
        O-{scores.oScore}
      </span>
    </div>
  );
};

export default Scoreboard;
