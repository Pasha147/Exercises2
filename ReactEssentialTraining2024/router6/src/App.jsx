import "./App.css";
import { Link, Outlet } from "react-router-dom";

export function Home() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about/history">History</Link>
      </nav>
      <h2>My website</h2>
    </div>
  );
}
export function About() {
  return (
    <div>
       <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about/history">History</Link>
      </nav>
      <h2>About</h2>
      <Outlet/>
    </div>
  );
}

export function History() {
  return(
    <div>
       <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about/history">History</Link>
      </nav>
      <h1>Our History</h1>
    </div>
  )
}

export function Contact() {
  return (
    <div>
        <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about/history">History</Link>
      </nav>
      <h2>Contact</h2>
    </div>
  );
}

export function App() {
  return (
    <>
      <h1>Router6</h1>
      <Home />
    </>
  );
}
