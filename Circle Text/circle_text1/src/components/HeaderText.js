import React from "react";
import "./HeaderText.css";
import { headerText } from "../appdata";
import { useEffect } from "react";

export default function HeaderText(props) {
  let fontSize = 100;
  fontSize = fontSize * 0.75;

  // useEffect(() => {
  //   let ht = [...headerText];
  //   ht.forEach((it, ind) => {
  //     it.left = it.left + 18;
  //   });
  //   console.log(JSON.stringify(ht));
  // }, []);
  return (
    <div className="headerCenter">
      <div className="headerText">
        {headerText.map((item, ind) => {
          return (
            <div
              className="char"
              key={`ht${ind}`}
              style={{
                width: `${item.widthChar}px`,
                height: `${item.heightChar}px`,
                left: `${item.left}px`,
                top: `${item.top}px`,
                rotate: `${item.rotChar}deg`,
                fontSize: `${fontSize}px`,
              }}
            >
              {item.char}
            </div>
          );
        })}
      </div>
    </div>
  );
}
