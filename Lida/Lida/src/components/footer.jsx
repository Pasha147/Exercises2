import cl from "./footer.module.css";

export default function Footer(props) {
  let textCont=props.textCont
  return (
    <footer className={cl.footer}>
      <p>
        {textCont.p1} <br />
        {textCont.p2}
        <br />
      
      <span style={{ whiteSpace: "nowrap" }}>
      {textCont.em}
      </span>
      <br/>
      <span style={{ whiteSpace: "nowrap" }}>
      {textCont.phone} </span>
      </p>
    </footer>
  );
}
