import React from "react";
import "./Leftbox.css";
import {
  faBell,
  faMessage,
  faPeace,
  faStore,
  faTableCells,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Leftbox = () => {
  return (
    <div>
      <div className="left-box">
        <p className="profile">PROFILE</p>
        <div className="custom-line-profile"></div>
        <div className="color-box"></div>
        <div className="firstboxes-icons">
          <FontAwesomeIcon icon={faBell} style={{ color: "#ffffff" }} />
          <FontAwesomeIcon icon={faStore} style={{ color: "#ffffff" }} />
          <FontAwesomeIcon icon={faPeace} style={{ color: "#ffffff" }} />
          <FontAwesomeIcon icon={faMessage} style={{ color: "#ffffff" }} />
          <FontAwesomeIcon icon={faTableCells} style={{ color: "#ffffff" }} />
        </div>
        <div className="custom-line"></div>

        <div className="left-buttons">
          <h5 style={{ color: "#00DCFF" }}>BIOGRAPHY </h5>
          <h5 style={{ color: "#fff" }}> USERNAME</h5>
        </div>
        <div className="custom-line"></div>
        <p className="porsche">
          Welcome to Porsche! Find information on all Porsche vehicles,
          services, dealers in your area and everything about the Porsche brand
          right here.
        </p>
        <div className="custom-line"></div>
      </div>
    </div>
  );
};

export default Leftbox;
