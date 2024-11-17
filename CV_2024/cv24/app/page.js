"use client";

import Header from './ua/header.jsx'


export default function Home() {
  
  return (
    <>
     <Header/>
      <main>
        <h1>Main</h1>
        <img src="./img/me.png" className="h-60 rounded-b-full"></img>
      </main>
      <footer>Footer</footer>
    </>
  );
}
