import { useRef, useEffect} from "react";
import cl from "./main.module.css";
// import { links } from "../appdata";

export default function Main(props) {
  let articles = props.textCont;
  console.log(articles);
  return(
    <div className="container">
      <main className={cl.main}>
        {
         articles.map((item, index) => {
          return (
            <article
              
              className={cl.article}
              key={`artKey${index}`}
              id={`artId${index}`}
            
              dangerouslySetInnerHTML={{
                __html: item.article,
              }}
            />
          );
        })
        }
        </main>
        </div>
  )
}
