import "./App.css";
import { useEffect, useRef, useState } from "react";

function App() {
  const ref = useRef({ text: [], abc: [], radius: 100 });
  const [curChar, setCurChar] = useState("");
  const charBlockRef = useRef(null);
  // let radius = 100;

  const handleInput = (e) => {
    const text = e.target.value;
    let chars = text.split("");
    // let textRef = (ref.current.text = [...chars]);
    let abcRef = ref.current.abc;
    ref.current.text = [];
    let textRef = ref.current.text;

    chars.forEach((e) => {
      let curCharAbc = abcRef.find((el) => el.char === e);
      if (!curCharAbc) {
        charBlockRef.current.innerText = e === " " ? `\u00A0 ` : e;
        let width = charBlockRef.current.getBoundingClientRect().width;
        charBlockRef.current.innerText = "";
        abcRef.push({ char: e, width: width });
        curCharAbc = { char: e, width: width };
      }
      textRef.push(curCharAbc);
    });

    //+sumWidth===============
    textRef[0] = { ...textRef[0], sumWidth: 0 };
    for (let i = 1; i < textRef.length; i++) {
      textRef[i] = {
        ...textRef[i],
        sumWidth: textRef[i - 1].sumWidth + textRef[i - 1].width,
      };
    }
    //+angles=================
    let radius = ref.current.radius;
    let circleLength = 2 * radius * Math.PI;
    ref.current.text = textRef.map((e) => {
      let angle = (e.width / circleLength) * 360;
      let sumAngle = (e.sumWidth / circleLength) * 360;
      return { ...e, angle: angle, sumAngle: sumAngle };
    });
    setCurChar(text);
    // console.log(ref.current);
  };

  const radHandleChange = (e) => {
    const curRad = e.target.value;
    ref.current.radius = curRad;
    console.log(curRad);
    //+angles=================
    let textRef = ref.current.text;
    let radius = ref.current.radius;
    let circleLength = 2 * radius * Math.PI;
    ref.current.text = textRef.map((e) => {
      let angle = (e.width / circleLength) * 360;
      let sumAngle = (e.sumWidth / circleLength) * 360;
      return { ...e, angle: angle, sumAngle: sumAngle };
    });
    setCurChar(radius);
  };

  return (
    <div className="App">
      <div className="inpForm">
        <input type="text" onChange={handleInput} />

        <div>
          <div className="textLine" ref={charBlockRef}>
            {/* {curChar === " " ? `\u00A0 ` : `${curChar}`} */}
          </div>
          {/* <div className="textLine">{curChar}</div> */}
        </div>
        {/* <button onClick={click}>Show width</button> */}
        <div>
          <input
            type="range"
            name="radius"
            min="10"
            max="2000"
            onChange={radHandleChange}
          />
          <label htmlFor="radius">Radius</label>
        </div>
        <div></div>
      </div>
      <div className="circle">
        {ref.current.text.map((e, index) => {
          // console.log(e);
          if (ref.current.text) {
            return (
              <span
                key={index}
                style={{
                  transform: `rotate(${e.sumAngle}deg)`,
                  transformOrigin: `0 ${ref.current.radius}px`,
                }}
              >
                {e.char}
              </span>
            );
          }
        })}
      </div>
    </div>
  );
}

export default App;

/*

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

    
    setText(text);


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

*/
