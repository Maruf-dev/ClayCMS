import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import axios from "axios";

axios.defaults.baseURL = "https://ox-polished-infinitely.ngrok-free.app"
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
