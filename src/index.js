import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { Router } from "react-router-dom";
import { createHashHistory } from "history";

ReactDOM.render(
  <Router history={createHashHistory()}>
    <App />
  </Router>,
  document.getElementById("root")
);
registerServiceWorker();
