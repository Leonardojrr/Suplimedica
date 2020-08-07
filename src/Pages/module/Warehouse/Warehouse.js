import React from "react";
import classes from "./Warehouse.module.css";
import { NavLink, useRouteMatch, Switch, Route } from "react-router-dom";

import { FaWarehouse } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";

// Modules imports
import Products from "../Products/Products";
import Inventory from "../Inventory/Inventory";

const Warehouse = (props) => {
    let match = useRouteMatch();

    return (
        <React.Fragment>
            <Switch>
                <Route exact path={`${match.url}`}>
                    <div className={classes.Container}>
                        <NavLink
                            to={`${match.url}/inventory`}
                            className={`${classes.ButtonContainer} ${classes.ButtonActive}`}
                        >
                            <div className={classes.IconContainer}>
                                <FaWarehouse className={classes.Icon} />
                            </div>

                            <div className={`${classes.DescriptionContainer}`}>
                                <span
                                    style={{
                                        display: "block",
                                        color: "#0F52AB",
                                        fontSize: 30,
                                    }}
                                >
                                    INVENTARIO
                                </span>

                                <span
                                    style={{
                                        display: "block",
                                        marginTop: 15,
                                        color: "lightgrey",
                                    }}
                                >
                                    Ver productos en el inventario
                                </span>
                            </div>
                        </NavLink>

                        <NavLink
                            to={`${match.url}/products`}
                            className={`${classes.ButtonContainer} ${classes.ButtonActive}`}
                        >
                            <div className={classes.IconContainer}>
                                <FaDatabase className={classes.Icon} />
                            </div>
                            <div className={`${classes.DescriptionContainer}`}>
                                <span
                                    style={{
                                        display: "block",
                                        color: "#0F52AB",
                                        fontSize: 30,
                                    }}
                                >
                                    PRODUCTOS INTERNOS
                                </span>
                                <span
                                    style={{
                                        display: "block",
                                        marginTop: 15,
                                        color: "lightgrey",
                                    }}
                                >
                                    Ver todos los productos
                                </span>
                            </div>
                        </NavLink>
                    </div>
                </Route>

                <Route exact path={`${match.url}/inventory`}>
                    <Inventory />
                </Route>

                <Route exact path={`${match.url}/products`}>
                    <Products />
                </Route>
            </Switch>
        </React.Fragment>
    );
};

export default Warehouse;
