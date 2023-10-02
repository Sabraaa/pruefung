import React from "react";
import Red from "../../assets/red.png";
import "./Iconed.css";

const Iconed = ({ title, text }) => {
  return (
    <div className="iconed-main-container">
      <div className="iconed-container">
        <img className="Iconed-red" src={Red} alt="red" />
        <h5> {title}</h5>
      </div>
      <div className="iconed-text">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Iconed;
