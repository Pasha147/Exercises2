import { useRef } from "react";
import "./App.css";
import FormRef from "./components/FormRef";
import FormState from "./components/FormState";
import FormCustHook from "./components/FormCustHook";
import FetchData from "./components/FetchData";
import Render from "./components/Render";
import UsReducer from "./components/UsReducer";

function App() {
  const text = useRef();
  const hexColor = useRef();

  const submit = (e) => {
    e.preventDefault();
    const textV=text.current.value
    const colorV=hexColor.current.value
    alert(`${textV}, ${colorV}`)
    text.current.value=''
    colorV.current.value=''
  };

  return (
    <>
      <h1>React.js Essential Training Working with uncontrolled components</h1>
      <a href="https://www.linkedin.com/learning/react-js-essential-training-14836121/working-with-uncontrolled-components?resume=false&u=106534538">
        src
      </a>
      <Render/>
     <FetchData/>
     <FormRef/>
     <FormState/>
     <FormCustHook/>
     <UsReducer/>
    </>
  );
}

export default App;
