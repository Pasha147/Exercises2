import { useState, useEffect, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Header from "./components/header";
import Main from "./components/main_a";
import Menu from "./components/menu";
import Footer from "./components/footer";

import { text } from "../public/dataArray";

function App() {
  const [dataf, setDataf] = useState({ Ukr: [], En: [] }); 

  const [lang, setLang] = useState("Ukr");
  const [articles, setArticles] = useState([]);
  let textCont = lang === "Ukr" ? text.Ukr : text.En;
  const [colorMenu, setColorMenu] = useState(
    // textCont.main.articles.map(()=>{return {ratio: 0}})
    []
  );

  const [data, setData] = useState([]);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/dataArraya.jsx";
    script.onload = () => {
      if (window.dataArray) {
        let dataUkr = window.dataArray.map((item) => {
          return item.Ukr;
        });
        let dataEn = window.dataArray.map((item) => {
          return item.En;
        });
        // console.log(dataRef.current);

        setDataf({ Ukr: dataUkr, En: dataEn }); // Заставляем компонент перерендериться
        setColorMenu (window.dataArray.map(()=>0))
      }
    };

    script.onerror = (error) => {
      console.error("Error loading dataArray:", error);
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  

  return (
    <div className="App">
      <Header textCont={textCont.header} lang={lang} setLang={setLang} />
      <Menu 
      textCont={
        (lang === "Ukr" ? dataf.Ukr : dataf.En).map((item)=>{
          return item.navMenu
        })
      } 
      colorMenu={colorMenu}/>

      <Main
        textCont={lang === "Ukr" ? dataf.Ukr : dataf.En}
        setColorMenu={setColorMenu}
      />

      
      <Footer textCont={textCont.footer} />
    </div>
  );
}

export default App;
