import "./App.css";
import { useEffect, useRef, useState } from "react";

function App() {
  const [text, setText] = useState("");
  const textBlockRef = useRef(null);
  const textRef = useRef({ textMass: [] });
  const [circleMass, setCicleMass] = useState([]);
  const radius = 100;

  const handleInput = (e) => {
    setText(e.target.value);
    // console.log(e);
  };

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

  const click = () => {
    // console.log(textRef.current.getBoundingClientRect().width);
  };

  return (
    <div className="App">
      <div className="inpForm" onChange={handleInput}>
        <input type="text" />
        <div>
          <div className="textLine" ref={textBlockRef}>
            {text}
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
