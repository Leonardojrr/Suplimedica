import React from "react";
import "./App.css";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import Menu from "../components/General/Menu/Menu";

//Modules imports
import Warehouse from "./module/Warehouse/Warehouse";
import Market from "./module/Market/Market";
import Provider from "./module/Provider/Provider";
import Client from "./module/Client/Client";
import Permission from "./module/Permission/Permission";

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

                    <Route path={`${match.url}/warehouse`}>
                        <Warehouse />
                    </Route>

                    <Route path={`${match.url}/market`}>
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
