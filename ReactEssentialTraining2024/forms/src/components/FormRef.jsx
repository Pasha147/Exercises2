import { useRef } from "react";

const FormRef = () => {
  const text = useRef();
  const hexColor = useRef();

  const submit = (e) => {
    e.preventDefault();
    const textV = text.current.value;
    const colorV = hexColor.current.value;
    alert(`${textV}, ${colorV}`);
    text.current.value = "";
    colorV.current.value = "";
  };

  return (
    <>
    <h2>Form with useRef</h2>
      <form onSubmit={submit}>
        <input ref={text} type="text" placeholder="title" />
        <input ref={hexColor} type="color" />
        <button>ADD</button>
      </form>
    </>
  );
};
export default FormRef;
