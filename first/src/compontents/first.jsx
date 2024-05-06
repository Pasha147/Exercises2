import cl from './first.module.css'
import { useState } from "react";


export default function First(props) {
  const [text, setText] = useState(props.number);
  const handleClick = () => {
    console.log("click");
    setText(text + 1);
    const square=document.getElementById('p3')
    square.scrollIntoView({
        behavior: 'smooth'
    })

  };

  return (
    <>
      <h1> Hello </h1>
      <button onClick={handleClick}>Click me!</button>
      <p>{text}</p>
      <p>{props.number2}</p>

<p id='p1'>p1</p>
<p id='p2'>p2</p>
<p id='p3'>p3</p>
<p id='p4'>p4</p>

    </>
  );
}
