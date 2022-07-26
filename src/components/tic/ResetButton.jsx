import React from "react";
import "./reset.css";

const ResetButton = ({ text, resetBoard }) => {
  return (
    <button className="reset-btn" onClick={() => resetBoard()}>
      {text}
    </button>
  );
};

export default ResetButton;
