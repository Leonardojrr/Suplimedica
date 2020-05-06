import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import App from "./Pages/App";
import WindowFrame from "../src/components/General/WindowFrame";

function Root() {
  return (
    <Router>
      <WindowFrame />
      <Route exact path="/">
        <Redirect to="/module" />
      </Route>
      <Route path="/module">
        <App />
      </Route>
    </Router>
  );
}

export default Root;
