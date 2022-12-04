import { useState, useContext } from "react";
import "./App.css";
import CircleCompC from "./components/CircleCompC";
import HeaderText from "./components/HeaderText";
import Controls from "./components/Controls";
import { Context } from "./context";

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

  const cont = useContext(Context);
  cont.state = state;
  cont.setState = setState;

  return (
    <div className="App">
      <div className="appCont">
        <header>
          <HeaderText></HeaderText>
        </header>
        <main>
          <Controls></Controls>
          <CircleCompC text={state} />
        </main>
      </div>
    </div>
  );
}

export default App;
