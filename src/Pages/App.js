import React from "react";
import "./App.css";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import Menu from "../components/Menu";

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
          <Route exact path={`${match.url}/inventario`}>
            <h1>Inventario</h1>
          </Route>
          <Route exact path={`${match.url}/mercado`}>
            <h1>Compra</h1>
          </Route>
          <Route exact path={`${match.url}/proveedores`}>
            <h1>Proveedores</h1>
          </Route>
          <Route exact path={`${match.url}/clientes`}>
            <h1>Clientes</h1>
          </Route>
          <Route exact path={`${match.url}/permisos`}>
            <h1>Permisos</h1>
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
