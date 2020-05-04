import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import App from "./Pages/App";
import WindowFrame from "../src/components/WindowFrame";

function Root() {
  return (
    <Router>
      <WindowFrame />
      <Route exact path="/">
        <Redirect to="/modules" />
      </Route>
      <Route path="/modules">
        <App />
      </Route>
    </Router>
  );
}

export default Root;
