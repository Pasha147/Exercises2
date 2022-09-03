import React, { useEffect, useState } from "react";
import "./CircleComp.css";

import { useRef } from "react";

export default function CircleComp(props) {
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
  });
  const [state, setState] = useState({ ...ref.current });

  useEffect(() => {
    ref.current.text = props.text.textInput;
    const fontSize = ref.current.fontSize;
    const radius = ref.current.radius;

    //change abc library and determining width and height
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
    //========================================

    let widthTotal = 0;

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
    //Change chars===========================
    let angleChar = 0;
    chars.forEach((item, i) => {
      if (i === 0) {
        angleChar = 0;
      } else {
        angleChar =
          angleChar + 0.5 * (chars[i - 1].angleWidthChar + item.angleWidthChar);
      }
      chars[i].angleChar = angleChar;
    });

    ref.current.chars = [...chars];
    // console.log(chars);
    if (ref.current.chars.length > 0) {
      ref.current.widthCircleBlock =
        (ref.current.radius + ref.current.chars[0].heightChar) * 2;
    }

    ref.current.width = widthTotal;
    ref.current.length = ref.current.text.length;

    setState({ ...ref.current });

    // console.log(ref.current);
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
      //Change angleChar in chars=========================================
      let angleChar = 0;
      let chars = ref.current.chars;
      chars.forEach((item, i) => {
        const charInAbc = ref.current.abc.find((el) => el.char === item.char);
        chars[i].angleWidthChar = charInAbc.angleWidthChar;
        if (i === 0) {
          angleChar = 0;
        } else {
          angleChar =
            angleChar +
            0.5 * (chars[i - 1].angleWidthChar + item.angleWidthChar);
        }
        chars[i].angleChar = angleChar;
      });
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
      let angleChar = 0;
      let chars = ref.current.chars;
      chars.forEach((item, i) => {
        const charInAbc = ref.current.abc.find((el) => el.char === item.char);
        ref.current.chars[i].widthChar = charInAbc.widthChar;
        ref.current.chars[i].heightChar = charInAbc.heightChar;
        ref.current.chars[i].angleWidthChar = charInAbc.angleWidthChar;
        if (i === 0) {
          angleChar = 0;
        } else {
          angleChar =
            angleChar +
            0.5 *
              (ref.current.chars[i - 1].angleWidthChar +
                charInAbc.angleWidthChar);
        }
        ref.current.chars[i].angleChar = angleChar;
      });
    } else {
      ref.current.widthCircleBlock = ref.current.radius * 2;
    }

    setState({ ...ref.current });
  }, [props.text.fontSize]);

  return (
    <div className="circleTextComp">
      <span
        className="charBlockRef"
        ref={charBlockRef}
        style={{
          fontSize: `${state.fontSize}px`,
        }}
      ></span>
      {/* {/* <span>{props.text.textInput}</span>
      <p>{`text=${state.text}`}</p> 
      <p>{`width=${state.width}`}</p>
      <p>{`length=${state.length}`}</p>
      <p>{`Proportionately=${props.text.propor}`}</p>
      <p>{`Radius=${props.text.radius}`}</p>
      <p>{`FontSize=${props.text.fontSize}`}</p>
      <p>{`Angle=${props.text.angle}`}</p>
      <p>{`Compration=${props.text.compration}`}</p> */}
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
                fontSize: `${state.fontSize * 0.75}px`,
                position: "absolute",
                top: `${0}px`,
                left: `${state.radius + state.chars[0].heightChar}px`,
                width: `${item.widthChar}px`,
                height: `${item.heightChar}px`,

                transformOrigin: `${item.widthChar / 2}px ${
                  item.heightChar + state.radius
                }px`,

                transform: `translate(${
                  -item.widthChar / 2
                }px, ${0}px) rotate(${item.angleChar}deg) `,
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
