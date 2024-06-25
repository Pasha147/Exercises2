import { useRef, useEffect} from "react";
import cl from "./main.module.css";
// import { links } from "../appdata";

export default function Main(props) {
  let articles = props.textCont;
  const itemEls = useRef([]);

  // const artSt = useMemo(()=> articles.map((art, n) => {
  //   return { id: `artId${n}`, intersect: false, ratio: 0 };
  // }),[articles])

  // console.log(artSt);
  // const [secSt, setSecSt] = useState(artSt);

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
        // let visiblePct = `${Math.floor(entry.intersectionRatio * 100)}%`;
       let n=artSt.findIndex(el=>el.id===articleId)
       
      //  console.log(newSecSt);
       newSecSt[n].intersect=isIntersecting
       newSecSt[n].ratio=Math.floor(entry.intersectionRatio * 100)
       


       
      });
      // setSecSt([...newSecSt])
      props.setColorMenu(newSecSt.map((item)=>{return {ratio: item.ratio}}))
    };

    const observers = [];

    artSt.forEach(() => {
      observers.push(
        new IntersectionObserver(intersectionCallback, observerOptions)
      );
    });

    // console.log('observers=',observers);
    // console.log("000 -->",itemEls);
    observers.forEach((observer, n) => {
      observer.observe(itemEls.current[n]);
    });
    return () => observers.forEach((observer) => observer.disconnect());
  }, [props]);

  // const itemEls = useRef(new Array())
  // {items.map(item => (
  //  <p key={item} ref={(element) => itemEls.current.push(element)}>{item}</p>
  // ))

  return (
    <div className="container">
      <main className={cl.main}>
        {articles.map((article, n) => {
          return (
            <article
              ref={(element) => itemEls.current[n]=element}
              className={cl.article}
              key={`artKey${n}`}
              id={`artId${n}`}
            >
              {/* {`id=${secSt[n].id} 
              inter=${secSt[n].intersect} ratio=${secSt[n].ratio}`} */}
              {article}
              {/* {`id=${secSt[n].id} 
              inter=${secSt[n].intersect} ratio=${secSt[n].ratio}`} */}
            </article>
          );
        })}
      </main>
    </div>
  );
}
