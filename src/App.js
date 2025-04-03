import "./App.css";
import React from "react";
import Home from "./Pages/Home";
import Navbar from "./Component/Navbar";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Projects from "./Pages/Projects";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div id="root">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
// git add README.md                                     
// >> git commit -m "first commit"
// >> git branch -M main
// >> git remote add origin https://github.com/Himanshu23231/ecommerce-complete.git
// >> git push -u origin maincs

export default App;
