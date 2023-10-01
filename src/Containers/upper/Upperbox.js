import React from "react";
import "./Upperbox.css";
import {
  faGear,
  faLayerGroup,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Upperbox = () => {
  return (
    <div>
      <div className="upper-box">
        <FontAwesomeIcon icon={faLayerGroup} style={{ color: "#ffffff" }} />
        <p>KAYLAY GUNNER</p>
        <div className="upper-box-icons">
          <FontAwesomeIcon icon={faPenToSquare} style={{ color: "#ffffff" }} />
          <FontAwesomeIcon icon={faGear} style={{ color: "#ffffff" }} />
        </div>
      </div>
    </div>
  );
};

export default Upperbox;
