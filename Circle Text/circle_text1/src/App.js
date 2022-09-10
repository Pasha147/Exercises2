import { useState } from "react";
import "./App.css";
import CircleComp from "./components/CircleComp";

function App() {
  const [state, setState] = useState({
    textInput: "",
    propor: false,
    radius: 100,
    fontSize: 40,
    angle: 0,
    compration: 1,
    rotate: 0,
    rotate1: 0,
  });

  const state1 = {
    textInput: "Dadslfkjs;fg as;dflgs dfg ;sdfg ",
    propor: false,
    radius: 100,
    fontSize: 40,
    angle: 0,
    compration: 1,
    rotate: 0,
    rotate1: 0,
  };

  const controls = [
    {
      name: "radius",
      min: "1",
      max: "400",
      step: "1",
      lable: ["Radius", `px`],
    },
    {
      name: "fontSize",
      min: "1",
      max: "200",
      step: "1",
      lable: ["Font size", `px`],
    },
    {
      name: "angle",
      min: "0",
      max: "360",
      step: "1",
      lable: ["Angle", `deg`],
    },
    {
      name: "compration",
      min: "0.025",
      max: "3",
      step: "0.025",
      lable: ["Compration", ` `],
    },
    {
      name: "rotate",
      min: "0",
      max: "360",
      step: "1",
      lable: ["Rotate", `deg`],
    },
    {
      name: "rotate1",
      min: "0",
      max: "100",
      step: "1",
      lable: ["Rotate1 ", `%`],
    },
  ];

  const handleChangeControls = (e) => {
    if (e.target.name === "propor") {
      setState({ ...state, propor: !state.propor });
    } else {
      setState({ ...state, [e.target.name]: e.target.value });
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <CircleComp
          className="CircHeader"
          text={{
            textInput: "Circulus text",
            propor: false,
            radius: 1000,
            fontSize: 100,
            angle: 339,
            compration: 2,
            rotate: 0,
            rotate1: 0,
          }}
        />
      </header>
      <main>
        <div className="LeftSide">
          <p>Controls</p>
          <div className="Control">
            <label htmlFor="textInput">{`Text`}</label>
            <input
              name="textInput"
              type="text"
              value={state.textInput}
              onChange={handleChangeControls}
            />
          </div>
          <div className="Control controlCheck">
            <input
              type="checkbox"
              name="propor"
              onChange={handleChangeControls}
              defaultChecked={state.propor}
            />
            <label htmlFor="roportionately">{`Proportionately`}</label>
          </div>

          {controls.map((item) => {
            return (
              <div key={item.name} className="Control">
                <label htmlFor={item.name}>
                  {`${item.lable[0]} ${state[item.name]} ${item.lable[1]}`}
                </label>
                <input
                  className="inp"
                  type="range"
                  name={item.name}
                  min={item.min}
                  max={item.max}
                  value={state[item.name]}
                  step={item.step}
                  onChange={handleChangeControls}
                />
              </div>
            );
          })}
        </div>
        <CircleComp text={state} />
      </main>
    </div>
  );
}

export default App;
