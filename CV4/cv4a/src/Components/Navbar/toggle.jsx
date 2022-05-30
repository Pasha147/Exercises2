import React from "react";
import { useState } from "react";
import "./toggle.scss";
import { themeContext } from "../../Context";
import { useContext } from "react";

const Toggle = () => {
  const [tog, setTog] = useState(true);
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const handleClick = () => {
    theme.dispatch({ type: "toggle" });
    // setTog(darkMode);
  };

  return (
    <div className="toggle" onClick={handleClick}>
      {darkMode ? (
        <div
          style={{
            color: "gray",
          }}
        >
          Sun
        </div>
      ) : (
        <div
          style={{
            color: "var(--orange)",
          }}
        >
          Moon
        </div>
      )}
    </div>
  );
};

export default Toggle;
