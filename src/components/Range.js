import React from "react";
import Red from "../assets/red.png";

const Range = () => {
  return (
    <div className="range-container">
      <img className="range-red" src={Red} alt="red" />
      <div className="range-text">
        <p >Blender</p>
      </div>
    </div>
  );
};

export default Range;
