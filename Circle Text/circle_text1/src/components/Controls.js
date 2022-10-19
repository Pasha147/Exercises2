import React from "react";
import "./Controls.css";
import { Context } from "../context";
import { useContext } from "react";
import { controls } from "../appdata";

export default function Controls() {
  const { state, setState } = useContext(Context);

  const handleChangeControls = (e) => {
    if (e.target.name === "propor") {
      setState({ ...state, propor: !state.propor });
    } else {
      setState({ ...state, [e.target.name]: e.target.value });
    }
  };
  return (
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
  );
}
