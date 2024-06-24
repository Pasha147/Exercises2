import cl from "./header.module.css";
// import { headerInter } from "../appdata";

export default function Header(props) {
  const lang=props.lang

const langClick=()=>{
  if (lang==='En') {
    props.setLang('Ukr')
  }else{
    props.setLang('En')
  }
}

const textCont=props.textCont
  return (
    <header className={cl.header}>
      <div className="container">
        <div className={cl.h_body}>
          <a className={cl.link_logo} href="/">
            <img src="./img/logo1.jpg" alt="Logo"></img>
          </a>
          <div className={cl.h_text}>
            <h1>{textCont.h1}</h1>
            <h2>{textCont.h2}</h2>
          </div>
         
       <button className={cl.langBtn}
       onClick={langClick}>{lang}</button>
        </div>
      </div>
    </header>
  );
}
