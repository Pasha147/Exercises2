import React, { useEffect, useState, useRef } from "react";
import { useCallback } from "react";
import "./CircleCompD.css";

export default function CircleCompD(props) {
  const charBlockRef = useRef(null);

  let text = props.text.textInput;
  let radius = Number(props.text.radius);
  const ref = useRef({
    abc: [],
  });

  const [state, setState] = useState({
    text: "",
    length: props.text.textInput.length,
    width: 0,
    abc: [],
    chars: [],
    radius: Number(props.text.radius),
    widthCircleBlock: Number(props.text.radius) * 2,
    fontSize: Number(props.text.fontSize),
    angle: Number(props.text.angle),
    propor: props.text.propor,
  });

  useEffect(() => {
    changeAbc(text);

    setState((s) => {
      return { ...s };
    });
  }, [text]);

  const addChars = () => {
    let chars = [];

    chars = [...ref.current.abc, { char: text[0], widthChar: 5 }];

    return chars;
  };

  function changeAbc(text) {
    const textArr = text.split("");
    //change abc library and determining width and height
    const newabc = [...new Set(textArr)];
    newabc.forEach((char) => {
      if (!ref.current.abc.find((el) => el.char === char)) {
        charBlockRef.current.innerText = char === " " ? `\u00A0 ` : char;
        let width = charBlockRef.current.getBoundingClientRect().width;
        let height = charBlockRef.current.getBoundingClientRect().height;
        charBlockRef.current.innerText = "";
        ref.current.abc.push({
          char: char,
          widthChar: width,
          heightChar: height,
        });
      }
    });
  }

  return (
    <div className="circleTextComp">
      <span className="charBlockRef" ref={charBlockRef}></span>

      <div>{text}</div>
      <div>{radius}</div>
      <div>{state.text}</div>

      <div
        className="circleText"
        style={{
          width: `${state.widthCircleBlock}px`,
          height: `${state.widthCircleBlock}px`,
        }}
      >
        {addChars().map((item, ind) => {
          return <div key={ind}>{`${item.char} ${item.widthChar}`}</div>;
        })}
      </div>
    </div>
  );
}

// useEffect(() => {
//   changeAbc();
//   changeChars();
// }, [text]);

// if (charBlockRef.current) {
//   changeAbc(text);
// }
// if (ref.current.abc.length > 0) {
//   changeChars(text);
// }

// useMemo(() => {
//   if (charBlockRef.current) {
//     changeAbc(text);
//     // console.log(ref.current.abc);
//   } else {
//     // console.log("000---");
//   }
// }, [text]);

// useMemo(() => {
//   let radius = Number(props.text.radius) + 1;

//   // radius = radius * 2; // console.log("rad", radius);
// }, [props.text.radius]);

// useEffect(() => {
//   // console.log("first--", ref.current.abc);
//   changeAbc(text);
//   setState((s) => {
//     return { ...s };
//   });
//   // console.log("first--", ref.current.abc);
// }, []);

// useEffect(() => {
//   console.log("first--");
//   charBlockRef.current.innerText = "C";
//   let width = charBlockRef.current.getBoundingClientRect().width;
//   console.log("w=", width);
//   setState((s) => {
//     return { ...s, text: width };
//   });
// }, []);

// const ref = useRef({
//   text: props.text.textInput,
//   length: props.text.textInput.length,
//   width: 0,
//   abc: [],
//   chars: [],
//   radius: Number(props.text.radius),
//   widthCircleBlock: Number(props.text.radius) * 2,
//   fontSize: Number(props.text.fontSize),
//   angle: Number(props.text.angle),
//   propor: props.text.propor,
// });

/*
 {
   state.chars.map((item, ind) => {
     return (
       <div
         className="charCirc"
         key={ind}
         style={{
           color: "red",
           width: `${item.widthChar}px`,
           height: `${item.heightChar}px`,
           left: `${item.left}px`,
           top: `${item.top}px`,
           rotate: `${item.angleChar}deg`,
           fontSize: `${state.fontSize * 0.75}px`,
         }}
       >
         {item.char}
       </div>
     );
   });
 }
*/

// useEffect(() => {
//   ref.current.text = props.text.textInput;
//   const fontSize = ref.current.fontSize;
//   const radius = ref.current.radius;
//   const compration = ref.current.compration;

//   //change abc library and determining width and height
//   let chars = ref.current.text.split("");
//   const newabc = new Set(chars);
//   newabc.forEach((char) => {
//     if (!ref.current.abc.find((el) => el.char === char)) {
//       charBlockRef.current.innerText = char === " " ? `\u00A0 ` : char;
//       let width = charBlockRef.current.getBoundingClientRect().width;
//       let height = charBlockRef.current.getBoundingClientRect().height;
//       charBlockRef.current.innerText = "";

//       width = (fontSize * width) / height;
//       height = fontSize;

//       ref.current.abc.push({
//         char: char,
//         widthChar: width,
//         heightChar: height,
//         angleWidthChar: (Math.atan((0.5 * width) / radius) * 360) / Math.PI,
//       });
//     }
//   });
//   //========================================

//   let widthTotal = 0;

//   chars = chars.map((char, i) => {
//     const charInAbc = ref.current.abc.find((el) => el.char === char);
//     const widthChar = charInAbc.widthChar;
//     // const angleWidthChar = charInAbc.angleWidthChar;
//     widthTotal = widthTotal + widthChar;
//     return {
//       char: char,
//       // angleChar: angleChar,
//       widthChar: widthChar,
//       heightChar: charInAbc.heightChar,
//       angleWidthChar: charInAbc.angleWidthChar,
//     };
//   });

//   //Change chars===========================

//   let angleChar = ref.current.angle;
//   if (!ref.current.propor) {
//     chars.forEach((item, i) => {
//       if (i > 0) {
//         angleChar =
//           angleChar +
//           0.5 *
//             compration *
//             (chars[i - 1].angleWidthChar + item.angleWidthChar);
//       }
//       chars[i].angleChar = angleChar;
//     });
//   } else {
//     const angleWidthChar = 360 / chars.length;
//     const angle = ref.current.angle;
//     chars.forEach((item, i) => {
//       chars[i].angleChar = angle + i * angleWidthChar;
//     });
//   }

//   ref.current.chars = [...chars];

//   // console.log(chars);
//   if (ref.current.chars.length > 0) {
//     ref.current.widthCircleBlock =
//       (ref.current.radius + ref.current.chars[0].heightChar) * 2;
//   }

//   ref.current.width = widthTotal;
//   ref.current.length = ref.current.text.length;

//   ref.current.chars = ref.current.chars.map((item) => {
//     const radMax = ref.current.radius + ref.current.chars[0].heightChar;
//     const radCentr = ref.current.radius + 0.5 * ref.current.fontSize;
//     const cosa = Math.cos((item.angleChar * Math.PI) / 180);
//     const sina = Math.sin((item.angleChar * Math.PI) / 180);
//     // const top = radMax - radMax * cosa - item.widthChar * 0.5 * sina;
//     // const left = radMax + radMax * sina - item.widthChar * 0.5 * cosa;
//     const top = radCentr * (1 - cosa);
//     const left = radMax + radCentr * sina - item.widthChar * 0.5;

//     return { ...item, left: left, top: top };
//   });
//   console.log(ref.current.chars);
//   setState({ ...ref.current });

//   // console.log(ref.current);
// }, [props.text.textInput]);

// //Radius has changed
// useEffect(() => {
//   ref.current.radius = Number(props.text.radius);
//   //Change width and height of CircleBlock=====================
//   if (ref.current.chars.length > 0) {
//     ref.current.widthCircleBlock =
//       (ref.current.radius + ref.current.fontSize) * 2;

//     //Change angleWidthChar in ABC=========================================
//     ref.current.abc = ref.current.abc.map((item) => {
//       item.angleWidthChar =
//         (Math.atan((0.5 * item.widthChar) / ref.current.radius) * 360) /
//         Math.PI;
//       return item;
//     });
//     //Change angleChar in chars=========================================
//     if (!ref.current.propor) {
//       let angleChar = ref.current.angle;
//       let chars = ref.current.chars;
//       const compration = ref.current.compration;
//       chars.forEach((item, i) => {
//         const charInAbc = ref.current.abc.find((el) => el.char === item.char);
//         chars[i].angleWidthChar = charInAbc.angleWidthChar;
//         if (i > 0) {
//           angleChar =
//             angleChar +
//             0.5 *
//               compration *
//               (chars[i - 1].angleWidthChar + item.angleWidthChar);
//         }
//         chars[i].angleChar = angleChar;
//       });
//     } else {
//       const angleWidthChar = 360 / ref.current.length;
//       const angle = ref.current.angle;
//       ref.current.chars.forEach((item, i) => {
//         ref.current.chars[i].angleChar = angle + i * angleWidthChar;
//       });
//     }
//   } else {
//     ref.current.widthCircleBlock = ref.current.radius * 2;
//   }
//   setState({ ...ref.current });
// }, [props.text.radius]);

// // fontSize has changed
// useEffect(() => {
//   ref.current.fontSize = Number(props.text.fontSize);

//   //Change width and height of CircleBlock=====================
//   if (ref.current.chars.length > 0) {
//     ref.current.widthCircleBlock =
//       (ref.current.radius + ref.current.fontSize) * 2;
//     //Change width height and angleWidthChar in ABC=========================================
//     ref.current.abc.forEach((item, i) => {
//       const scale = ref.current.fontSize / item.heightChar;
//       ref.current.abc[i].widthChar = item.widthChar * scale;
//       ref.current.abc[i].heightChar = ref.current.fontSize;
//       ref.current.abc[i].angleWidthChar =
//         (Math.atan((0.5 * item.widthChar) / ref.current.radius) * 360) /
//         Math.PI;
//     });

//     //Change width height and charAngle in chars

//     let angleChar = ref.current.angle;
//     let chars = ref.current.chars;
//     const compration = ref.current.compration;
//     const angleWidthChar = 360 / ref.current.length;
//     chars.forEach((item, i) => {
//       const charInAbc = ref.current.abc.find((el) => el.char === item.char);
//       ref.current.chars[i].widthChar = charInAbc.widthChar;
//       ref.current.chars[i].heightChar = charInAbc.heightChar;
//       ref.current.chars[i].angleWidthChar = charInAbc.angleWidthChar;
//       if (!ref.current.propor) {
//         if (i > 0) {
//           angleChar =
//             angleChar +
//             0.5 *
//               compration *
//               (ref.current.chars[i - 1].angleWidthChar +
//                 charInAbc.angleWidthChar);
//         }
//       } else {
//         angleChar = ref.current.angle + i * angleWidthChar;
//         // console.log("i=", i, " angleChar=", angleChar);
//       }

//       ref.current.chars[i].angleChar = angleChar;
//     });
//     // console.log(ref.current.chars);
//   } else {
//     ref.current.widthCircleBlock = ref.current.radius * 2;
//   }

//   setState({ ...ref.current });
// }, [props.text.fontSize]);

// //Angle================================================
// useEffect(() => {
//   const oldAngle = ref.current.angle;
//   ref.current.angle = Number(props.text.angle);
//   const deltaAngle = ref.current.angle - oldAngle;
//   ref.current.chars.forEach((item, i) => {
//     ref.current.chars[i].angleChar =
//       ref.current.chars[i].angleChar + deltaAngle;
//   });
//   setState({ ...ref.current });
// }, [props.text.angle]);

// //Compration================================================
// useEffect(() => {
//   if (!ref.current.propor) {
//     const oldCompration = ref.current.compration;
//     ref.current.compration = Number(props.text.compration);
//     const compration = ref.current.compration;
//     const angle = ref.current.angle;
//     ref.current.chars.forEach((item, i) => {
//       ref.current.chars[i].angleChar =
//         angle +
//         ((ref.current.chars[i].angleChar - angle) * compration) /
//           oldCompration;
//     });
//     setState({ ...ref.current });
//   }
// }, [props.text.compration]);

// //Proportionately================================================
// useEffect(() => {
//   ref.current.propor = props.text.propor;
//   if (ref.current.propor) {
//     const angleWidthChar = 360 / ref.current.length;
//     const angle = ref.current.angle;
//     ref.current.chars.forEach((item, i) => {
//       ref.current.chars[i].angleChar = angle + i * angleWidthChar;
//     });
//   } else {
//     //Change angleChar in chars=========================================
//     let angleChar = ref.current.angle;
//     let chars = ref.current.chars;
//     const compration = ref.current.compration;
//     chars.forEach((item, i) => {
//       const charInAbc = ref.current.abc.find((el) => el.char === item.char);
//       chars[i].angleWidthChar = charInAbc.angleWidthChar;
//       if (i > 0) {
//         angleChar =
//           angleChar +
//           0.5 *
//             compration *
//             (chars[i - 1].angleWidthChar + item.angleWidthChar);
//       }
//       chars[i].angleChar = angleChar;
//     });
//   }
//   setState({ ...ref.current });
// }, [props.text.propor]);

// //Rotation================================================
// useEffect(() => {
//   ref.current.rotate = Number(props.text.rotate);
//   setState({ ...ref.current });
// }, [props.text.rotate]);
// //Rotation1================================================
// useEffect(() => {
//   ref.current.rotate1 = Number(props.text.rotate1);
//   setState({ ...ref.current });
// }, [props.text.rotate1]);
