// import Btn from "./btn";
import cl from "./menu.module.css";
// import { links } from "../appdata";
import { useState, useEffect, useRef } from "react";

export default function Menu(props) {
  const wrapperRef = useRef(null);

  const [burMenu, setBurMenu] = useState(false);
  let links = props.textCont.links;
  const handleClick = (num) => {
    // console.log(num);
    const square = document.getElementById(`artId${num}`);
    square.scrollIntoView({
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // Alert if clicked on outside of element
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setBurMenu(false);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className={cl.nav} ref={wrapperRef}>
      <div className={cl.m_burg}>
        <div
          className={burMenu ? cl.m_burgOn : cl.m_burgOff}
          onClick={() => setBurMenu((prev) => !prev)}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <ul>
        {links.map((link, num) => {
          return (
            <li
              key={`nav${num}`}
              id={`nav${num}`}
              // href="/"
              className={cl.navLink}
              onClick={() => handleClick(num)}
              style={
                burMenu
                  ? { background: `rgb(222 223 240)` }
                  : { background: `transparent` }
              }
            >
              <div
                className={cl.neonButton}
                style={{ opacity: `${props.colorMenu[num].ratio / 100}` }}
              ></div>

              <div className={burMenu ? cl.liNameOn : cl.liNameOff}>
                <span>{`${link.name}`}</span>
              </div>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
