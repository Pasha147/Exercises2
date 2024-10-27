import { useRef, useState } from "react";

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  return [
    { value, onChange: (e) => setValue(e.target.value) },
    () => setValue(initialValue),
  ];
}

const FormCustHook = () => {
  const [textProps, resetTitle] = useInput("");
  const [colorProps, resetColor] = useInput("#000000");

  const submit = (e) => {
    e.preventDefault();
    alert(`${textProps.value}, ${colorProps.value}`);
    resetTitle();
    resetColor();
  };

  return (
    <>
      <h2>Form with useState and custom HOOK</h2>
      <form onSubmit={submit}>
        <input
          {...textProps}
          type="text"
          placeholder="title"
        />
        <input
          {...colorProps}
          type="color"
        />
        <button>ADD</button>
      </form>
    </>
  );
};
export default FormCustHook;
