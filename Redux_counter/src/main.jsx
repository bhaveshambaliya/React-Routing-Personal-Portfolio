import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Contact from "./contact";
import store from "./store";
import {Provider} from "react-redux";
import {BrowserRouter, Routes, Route} from "react-router-dom";
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
