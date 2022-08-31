import { useState } from "react";
import "./App.css";
import CircleComp from "./components/CircleComp";

function App() {
  const [state, setState] = useState({
    textInput: "",
    propor: false,
    radius: 50,
    fontSize: 10,
    angle: 0,
    compration: 1,
  });

  const controls = [
    {
      className: "inp",
      type: "range",
      name: "radius",
      min: "2",
      max: "400",
      value: state.radius,
      step: "1",
      curValue: state.radius,
      labelEnd: `px`,
    },
    {
      className: "inp",
      type: "range",
      name: "fontSize",
      min: "2",
      max: "100",
      value: state.fontSize,
      step: "1",
      curValue: state.fontSize,
      labelEnd: `px`,
    },
  ];

  const handleInput = (e) => {
    let text = e.target.value;
    setState({ ...state, textInput: text });
  };

  const proportionately = () => {
    setState({ ...state, propor: !state.propor });
  };
  const radHandleChange = (e) => {
    setState({ ...state, radius: Number(e.target.value) });
  };
  const fontHandleChange = (e) => {
    setState({ ...state, fontSize: Number(e.target.value) });
  };
  const angleHandleChange = (e) => {
    setState({ ...state, angle: Number(e.target.value) });
  };
  const comprationHandleChange = (e) => {
    setState({ ...state, compration: Number(e.target.value) });
  };
  const handleChangeControls = (e) => {
    console.log(e.target.name);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Circulus text</h1>
      </header>
      <main>
        <div className="LeftSide">
          <p>Controls</p>
          <div className="Control">
            <label htmlFor="text">{`Text`}</label>
            <input
              name="text"
              type="text"
              value={state.textInput}
              onChange={handleInput}
            />
          </div>
          <div className="Control controlCheck">
            <input
              type="checkbox"
              name="proportionately"
              onChange={proportionately}
              defaultChecked={state.propor}
            />
            <label htmlFor="roportionately">{`Proportionately`}</label>
          </div>
          <div className="Control">
            <label htmlFor="radius">{`Radius ${state.radius}px`}</label>
            <input
              className="inp"
              type="range"
              name="radius"
              min="2"
              max="400"
              value={state.radius}
              step="1"
              onChange={radHandleChange}
            />
          </div>
          <div className="Control">
            <label htmlFor="fontSize">{`Font size ${state.fontSize}px`}</label>
            <input
              className="inp"
              type="range"
              name="fontSize"
              min="2"
              max="100"
              step="1"
              value={state.fontSize}
              onChange={fontHandleChange}
            />
          </div>
          <div className="Control">
            <label htmlFor="angle">{`Angle ${state.angle}deg`}</label>
            <input
              className="inp"
              type="range"
              name="angle"
              min="0"
              max="360"
              value={state.angle}
              step="1"
              onChange={angleHandleChange}
            />
          </div>
          <div className="Control">
            <label htmlFor="compration">{`Compration ${state.compration}`}</label>
            <input
              className="inp"
              type="range"
              name="compration"
              min="0.1"
              max="3"
              value={state.compration}
              step="0.1"
              onChange={comprationHandleChange}
            />
          </div>
          {controls.map((item, i) => {
            return (
              <div key={item.name} className="Control">
                <label
                  htmlFor={item.name}
                >{`${item.name} ${item.curValue} ${item.labelEnd}`}</label>
                <input
                  className={item.className}
                  type={item.type}
                  name={item.name}
                  min={item.min}
                  max={item.max}
                  value={item.value}
                  step={item.step}
                  onChange={(e) => handleChangeControls(e)}
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
