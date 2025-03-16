import React from "react";
import "./Customercare.css";
import closeicon from "../../assets/close-chat.png";
import Orb from "./Orb";

const Customercare = ({ setJaz }) => {
  return (
    <div className="customercare">
        <div className="customercare-container">
        <h3 style={{ textAlign: "center" }}>NORTHERN HIKERS SUPPORT AI</h3>
      <h4 style={{ textAlign: "center" }}>
        <span className="jazebath" style={{ display: "inline" }}>
          JAZEBATH
        </span>
      </h4>
      <h5 style={{ textAlign: "center" }}>
        <span className="jazebath" style={{ display: "inline" }}>
          جيزيبث
        </span>
      </h5>
      <div>
        <img
          src={closeicon}
          alt=""
          className="socialchatclose"
          onClick={() => setJaz(false)}
        />
      </div>
      <div style={{ width: "100%", height: "600px", position: "relative" }}>
        <Orb
          hoverIntensity={0.5}
          rotateOnHover={true}
          hue={0}
          forceHoverState={false}
        />
      </div>
        </div>
    </div>
  );
};

export default Customercare;
