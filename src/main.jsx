import { BrowserRouter } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";

import { Layout } from "./Layout";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="min-w-screen min-h-screen bg-slate-200 text-slate-200">
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  </div>,
);
