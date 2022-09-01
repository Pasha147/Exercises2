import React, { useEffect, useState } from "react";
import { useRef } from "react";

export default function CircleComp(props) {
  const charBlockRef = useRef(null);
  const ref = useRef({
    text: props.text.textInput,
    length: props.text.textInput,
    width: 0,
    abc: [],
  });
  const [state, setState] = useState({ ...ref.current });

  useEffect(() => {
    //change abc library and determining width and height
    const chars = props.text.textInput.split("");
    const newabc = new Set(chars);
    newabc.forEach((char) => {
      if (!ref.current.abc.find((el) => el.char === char)) {
        charBlockRef.current.innerText = char === " " ? `\u00A0 ` : char;
        const width = charBlockRef.current.getBoundingClientRect().width;
        const height = charBlockRef.current.getBoundingClientRect().height;
        charBlockRef.current.innerText = "";
        ref.current.abc.push({ char: char, width: width, height: height });
      }
    });
    //========================================

    ref.current.text = props.text.textInput;
    let width = 0;
    chars.forEach((char) => {
      width = width + ref.current.abc.find((el) => el.char === char).width;
    });

    ref.current.width = width;
    ref.current.length = props.text.textInput.length;

    setState({ ...ref.current });
  }, [props.text.textInput]);

  return (
    <div>
      <span className="charBlockRef" ref={charBlockRef}></span>
      <span>{props.text.textInput}</span>
      <p>{`text=${state.text}`}</p>
      <p>{`width=${state.width}`}</p>
      <p>{`length=${state.length}`}</p>
      <p>{`Proportionately=${props.text.propor}`}</p>
      <p>{`Radius=${props.text.radius}`}</p>
      <p>{`FontSize=${props.text.fontSize}`}</p>
      <p>{`Angle=${props.text.angle}`}</p>
      <p>{`Compration=${props.text.compration}`}</p>
    </div>
  );
}
