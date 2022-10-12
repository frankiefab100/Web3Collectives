import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import NavigateTop from "./utils/navigateTop";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <NavigateTop />
      <App />
    </Router>
  </React.StrictMode>,
);
