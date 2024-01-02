import { useEffect, useState, useCallback } from "react";
import classes from "./EffectSection.module.css";
import Modal from "./modal/Modal";
import useInput from "../hooks/useInput";

export default function EffectSection() {
  const input = useInput()
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

const fetchUsers=useCallback(async()=>{
  //-------второй вариант фетч
     setLoading(true);
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const users = await response.json();
      setUsers(users);
      setLoading(false);
},[])


  useEffect(() => {
   /*
   //---------первый вариант фетч-----------
    async function fetchUsers() {
      setLoading(true);
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const users = await response.json();
      setUsers(users);
      setLoading(false);
    }
    */
    fetchUsers();
  }, [fetchUsers]);

  function openModal() {
    setModal(true);
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
        <button onClick={() => setModal(false)}>Close modal</button>
      </Modal>
      {loading && <p>Loading...</p>}
      {!loading && (
        <ul>
          {users.map((user) => (
            <li key={`li${user.id}`}>{user.name}</li>
          ))}
        </ul>
      )}
      <p>Custom hook</p>
      {!loading && (
        <>
        <input type="text" className={classes.control}  {...input}/>
        <h6>{input.value}</h6>
        <ul>
          {users.filter((user)=>user.name.toLowerCase().includes(input.value.toLowerCase()))
          .map((user) => (
            <li key={`lidd${user.id}`}>{user.name}</li>
          ))}
        </ul>
        </>
      )}
    </section>
  );
}
