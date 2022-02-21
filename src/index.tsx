import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { UserProvider } from "./store";
import AppWrapper from "./App";

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <AppWrapper />
    </UserProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
