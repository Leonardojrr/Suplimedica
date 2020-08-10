import React, { useState } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import WindowFrame from "../src/components/General/WindowFrame";
import { Session } from "./Pages/Session/Session";
import App from "./Pages/App";

const Root = () => {
  return (
    <Router>
      <WindowFrame />
      <Route exact path="/">
        <Redirect to="/session" />
      </Route>
      <Route path="/session">
        <Session />
      </Route>
      <Route path="/module">
        <App />
      </Route>
    </Router>
  );
};

export default Root;
