// Imports in order
// 1. normalize.css
import "normalize.css/normalize.css";
// 2. paper-css
import "paper-css/paper.css";
// 3. index.css
import "./index.css";
// Other imports
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
