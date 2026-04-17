import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";
import { Analytics } from "@vercel/analytics/react";
import App from "./App";
import GoogleAnalytics from "./components/GoogleAnalytics";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <GoogleAnalytics />
      <App />
      <Analytics />
    </BrowserRouter>
  </React.StrictMode>
);