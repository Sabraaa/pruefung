import React from "react";
import "./Rightbox.css";
import Iconed from "../../components/iconedStyle/Iconed";
import NonIconed from "../../components/nonIconedStyle/NonIconed";
import Level from "../../components/level/Level";
import Range from "../../components/range/Range";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";

const Rightbox = () => {
  return (
    <div className="rightbox-container">
      <p className="title-right">RESUME</p>

      <div className="rightbox-items-wrapper">

        <div className="grid-right">
          <Iconed title="Switzerland" text="COUNTRY" />
        </div>
        <div className="grid-right">
          <div className="vertical-right-line"></div>
          <NonIconed title="12 Months" text="DATE OF BIRTHDAY" />
        </div>
        <div className="grid-right">
          <Iconed title="Montreux" text="CITY" />
        </div>
        <div className="grid-right">
          <div className="vertical-right-line"></div>
          <NonIconed title="OCT - 1998" text="EXPERIENCE" />
        </div>
        <div className="grid-right">
          <Iconed title="Deutsch" text="NATIVE LANGUAGE" />
        </div>
        <div className="grid-right">
          <div className="vertical-right-line"></div>
          <NonIconed title="17x" text="TOTAL PROJECT" />
        </div>
        <div className="grid-right">
          <NonIconed title="Male " text="GENDER" />
        </div>
        <div className="grid-right">
          <div className="vertical-right-line"></div>
          <Level title="0 / 3" text="BLOCK ACCOUNT" />
        </div>
        <div className="grid-right">
          <NonIconed title="Switzerland" text="FIELD OF ACTIVITY" />
        </div>
        <div className="grid-right">
          <div className="vertical-right-line"></div>
          <Level title="11" text="LEVEL" />
        </div>
        <div className="grid-right">
          <NonIconed title="$ 1548.15" text="EARNINGS" />
        </div>
        <div className="grid-right">
          <div className="vertical-right-line"></div>
          <Level title="6.21 / 10" text="ETHICS" />
        </div>
        <div className="grid-right">
          <Iconed title="+974306451483" text="PHONE NUMBER" />
        </div>
        <div className="grid-right">
          <div className="vertical-right-line"></div>
          <Level title="7.16 / 10" text="BEHAVIOR" />
        </div>
        <div className="grid-right">
          <Iconed title="+974306451483" text="WHATSAPP" />
        </div>
        <div className="grid-right">
          <div className="vertical-right-line"></div>
          <Level title="8.61 / 10" text="DICIPLINE" />
        </div>
        <div className="grid-right">
          <NonIconed title="8.26 / 10" text="PROFILE RATING" />
        </div>
        <div className="grid-right">
          <div className="vertical-right-line"></div>
          <Level title="6.31 / 10" text="PATIENCE" />
        </div>
        <div className="grid-right">
          <NonIconed title="@NETFLIX" text="TELEGRAM" />
        </div>
        <div className="grid-right">
          <div className="vertical-right-line"></div>
          <Level title="4.29 / 10" text="QUICK ACTION" />
        </div>
      </div>

      <div>
        <div className="Right-skills-title">
          <p >SKILLS</p>
          <FontAwesomeIcon
            className="square-plus"
            icon={faSquarePlus}
            style={{ color: "#ffffff" }}
          />
        </div>
        <div className="range-lower-items">
          <Range />
          <Range />
          <Range />
          <Range />
          <Range />
        </div>
      </div>
    </div>
  );
};

export default Rightbox;
