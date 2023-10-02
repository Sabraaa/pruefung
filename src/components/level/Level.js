import React from "react";
import "./Level.css";

const Level = ({ title, text }) => {
  return (
    <div>
      <div className="level-container">
        <h5 className="level-title">{title}</h5>
        <p className="level-text">{text}</p>
      </div>
      <div className="level-line"></div>
    </div>
  );
};

export default Level;
