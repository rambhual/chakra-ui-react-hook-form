import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, BrowserRouter } from "react-router-dom";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import "bulma/css/bulma.css";
import App from "./app";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <ThemeProvider>
    <CSSReset />
    <BrowserRouter>
      <HashRouter>
        <App />
      </HashRouter>
    </BrowserRouter>
  </ThemeProvider>,
  rootElement
);
