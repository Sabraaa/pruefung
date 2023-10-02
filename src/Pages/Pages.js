import React from "react";
import "./Pages.css";
import Upperbox from "../Containers/upper/Upperbox";
import Leftbox from "../Containers/left/Leftbox";
import Middle from "../Containers/middleboxes/Middle";
import Rightbox from "../Containers/right/Rightbox";

const Pages = () => {
  return (
    <div>
      <div className="background"></div>

      <div className="over-background ">
        {/* Column boxes */}
        <div className="column-boxes">
          {/* Left one */}
          <Leftbox />

          {/* Middle boxes */}
          <Middle />

          {/* Right one */}
          <div className="right-box">
            <Rightbox />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pages;
