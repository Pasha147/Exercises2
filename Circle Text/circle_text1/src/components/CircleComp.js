import React, { useEffect, useState } from "react";
import { useRef } from "react";

export default function CircleComp(props) {
  const charBlockRef = useRef(null);
  const ref = useRef({
    text: props.text,
    length: props.text.length,
    width: 0,
    abc: [],
  });
  const [state, setState] = useState({ ...ref.current });

  useEffect(() => {
    if (props.text.length > 0) {
      const chars = props.text.split("");
      const newabc = new Set(chars);
      newabc.forEach((char) => {
        if (!ref.current.abc.find((el) => el.char === char)) {
          charBlockRef.current.innerText = char === " " ? `\u00A0 ` : char;
          const width = charBlockRef.current.getBoundingClientRect().width;
          charBlockRef.current.innerText = "";
          ref.current.abc.push({ char: char, width: width });
        }
      });

      ref.current.text = props.text;
      let width = 0;
      chars.forEach((char) => {
        width = width + ref.current.abc.find((el) => el.char === char).width;
      });
      ref.current.width = width;
      ref.current.length = props.text.length;

      setState({ ...ref.current });
    }
    console.log(ref.current);
  }, [props.text]);

  return (
    <div>
      <span className="charBlockRef" ref={charBlockRef}></span>
      <span>{props.text}</span>
      <p>{`text=${state.text}`}</p>
      <p>{`width=${state.width}`}</p>
      <p>{`length=${state.length}`}</p>
    </div>
  );
}
