import React, { useState } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import WindowFrame from "../src/components/General/WindowFrame";
import { Session } from "./Pages/Session/Session";
import App from "./Pages/App";
import { SessionContext, SessionProvider } from "./context/SessionContext";

const Root = () => {
  return (
    <SessionProvider>
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
    </SessionProvider>
  );
};

export default Root;
