import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Server } from "miragejs";
import variables from "./JSON/variables.json";
import sacsVariables from "./JSON/sacsVariables.json";
import modules from "./JSON/modules.json";
import templates from "./JSON/templates.json";
new Server({
  routes() {
    (this.namespace = "api"),
      this.get("variables", () => {
        return {
          variables,
        };
      });
    this.get("sacsVariables", () => {
      return { sacsVariables };
    });
    this.get("modules", () => {
      return { modules };
    });
    this.get("templates", () => {
      return { templates };
    });
  },
});
ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
