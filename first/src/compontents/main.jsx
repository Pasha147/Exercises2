import cl from "./main.module.css";
import { links } from "../appdata";

export default function Main() {
  const item = links.map((link, n) => {
    if (link.cont) {
      return link.cont;
    } else {
      return <h2>{`${n + 1} ${link.name}`}</h2>;
    }
  });

  return (
    <main className={cl.main}>
      <div className="container">
        {links.map((link, n) => {
          return (
            <article key={`artKey${n}`} id={`artId${n}`}>
              {item[n]}
            </article>
          );
        })}
      </div>
    </main>
  );
}
