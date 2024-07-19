import { useRef, useEffect} from "react";
import cl from "./main.module.css";
// import { links } from "../appdata";

export default function Main(props) {
  let articles = props.textCont;
  const itemEls = useRef([]);

  useEffect(() => {

    const artSt = props.textCont.map((art, n) => {
      return { id: `artId${n}`, intersect: false, ratio: 0 };
    });

    let observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: [],
    };

    for (let i = 0; i <= 1.0; i += 0.1) {
      observerOptions.threshold.push(i);
    }

    let intersectionCallback = (entries) => {
      let newSecSt=[...artSt]
      entries.forEach((entry) => {
        let articleId = entry.target.id;
        let isIntersecting = entry.isIntersecting;
       let n=artSt.findIndex(el=>el.id===articleId)
       
       newSecSt[n].intersect=isIntersecting
       newSecSt[n].ratio=Math.floor(entry.intersectionRatio * 100)
       


       
      });
      // console.log(newSecSt.map((item)=>{return item.ratio}));
      props.setColorMenu(newSecSt.map((item)=>{return item.ratio}))
    };

    const observers = [];

    artSt.forEach(() => {
      observers.push(
        new IntersectionObserver(intersectionCallback, observerOptions)
      );
    });

   

    observers.forEach((observer, n) => {
      observer.observe(itemEls.current[n]);
    });
    return () => observers.forEach((observer) => observer.disconnect());
  }, [props.textCont]);

  // console.log(articles);
  return(
    <div className="container">
      <main className={cl.main}>
        <h2>{props.h2}</h2>
        {
         articles.map((item, index) => {
          return (
            <article
            ref={(element) => itemEls.current[index]=element}
              
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
