import React from "react";
import "./Rightbox.css";
import Iconed from "../../components/iconedStyle/Iconed";
import NonIconed from "../../components/nonIconedStyle/NonIconed";
import Level from "../../components/level/Level";
import Range from "../../components/Range";

const Rightbox = () => {
  return (
    <div className="rightbox-container">
      <p className="title-right">RESUME</p>
      <div className="upper-items">
        <div className="country-date">
          <Iconed title="Switzerland" text="COUNTRY" />
          <NonIconed title="12 Months" text="DATE OF BIRTHDAY" />
        </div>
        <div className="country-date">
          <Iconed title="Montreux" text="CITY" />
          <NonIconed title="OCT - 1998" text="EXPERIENCE" />
        </div>
        <div className="country-date">
          <Iconed title="Deutsch" text="NATIVE LANGUAGE" />
          <NonIconed title="17x" text="TOTAL PROJECT" />
        </div>
        {/* <div>
          <NonIconed title="Male " text="GENDER" />
          <Level />
        </div>
        <div>
          <NonIconed title="Switzerland" text="FIELD OF ACTIVITY" />
          <Level />
        </div>
        <div>
          <NonIconed title="$ 1548.15" text="EARNINGS" />
          <Level />
        </div>
        <div>
          <Iconed title="+974306451483" text="PHONE NUMBER" />
          <Level />
        </div>
        <div>
          <Iconed title="+974306451483" text="WHATSAPP" />
          <Level />
        </div>
        <div>
          <NonIconed title="8.26 / 10" text="PROFILE RATING" />
          <Level />
        </div>
        <div>
          <NonIconed title="@NETFLIX" text="TELEGRAM" />
          <Level />
        </div> */}
      </div>

      {/* <p className="title-right">SKILLS</p>
      <div>
        <Range />
        <Range />
        <Range />
        <Range />
        <Range />
      </div> */}
    </div>
  );
};

export default Rightbox;
