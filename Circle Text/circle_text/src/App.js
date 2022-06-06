import "./App.css";
import { useEffect, useRef, useState } from "react";

function App() {
  const ref = useRef({ text: [], abc: [], radius: 100 });
  const [curChar, setCurChar] = useState("");
  const charBlockRef = useRef(null);
  const circleBlockRef = useRef(null);
  const ref1 = useRef({ circlWidth: 0, circleHeight: 0 });
  const k = 0.9;

  useEffect(() => {
    let width = circleBlockRef.current.getBoundingClientRect().width;
    let height = circleBlockRef.current.getBoundingClientRect().height;

    ref1.current.circlWidth = width;
    ref1.current.circleHeight = height;
    console.log(ref1.current);
  }, []);

  const handleInput = (e) => {
    let text = e.target.value;
    let chars = text.split("");
    let abcRef = ref.current.abc;
    ref.current.text = [];
    let textRef = ref.current.text;

    chars.forEach((e) => {
      let curCharAbc = abcRef.find((el) => el.char === e);
      if (!curCharAbc) {
        charBlockRef.current.innerText = e === " " ? `\u00A0 ` : e;
        let width = charBlockRef.current.getBoundingClientRect().width * k;
        let height = charBlockRef.current.getBoundingClientRect().height;
        charBlockRef.current.innerText = "";
        abcRef.push({ char: e, width: width, height: height });
        curCharAbc = { char: e, width: width, height: height };
      }
      textRef.push(curCharAbc);
    });

    angels();
    setCurChar(text);
    console.log(ref.current);
  };

  function angels() {
    let textRef = ref.current.text;
    let radius = ref.current.radius;

    let sumAngle = 0;
    textRef[0] = { ...textRef[0], sumAngle2: 0 };
    textRef.forEach((e, index) => {
      let angle = (Math.atan((0.5 * e.width) / radius) * 360) / Math.PI;
      textRef[index] = { ...textRef[index], angle: angle };
      if (index > 0) {
        sumAngle = sumAngle + (angle + textRef[index - 1].angle) / 2;
        textRef[index].sumAngle2 = sumAngle;
      }
    });
  }

  const radHandleChange = (e) => {
    ref.current.radius = Number(e.target.value);
    angels();
    console.log(ref.current);
    setCurChar(e.target.value);
  };

  const proportionately = (e) => {
    console.log(e.target.checked);
  };

  return (
    <div className="App">
      <div className="inpForm">
        <input type="text" onChange={handleInput} />

        <div>
          <div className="textLine" ref={charBlockRef}></div>
        </div>
        <div className="inputBox">
          <input
            className="inpRad"
            type="range"
            name="radius"
            min="2"
            max="400"
            value={ref.current.radius}
            step="1"
            onChange={radHandleChange}
          />
          <label htmlFor="radius">{`Radius ${ref.current.radius}px`}</label>
          <div className="proportionately">
            {/* 
            <label htmlFor="proportionately">Proportionately</label> */}
          </div>
        </div>
      </div>
      <div className="circle" ref={circleBlockRef}>
        {ref.current.text &&
          ref.current.text.map((e, index) => {
            return (
              <div
                key={index}
                style={{
                  top: `${
                    ref1.current.circleHeight / 2 -
                    ref.current.radius -
                    e.height
                  }px`,

                  width: `${e.width}px`,
                  height: `${e.height}px`,

                  transformOrigin: `${e.width / 2}px ${
                    e.height + ref.current.radius
                  }px`,

                  transform: ` translate(${-e.width / 2}px, ${0}px) rotate(${
                    e.sumAngle2
                  }deg) `,
                }}
              >
                {e.char}
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default App;
