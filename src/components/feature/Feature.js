import React from "react";
import "./Feature.css";

const Feature = ({ title, text }) => {
  return (
    <div>
      <div className="feature-container">
        <div className="feature-title" >
          <p> {title}</p>
        </div>
        <div className="feature-text">
          <div className="vertical-line"></div>
          <p> {text}</p>
        </div>
      </div>
      <div className="horizonal-line"></div>
    </div>
  );
};

export default Feature;
