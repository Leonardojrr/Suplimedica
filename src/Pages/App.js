import React from "react";
import "./App.css";
import { Route, Switch, useRouteMatch, Redirect } from "react-router-dom";
import Menu from "../components/General/Menu/Menu";

//Modules imports
import Warehouse from "./module/Warehouse/Warehouse";
import Market from "./module/Market/Market";
import People from "./module/People/People";
import Permission from "./module/Permission/Permission";

function App() {
  let match = useRouteMatch();

  return (
    <div id="App">
      <Menu />
      <div id="module">
        <Switch>
          <Route exact path={`${match.url}/`}>
            <Redirect to={`${match.url}/market`} />
          </Route>

          <Route path={`${match.url}/warehouse`}>
            <Warehouse />
          </Route>

          <Route path={`${match.url}/market`}>
            <Market />
          </Route>

          <Route path={`${match.url}/people`}>
            <People />
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
