import React from "react";
import "./box.css";

const Box = ({ value, onClick }) => {
  const cls = value === "X" ? "box x" : "box o";
  return (
    <div className={cls} onClick={onClick}>
      {value}
    </div>
  );
};

export default Box;
