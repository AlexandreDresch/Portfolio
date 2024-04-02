import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import ProjectsProvider from "./contexts/projects-context.js";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ProjectsProvider>
      <Router>
        <App />
      </Router>
    </ProjectsProvider>
  </React.StrictMode>
);
