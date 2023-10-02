import React from "react";
import "./Level.css";
import ProgresBar from "../progressBar/ProgresBar";

const Level = ({ title, text }) => {
  return (
    <div>
      <div className="level-container">
        <h5 className="level-title">{title}</h5>
        <p className="level-text">{text}</p>
      </div>
      <ProgresBar />
    </div>
  );
};

export default Level;
