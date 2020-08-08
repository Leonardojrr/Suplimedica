import React from "react";
import classes from "./Market.module.css";
import { NavLink, useRouteMatch, Switch, Route } from "react-router-dom";

import { MdShoppingCart } from "react-icons/md";
import { MdReceipt } from "react-icons/md";

// Modules imports
import Purchase from "../Purchase/Purchase";
import Sale from "../Sale/Sale";

const Market = (props) => {
    let match = useRouteMatch();

    return (
        <React.Fragment>
            <Switch>
                <Route exact path={`${match.url}`}>
                    <div className={classes.Container}>
                        <NavLink
                            to={`${match.url}/purchase`}
                            className={`${classes.ButtonContainer} ${classes.ButtonActive}`}
                        >
                            <div className={classes.IconContainer}>
                                <MdShoppingCart className={classes.Icon} />
                            </div>

                            <div className={`${classes.DescriptionContainer}`}>
                                <span
                                    style={{
                                        display: "block",
                                        color: "#0F52AB",
                                        fontSize: 30,
                                    }}
                                >
                                    COMPRA
                                </span>

                                <span
                                    style={{
                                        display: "block",
                                        marginTop: 15,
                                        color: "lightgrey",
                                    }}
                                >
                                    Realizar una nueva compra
                                </span>
                            </div>
                        </NavLink>

                        <NavLink
                            to={`${match.url}/sale`}
                            className={`${classes.ButtonContainer} ${classes.ButtonActive}`}
                        >
                            <div className={classes.IconContainer}>
                                <MdReceipt className={classes.Icon} />
                            </div>
                            <div className={`${classes.DescriptionContainer}`}>
                                <span
                                    style={{
                                        display: "block",
                                        color: "#0F52AB",
                                        fontSize: 30,
                                    }}
                                >
                                    VENTA
                                </span>
                                <span
                                    style={{
                                        display: "block",
                                        marginTop: 15,
                                        color: "lightgrey",
                                    }}
                                >
                                    Realizar una nueva venta
                                </span>
                            </div>
                        </NavLink>
                    </div>
                </Route>

                <Route exact path={`${match.url}/purchase`}>
                    <Purchase />
                </Route>

                <Route exact path={`${match.url}/sale`}>
                    <Sale />
                </Route>
            </Switch>
        </React.Fragment>
    );
};

export default Market;
