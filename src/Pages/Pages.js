import React from "react";
import "./Pages.css";
import {} from "react-icons/ri";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLayerGroup,
  faPenToSquare,
  faGear,
  faBell,
  faStore,
  faPeace,
  faMessage,
  faTableCells,
} from "@fortawesome/free-solid-svg-icons";

const Pages = () => {
  return (
    <div>
      <div className="background"></div>

      <div className="over-background ">
        {/* Upper box */}
        <div className="upper-box">
          <FontAwesomeIcon icon={faLayerGroup} style={{ color: "#ffffff" }} />
          <p>KAYLAY GUNNER</p>
          <div className="upper-box-icons">
            <FontAwesomeIcon
              icon={faPenToSquare}
              style={{ color: "#ffffff" }}
            />
            <FontAwesomeIcon icon={faGear} style={{ color: "#ffffff" }} />
          </div>
        </div>

        {/* Column boxes */}
        <div className="column-boxes">
          <div className="left-box">
            <p className="profile">PROFILE</p>
            <div />
            <div className="color-box"></div>
            <div className="firstboxes-icons">
              <FontAwesomeIcon icon={faBell} style={{ color: "#ffffff" }} />
              <FontAwesomeIcon icon={faStore} style={{ color: "#ffffff" }} />
              <FontAwesomeIcon icon={faPeace} style={{ color: "#ffffff" }} />
              <FontAwesomeIcon icon={faMessage} style={{ color: "#ffffff" }} />
              <FontAwesomeIcon
                icon={faTableCells}
                style={{ color: "#ffffff" }}
              />
            </div>
            <div className="left-buttons">
              <h5 style={{ color: "#00DCFF" }}>BIOGRAPHY </h5>
              <h5 style={{ color: "#fff" }}> USERNAME</h5>
            </div>
            <div />
            <p>
              Welcome to Porsche! Find information on all Porsche vehicles,
              services, dealers in your area and everything about the Porsche
              brand right here.
            </p>
            <div />
          </div>
          <div className="middle-boxes"></div>
          <div className="right-box"></div>
        </div>
      </div>
    </div>
  );
};

export default Pages;
