import React, { useEffect, useState } from "react";
import "./CircleComp.css";

import { useRef } from "react";

export default function CircleCompC(props) {
  const charBlockRef = useRef(null);
  const ref = useRef({
    text: props.text.textInput,
    length: props.text.textInput.length,
    width: 0,
    abc: [],
    chars: [],
    radius: Number(props.text.radius),
    widthCircleBlock: Number(props.text.radius) * 2,
    fontSize: Number(props.text.fontSize),
    angle: Number(props.text.angle),
    propor: props.text.propor,
    rotate: Number(props.text.rotate),
    rotate1: Number(props.text.rotate1),
  });
  const [state, setState] = useState({ ...ref.current });

  const changeAbc = () => {
    const fontSize = ref.current.fontSize;
    const radius = ref.current.radius;
    let chars = ref.current.text.split("");
    const newabc = new Set(chars);
    newabc.forEach((char) => {
      if (!ref.current.abc.find((el) => el.char === char)) {
        charBlockRef.current.innerText = char === " " ? `\u00A0 ` : char;
        let width = charBlockRef.current.getBoundingClientRect().width;
        let height = charBlockRef.current.getBoundingClientRect().height;
        charBlockRef.current.innerText = "";

        width = (fontSize * width) / height;
        height = fontSize;

        ref.current.abc.push({
          char: char,
          widthChar: width,
          heightChar: height,
          angleWidthChar: (Math.atan((0.5 * width) / radius) * 360) / Math.PI,
        });
      }
    });
    // console.log(ref.current.abc);
  };

  const changeChars = () => {
    let widthTotal = 0;
    // let chars = [];
    let chars = ref.current.text.split("");
    // getDataFromAbc();
    // get data from ABC for all chars
    chars = chars.map((char, i) => {
      const charInAbc = ref.current.abc.find((el) => el.char === char);
      const widthChar = charInAbc.widthChar;
      // const angleWidthChar = charInAbc.angleWidthChar;
      widthTotal = widthTotal + widthChar;
      return {
        char: char,
        // angleChar: angleChar,
        widthChar: widthChar,
        heightChar: charInAbc.heightChar,
        angleWidthChar: charInAbc.angleWidthChar,
      };
    });

    const compration = ref.current.compration;
    let angleChar = ref.current.angle;
    if (!ref.current.propor) {
      chars.forEach((item, i) => {
        if (i > 0) {
          angleChar =
            angleChar +
            0.5 *
              compration *
              (chars[i - 1].angleWidthChar + item.angleWidthChar);
        }
        chars[i].angleChar = angleChar;
        chars[i].rotChar =
          angleChar * (0.01 * ref.current.rotate1) + ref.current.rotate;
      });
    } else {
      const angleWidthChar = 360 / chars.length;
      const angle = ref.current.angle;
      chars.forEach((item, i) => {
        chars[i].angleChar = angle + i * angleWidthChar;
        chars[i].rotChar =
          chars[i].angleChar * (0.01 * ref.current.rotate1) +
          ref.current.rotate;
      });
    }

    ref.current.chars = [...chars];

    // console.log(chars);
    if (ref.current.chars.length > 0) {
      ref.current.widthCircleBlock =
        (ref.current.radius + ref.current.chars[0].heightChar) * 2;
    }

    ref.current.width = widthTotal;
    ref.current.length = ref.current.text.length;

    ref.current.chars = ref.current.chars.map((item) => {
      const radMax = ref.current.radius + ref.current.chars[0].heightChar;
      const radCentr = ref.current.radius + 0.5 * ref.current.fontSize;
      const cosa = Math.cos((item.angleChar * Math.PI) / 180);
      const sina = Math.sin((item.angleChar * Math.PI) / 180);
      // const top = radMax - radMax * cosa - item.widthChar * 0.5 * sina;
      // const left = radMax + radMax * sina - item.widthChar * 0.5 * cosa;
      const top = radCentr * (1 - cosa);
      const left = radMax + radCentr * sina - item.widthChar * 0.5;

      return { ...item, left: left, top: top };
    });
  };

  useEffect(() => {
    ref.current.text = props.text.textInput;
    changeAbc(); //change abc library and determining width and height
    changeChars(); //Change chars===========================
    console.log(ref.current.chars);
    setState({ ...ref.current });
  }, [props.text.textInput]);

  //Radius has changed
  useEffect(() => {
    ref.current.radius = Number(props.text.radius);
    //Change width and height of CircleBlock=====================
    if (ref.current.chars.length > 0) {
      ref.current.widthCircleBlock =
        (ref.current.radius + ref.current.fontSize) * 2;

      //Change angleWidthChar in ABC=========================================
      ref.current.abc = ref.current.abc.map((item) => {
        item.angleWidthChar =
          (Math.atan((0.5 * item.widthChar) / ref.current.radius) * 360) /
          Math.PI;
        return item;
      });
      changeChars();
    } else {
      ref.current.widthCircleBlock = ref.current.radius * 2;
    }
    setState({ ...ref.current });
  }, [props.text.radius]);

  // fontSize has changed
  useEffect(() => {
    ref.current.fontSize = Number(props.text.fontSize);

    //Change width and height of CircleBlock=====================
    if (ref.current.chars.length > 0) {
      ref.current.widthCircleBlock =
        (ref.current.radius + ref.current.fontSize) * 2;
      //Change width height and angleWidthChar in ABC=========================================
      ref.current.abc.forEach((item, i) => {
        const scale = ref.current.fontSize / item.heightChar;
        ref.current.abc[i].widthChar = item.widthChar * scale;
        ref.current.abc[i].heightChar = ref.current.fontSize;
        ref.current.abc[i].angleWidthChar =
          (Math.atan((0.5 * item.widthChar) / ref.current.radius) * 360) /
          Math.PI;
      });
      //Change width height and charAngle in chars
      changeChars();
    } else {
      ref.current.widthCircleBlock = ref.current.radius * 2;
    }
    setState({ ...ref.current });
  }, [props.text.fontSize]);

  //Angle================================================
  useEffect(() => {
    // const oldAngle = ref.current.angle;
    ref.current.angle = Number(props.text.angle);
    changeChars();
    setState({ ...ref.current });
  }, [props.text.angle]);

  //Compration================================================
  useEffect(() => {
    if (!ref.current.propor) {
      ref.current.compration = Number(props.text.compration);
      changeChars();
      setState({ ...ref.current });
    }
  }, [props.text.compration]);

  //Proportionately================================================
  useEffect(() => {
    ref.current.propor = props.text.propor;
    changeChars();
    setState({ ...ref.current });
  }, [props.text.propor]);

  //Rotation================================================
  useEffect(() => {
    ref.current.rotate = Number(props.text.rotate);
    changeChars();
    setState({ ...ref.current });
  }, [props.text.rotate]);
  //Rotation1================================================
  useEffect(() => {
    ref.current.rotate1 = Number(props.text.rotate1);
    changeChars();
    setState({ ...ref.current });
  }, [props.text.rotate1]);

  return (
    <div className="circleTextComp">
      <span className="charBlockRef" ref={charBlockRef}></span>

      <div
        className="circleText"
        style={{
          width: `${state.widthCircleBlock}px`,
          height: `${state.widthCircleBlock}px`,
        }}
      >
        {state.chars.map((item, ind) => {
          return (
            <div
              className="charCirc"
              key={ind}
              style={{
                width: `${item.widthChar}px`,
                height: `${item.heightChar}px`,
                left: `${item.left}px`,
                top: `${item.top}px`,
                rotate: `${
                  // item.angleChar * (0.01 * state.rotate1) + state.rotate
                  item.rotChar
                }deg`,
                // transformOrigin: "top left",
                // transform: `rotate(${item.angleChar + 180}deg) `,
                fontSize: `${state.fontSize * 0.75}px`,
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
