import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import NavigateTop from "./utils/navigateTop";
import { BrowserRouter as Router } from "react-router-dom";
import "normalize.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <NavigateTop />
      <App />
    </Router>
  </React.StrictMode>,
);
