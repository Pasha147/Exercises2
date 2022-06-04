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
  const [radius, setRadius] = useState(150);
  // const radius = 150;

  //

  useEffect(() => {
    let char = charBlockRef.current.innerText;
    let width = charBlockRef.current.getBoundingClientRect().width;
    console.log(">>", char + " " + width);
  });

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

    let abcMass1 = abcRef.current.abcMass;
    // console.log(abcMass1, textMass);
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
      textRef1 = [...textMass1];
      // console.log(abcMass1, textRef1);
      let circleMass = textMass1.map((e, index) => {
        return { char: e.char, angle: e.angle };
      });

      setCicleMass(circleMass);
    }, 0);
  };

  useEffect(() => {
    let abcMass1 = abcRef.current.abcMass;
    let textRef1 = textRef.current.textMass;

    //  console.log(textRef1);

    // let textMass1 = textMass.map((el) => {
    //   return abcMass1.find((item) => item.char === el);
    // });
    // let circleLength = 2 * radius * Math.PI;
    // textMass1[0] = { ...textMass1[0], sumWidth: 0, angle: 0 };

    // let sumWidth = 0;
    // for (let i = 1; i < textMass1.length; i++) {
    //   sumWidth = sumWidth + textMass1[i - 1].width;
    //   const angle = (sumWidth / circleLength) * 360;
    //   textMass1[i] = { ...textMass1[i], sumWidth: sumWidth, angle: angle };
    // }
    // console.log(abcMass1, textMass1);
    // textRef1 = [...textMass1];
    // let circleMass = textMass1.map((e, index) => {
    //   return { char: e.char, angle: e.angle };
    // });

    setCicleMass(circleMass);
  }, [radius]);

  useEffect(() => {
    if (abcChars) {
      let width = charBlockRef.current.getBoundingClientRect().width;
      const height = charBlockRef.current.getBoundingClientRect().height;
      let abcMass = abcRef.current.abcMass;
      abcMass.push({ char: abcChars, width: width });
    }
  }, [abcChars]);

  // useEffect(() => {
  //   console.log(charBlockRef.current.innerText);
  // }, [char]);

  const click = () => {
    console.log("---", charBlockRef.current.innerText);
  };

  const rangeChange = (e) => {
    const radius = e.target.value;
    setRadius(radius);
  };

  return (
    <div className="App">
      <div className="inpForm">
        <input type="text" onChange={handleInput} />
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
        <div>
          <input
            onChange={rangeChange}
            type="range"
            name="radius"
            min="0"
            max="200"
          />
          <label htmlFor="radius">Radius</label>
        </div>
        <div></div>
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
