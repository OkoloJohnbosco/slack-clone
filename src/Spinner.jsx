import React from "react";
import "./Spinner.css";

function Spinner(width, height) {
  return (
    <div
      className="spinner"
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <div className="skCube1 skCube"></div>
      <div className="skCube2 skCube"></div>
      <div className="skCube3 skCube"></div>
      <div className="skCube4 skCube"></div>
    </div>
  );
}

export default Spinner;
