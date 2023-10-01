import React from "react";
import "./Pages.css";
import {} from "react-icons/ri";
import Feature from "../components/feature/Feature";
import Upperbox from "../Containers/upper/Upperbox";
import Leftbox from "../Containers/left/Leftbox";
import Middle from "../Containers/middleboxes/Middle";

const Pages = () => {
  return (
    <div>
      <div className="background"></div>

      <div className="over-background ">

        {/* Upper box */}
        <Upperbox />

        {/* Column boxes */}
        <div className="column-boxes">
          {/* Left one */}
          <Leftbox />

          {/* Middle boxes */}
          <Middle/>

          <div className="right-box"></div>
        </div>
      </div>
    </div>
  );
};

export default Pages;
