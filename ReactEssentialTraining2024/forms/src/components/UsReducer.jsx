import { useReducer } from "react";

const UsReducer = () => {
  const [checked, setChecked] = useReducer(checked => !checked, false);
  return (
    <>
      <h2>Incorporating useRecucer hook</h2>
      <div>
        <input
          id="chceck"
          type="checkbox"
          value={checked}
          onChange={setChecked}
        />
        <label htmlFor="chceck">{checked ? "Checked" : "not Checked"}</label>
      </div>
    </>
  );
};
export default UsReducer;
