import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./i18n";
import App from "./App";

const container = document.getElementById("root");

// 🔑 KEY FIX
const isGithubPages = window.location.hostname.includes("github.io");

const basename = isGithubPages ? "/ACHIscaffolding" : "/";

createRoot(container).render(
  <BrowserRouter basename={basename}>
    <App />
  </BrowserRouter>
);
