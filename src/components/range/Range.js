import React from "react";
import "./Range.css";
import Red from "../../assets/red.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import ProgresBar from "../progressBar/ProgresBar";
const Range = () => {
  return (
    <div>
      <div className="range-container">
        <div className="range-red">
          <img src={Red} alt="red" />
        </div>
        <div className="text-gradient-container">
          <div className="range-text">
            <p>Blender</p>
            <span>7.39</span>
          </div>
          <ProgresBar />
        </div>
        <FontAwesomeIcon
          className="range-ellipsis"
          icon={faEllipsisVertical}
          style={{ color: "#ffffff" }}
        />
      </div>
      <div className="range-line"></div>
    </div>
  );
};

export default Range;
