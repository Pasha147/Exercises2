import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {App, About, Contact, History} from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App/>}/>
    <Route path="/about" element={<About/>}>
    <Route path="history" element={<History/>}/>
    </Route>
    <Route path="/contact" element={<Contact/>}/>
  </Routes>
  </BrowserRouter>
);
