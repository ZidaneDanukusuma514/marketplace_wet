import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import AuthProvider from "./context/AuthProvider";
import DatabaseProvider from "./context/DatabaseProvider";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <DatabaseProvider>
      <Router>
        <App />
      </Router>
    </DatabaseProvider>
  </AuthProvider>
);
