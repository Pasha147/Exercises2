import { useRef, useState } from "react";

const FormState = () => {
  const [text, setText] = useState("");
  const [hexColor, setHexColor] = useState("#000000");

  const submit = (e) => {
    e.preventDefault();
    alert(`${text}, ${hexColor}`);
    setText("");
    setHexColor("#000000");
  };

  return (
    <>
      <h2>Form with useState</h2>
      <form onSubmit={submit}>
        <input
          onChange={(e) => setText(e.target.value)}
          value={text}
          type="text"
          placeholder="title"
        />
        <input
          onChange={(e) => setHexColor(e.target.value)}
          value={hexColor}
          type="color"
        />
        <button>ADD</button>
      </form>
    </>
  );
};
export default FormState;
