import { useState } from "react";

export default function First(props) {
  const [text, setText] = useState(props.number);
  const handleClick = () => {
    console.log("click");
    setText(text + 1);
  };

  return (
    <>
      <h1> Hello </h1>
      <button onClick={handleClick}>Click me!</button>
      <p>{text}</p>
      <p>{props.number2}</p>
    </>
  );
}
