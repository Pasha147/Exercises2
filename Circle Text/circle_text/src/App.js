import "./App.css";
import { useEffect, useRef, useState } from "react";

function App() {
  const [text, setText] = useState("");
  // const [carChar, setCarChar] = useState("");
  const textBlockRef = useRef(null);
  const charBlockRef = useRef(null);
  const textRef = useRef({ textMass: [] });
  const [circleMass, setCicleMass] = useState([]);

  const abcRef = useRef({ abcMass: [] });
  const [abcChars, setAbcChars] = useState("");

  const radius = 150;
  // mc
  const handleInput = (e) => {
    const text = e.target.value;
    setText(text);
    let textMass = text.split("");

    // library =====================
    let abcMass = abcRef.current.abcMass.map((e) => {
      return e.char;
    });
    textMass.forEach((element) => {
      if (!abcMass.includes(element)) {
        abcMass.push(element);
        setAbcChars(element);
      }
    });
    // library =====================
    // abcMass = abcRef.current.abcMass;
    // console.log(textMass);
    let abcMass1 = abcRef.current.abcMass;
    console.log(abcMass1, textMass);
    let textRef1 = textRef.current.textMass;
    setTimeout(() => {
      let textMass1 = textMass.map((el) => {
        return abcMass1.find((item) => item.char === el);
      });
      let circleLength = 2 * radius * Math.PI;
      textMass1[0] = { ...textMass1[0], sumWidth: 0, angle: 0 };

      let sumWidth = 0;
      for (let i = 1; i < textMass1.length; i++) {
        sumWidth = sumWidth + textMass1[i - 1].width;
        const angle = (sumWidth / circleLength) * 360;
        textMass1[i] = { ...textMass1[i], sumWidth: sumWidth, angle: angle };
      }
      console.log(textMass1);
      textRef1 = [...textMass1];
      let circleMass = textMass1.map((e, index) => {
        return { char: e.char, angle: e.angle };
      });

      setCicleMass(circleMass);
    }, 0);
  };

  useEffect(() => {
    if (abcChars !== "") {
      let width = charBlockRef.current.getBoundingClientRect().width;
      const height = charBlockRef.current.getBoundingClientRect().height;
      if (abcChars === " ") {
        width = 4;
        console.log("sdddd", width);
      }
      let abcMass = abcRef.current.abcMass;
      abcMass.push({ char: abcChars, width: width });

      // console.log(abcMass);
    }
  }, [abcChars]);

  /*
  useEffect(() => {
    if (text.length > 0) {
      const width = textBlockRef.current.getBoundingClientRect().width;
      const height = textBlockRef.current.getBoundingClientRect().height;
      let textMass = textRef.current.textMass;
      textMass.push({ width: width, text: text });
      const fullText = text.split("");
      textMass = textMass.map((e, index) => {
        return { ...e, char: fullText[index] };
      });
      let circleLength = 2 * radius * Math.PI;
      textMass[0] = { ...textMass[0], angle: 0 };
      for (let i = 1; i < textMass.length; i++) {
        const angle = (textMass[i - 1].width / circleLength) * 360;
        textMass[i] = { ...textMass[i], angle: angle };
      }

      let circleMass = textMass.map((e, index) => {
        return { char: e.char, angle: e.angle };
      });

      setCicleMass(circleMass);

      console.log(textMass);
    }
  }, [text]);
  */

  // useEffect(() => {
  //   if (text.length > 0) {
  //     console.log(text);
  //   }
  // }, [text]);

  const click = () => {
    // console.log(textRef.current.getBoundingClientRect().width);
  };

  return (
    <div className="App">
      <div className="inpForm" onChange={handleInput}>
        <input type="text" />
        {/* <div>
          <div className="textLine" ref={textBlockRef}>
            {text}
          </div>
        </div> */}
        <div>
          <div className="textLine" ref={charBlockRef}>
            {abcChars === " " ? `\u00A0 ` : `${abcChars}`}
          </div>
        </div>
        <button onClick={click}>Show width</button>
      </div>
      <div className="circle">
        {circleMass.map((e, index) => {
          return (
            <span
              key={index}
              style={{
                transform: `rotate(${e.angle}deg)`,
                transformOrigin: `0 ${radius}px`,
              }}
            >
              {e.char}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default App;
