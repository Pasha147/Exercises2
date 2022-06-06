import "./App.css";
import { useEffect, useRef, useState } from "react";

function App() {
  const ref = useRef({
    text: [],
    abc: [],
    radius: 100,
    Proportionately: false,
    fontSize: 16,
  });

  const [curChar, setCurChar] = useState("");
  const charBlockRef = useRef(null);
  const circleBlockRef = useRef(null);
  const ref1 = useRef({ circlWidth: 0, circleHeight: 0 });
  const k = 0.8;
  const [checked, setChecked] = useState(false);
  const [fontSize, setFontSize] = useState(ref.current.fontSize);

  useEffect(() => {
    let width = circleBlockRef.current.getBoundingClientRect().width;
    let height = circleBlockRef.current.getBoundingClientRect().height;

    ref1.current.circlWidth = width;
    ref1.current.circleHeight = height;
    // console.log(ref1.current);
  }, []);

  function changeLibText(text) {
    let chars = text;
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
  }

  //==
  const handleInput = (e) => {
    let text = e.target.value;
    let chars = text.split("");
    changeLibText(chars);
    setCurChar(text);
    console.log(">>>", ref.current);
  };

  function angels() {
    let textRef = ref.current.text;
    let radius = ref.current.radius;
    let Proportionately = ref.current.Proportionately;

    if (Proportionately) {
      const numChar = textRef.length;
      const angle = 360 / numChar;
      textRef.forEach((e, i) => {
        textRef[i] = { ...textRef[i], sumAngle2: angle * i, angle: angle };
      });
    } else {
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
  }

  const radHandleChange = (e) => {
    ref.current.radius = Number(e.target.value);
    angels();
    setCurChar(e.target.value);
  };

  const proportionately = () => {
    ref.current.Proportionately = !ref.current.Proportionately;
    angels();
    console.log(ref.current);
    setChecked(ref.current.Proportionately);
  };

  const fontSizeHandleChange = (e) => {
    ref.current.fontSize = Number(e.target.value);
    ref.current.abc = [];
    let chars = ref.current.text.map((e) => e.char);
    changeLibText(chars);

    setFontSize(e.target.value);
  };

  return (
    <div className="App">
      <div className="inpForm">
        <input className="inpText" type="text" onChange={handleInput} />

        <div>
          <div
            className="textLine"
            ref={charBlockRef}
            style={{ fontSize: `${ref.current.fontSize}px` }}
          ></div>
        </div>
        <div className="inputBox">
          <div className="proportionately">
            <input
              type="checkbox"
              name="proportionately"
              onChange={proportionately}
              defaultChecked={checked}
            />
            <label htmlFor="proportionately">Proportionately</label>
          </div>
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
          <input
            className="inpFontSize"
            type="range"
            name="fontSize"
            min="2"
            max="100"
            value={ref.current.fontSize}
            step="1"
            onChange={fontSizeHandleChange}
          />
          <label htmlFor="fontSize">{`fontSize ${ref.current.fontSize}px`}</label>
        </div>
      </div>
      <div className="circle" ref={circleBlockRef}>
        {ref.current.text &&
          ref.current.text.map((e, index) => {
            return (
              <div
                key={index}
                style={{
                  fontSize: `${ref.current.fontSize}px`,
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
