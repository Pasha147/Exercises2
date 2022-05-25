import React from "react";
import "./Services.scss";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import { Card } from "../Card/Card";
import Resume from "./PAVEL V_5.pdf";

export const Services = () => {
  return (
    <div className="services">
      <div className="awesome">
        <span>My Awesome</span>
        <span>services</span>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          <br />
          Laudantium dignissimos officiis sint quae mollitia natus rem impedit
          libero ipsa temporibus.
        </span>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      <div className="cards">
        <div style={{ left: "14rem" }}>
          <Card
            emoji={HeartEmoji}
            heading={"Design"}
            detail={"Figma, Sketch, Photoshop, Adobe, Adobe xd"}
          />
        </div>
        <div style={{ top: "12rem", left: "-4rem" }}>
          <Card
            emoji={Glasses}
            heading={"Developer"}
            detail={"Html, Css, JavaScript, React"}
          />
        </div>
        <div style={{ top: "19rem", left: "12rem" }}>
          <Card
            emoji={Humble}
            heading={"UI/UX"}
            detail={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, vero!"
            }
          />
        </div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};
