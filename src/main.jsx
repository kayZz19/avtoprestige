import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./styles/administration.css";
import "./fonts/fonts.css";
import "./styles/globals.css";
import "./styles/variables.css";
import "./styles/home.css";
import "./styles/animations.css";
import "./styles/headerMenu.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
