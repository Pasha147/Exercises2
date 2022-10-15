import React from "react";
import "./HeaderText.css";
import { headerText } from "../appdata";
import { useEffect } from "react";

export default function HeaderText(props) {
  return (
    <div className="headerText">
      {headerText.map((item, ind) => {
        return (
          <span
            key={`ht${ind}`}
            style={{
              width: `${item.widthChar}px`,
              height: `${item.heightChar}px`,
              left: `${item.left}px`,
              top: `${item.top}px`,
              rotate: `${item.rotChar}deg`,
              fontSize: `${150 * 0.75}px`,
            }}
          >
            {item.char}
          </span>
        );
      })}
    </div>
  );
}
