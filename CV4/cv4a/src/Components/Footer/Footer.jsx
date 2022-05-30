import React from "react";
import Wave from "../../img/wave.png";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>pasha147223@gmail.com</span>
      </div>
    </div>
  );
};

export default Footer;
