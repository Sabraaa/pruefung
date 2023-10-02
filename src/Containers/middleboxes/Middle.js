import React from "react";
import "./Middle.css";
import NewProject from "../sampleMiddle/NewProject";
import NewRecruitment from "../sampleMiddle/NewRecruitment";
import Resume from "../sampleMiddle/Resume";

const Middle = () => {
  return (
    <div>
      <div className="middle-boxes">
        {/* 1 */}
        <div className="middle-box">
          <NewProject />
        </div>
        {/* 2 */}
        <div className="middle-box">
          <NewRecruitment />
        </div>
        {/* 3 */}
        <div className="lower-middle-box">
          <Resume />
        </div>
        {/* 4 */}
        <div className="lower-middle-box">
          <Resume />
        </div>
      </div>
    </div>
  );
};

export default Middle;
