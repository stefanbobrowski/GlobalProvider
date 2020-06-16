console.log("📡 Global Provider ");
import React from "react";
import ReactDOM from "react-dom";
import GlobalProvider from "./GlobalProvider";
import App from "./App";

ReactDOM.render(
  <GlobalProvider>
    <App></App>
  </GlobalProvider>,
  document.getElementById("root")
);
