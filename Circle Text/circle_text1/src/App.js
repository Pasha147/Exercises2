import { useState } from "react";
import "./App.css";
// import CircleComp from "./components/CircleComp";
import CircleCompC from "./components/CircleCompC";
import HeaderText from "./components/HeaderText";
// import CircleCompE from "./components/CircleCompE";
import { controls } from "../src/appdata.js";

function App() {
  const [state, setState] = useState({
    textInput: "Ci",
    propor: false,
    radius: 100,
    fontSize: 40,
    angle: 0,
    compration: 1,
    rotate: 0,
    rotate1: 100,
  });

  // const charsGet = (chars) => {
  //   console.log(chars);
  // };

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
        <HeaderText></HeaderText>
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
        {/* <CircleCompD text={state} /> */}
        <CircleCompC
          text={state}
          //  charsGetp={charsGet}
        />
        {/* <CircleCompC text={state} /> */}
        {/* <CircleComp text={state} /> */}
      </main>
    </div>
  );
}

export default App;
