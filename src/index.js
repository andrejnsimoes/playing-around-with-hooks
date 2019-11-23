import React from "react";
import ReactDOM from "react-dom";

import { App } from "./App";
import { ThemeProvider } from "./ThemeContext";
import "./styles.css";

const Root = () => (
  <ThemeProvider>
    <App />
  </ThemeProvider>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<Root />, rootElement);
