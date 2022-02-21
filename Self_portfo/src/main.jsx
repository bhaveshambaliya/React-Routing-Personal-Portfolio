import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import About from "./Component/About";
import ContactUs from "./Component/ContactUs";
import Home from "./Component/Home";
import Projects from "./Component/Projects";
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Projects/:id" element={<Projects />} />
        <Route path="/Contact" element={<ContactUs />} />
        <Route />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
