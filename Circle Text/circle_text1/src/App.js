import { useState } from "react";
import "./App.css";
import CircleComp from "./components/CircleComp";

function App() {
  const [state, setState] = useState({
    textInput: "",
  });

  const handleInput = (e) => {
    let text = e.target.value;
    setState({ ...state, textInput: text });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Circulus text</h1>
        {/* <p>ddd</p> */}
      </header>
      <main>
        <div className="Control">
          <p>control</p>
          <div className="inpText">
            <input type="text" value={state.textInput} onChange={handleInput} />
          </div>
          <p>{`${state.textInput}`}</p>
        </div>
        <CircleComp text={state.textInput} />
      </main>
    </div>
  );
}

export default App;
