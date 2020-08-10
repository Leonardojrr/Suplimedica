import React, { useContext } from "react";
import "./App.css";
import { Route, Switch, useRouteMatch, Redirect } from "react-router-dom";
import Menu from "../components/General/Menu/Menu";

//Modules imports
import Warehouse from "./module/Warehouse/Warehouse";
import Market from "./module/Market/Market";
import People from "./module/People/People";
import Permission from "./module/Permission/Permission";
import { SessionContext } from "../context/SessionContext";

const App = (props) => {
  let match = useRouteMatch();
  const sessionContext = useContext(SessionContext);
  console.log(sessionContext.user);

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

          <Route path={`${match.url}/permissions`}>
            <Permission />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default App;
