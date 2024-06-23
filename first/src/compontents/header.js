import cl from "./header.module.css";
import { useState } from "react";
import { links } from "../appdata";

export default function Header() {
  const [burMenu, setBurMenu] = useState(true);

  const handleClick = (num) => {
    // console.log(num);
    const square = document.getElementById(`artId${num}`);
    square.scrollIntoView({
      behavior: 'smooth'
    });
    // window.scrollBy({
    //   top: -200
    // })
  };
  return (
    <header className={cl.header}>
      <div className="container">
        <div className={cl.h_body}>
          <a className={cl.link_logo} href="/">
            <img className={cl.h_logo} src="./img/logo.jpg" alt="Logo"></img>
          </a>
          {
            burMenu && ( <div
            className={
              burMenu ? [cl.h_burger, cl.h_burgerOff].join(" ") : cl.h_burger
            }
            onClick={() => setBurMenu((prev) => !prev)}
          >
            <span></span>
          </div>

            )
          }
         
        </div>
        <nav className={burMenu ? cl.nav : [cl.nav, cl.navOff].join(" ")}>
          {links.map((link, num) => {
            return (
              <div
                key={`nav${num}`}
                id={`nav${num}`}
                href="/"
                className={cl.navLink}
                onClick={() => handleClick(num)}
              >{`${num + 1} ${link.name}`}</div>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
