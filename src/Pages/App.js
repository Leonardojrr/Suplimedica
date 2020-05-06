import React from "react";
import "./App.css";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import Menu from "../components/Menu";

//Modules imports
import Inventory from "../Pages/module/Inventory";
import Market from "./module/Market/Market";
import Provider from "../Pages/module/Provider";
import Client from "../Pages/module/Client";
import Permission from "../Pages/module/Permission";

function App() {
  let match = useRouteMatch();

  return (
    <div id="App">
      <Menu />
      <div id="module">
        <Switch>
          <Route exact path={`${match.url}/`}>
            <h1>Elije un modulo</h1>
          </Route>

          <Route exact path={`${match.url}/inventory`}>
            <Inventory />
          </Route>

          <Route exact path={`${match.url}/market`}>
            <Market />
          </Route>

          <Route exact path={`${match.url}/providers`}>
            <Provider />
          </Route>

          <Route exact path={`${match.url}/clients`}>
            <Client />
          </Route>

          <Route exact path={`${match.url}/permissions`}>
            <Permission />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
