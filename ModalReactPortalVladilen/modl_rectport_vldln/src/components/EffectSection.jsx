import { useState } from "react";
import classes from "./EffectSection.module.css";
import Modal from "./modal/Modal";



export default function EffectSection() {
    const [modal, setModal]=useState(false)
    
    function openModal() {
      setModal(true)
    }

  return (
    <section className={classes.section}>
      <h1>EffectSection</h1>
      <h3>Effects</h3>
      <button onClick={openModal}>Open information</button>
      <Modal open={modal}>
        <h3>hello from modal</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique est
          nisi porro minima aspernatur, animi error vero? Adipisci quibusdam
          eveniet earum perspiciatis error soluta quisquam fugit iusto. Quos,
          magni explicabo!
        </p>
        <button onClick={()=>setModal(false)}>Close modal</button>
      </Modal>
      
    </section>
  );
}
