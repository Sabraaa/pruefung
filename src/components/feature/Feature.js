import React from "react";
import "./Feature.css";

const Feature = ({ title, text }) => {
  return (
    <div>
      <div>
        <div>
          <p> {title}</p>
          <div className="vertical-line"></div>
        </div>
        <div>
          <p> {text}</p>
        </div>
      </div>
      <div className="horizonal-line"></div>
    </div>
  );
};

export default Feature;
