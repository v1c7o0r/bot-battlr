import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import "./index.css";
import { BotProvider } from "./context/botContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BotProvider>
    <App />
  </BotProvider>
);
