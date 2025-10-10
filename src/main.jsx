import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// (Optionnel si tu l'importes déjà dans App.jsx) :
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
