import React, { useState, useContext, useEffect } from "react";
import classes from "./People.module.css";
import { NavLink, useRouteMatch, Switch, Route } from "react-router-dom";
import { SessionContext } from "../../../context/SessionContext";

import { FaTruck } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";

// Modules imports
import Clients from "../Clients/Clients";
import Providers from "../Providers/Providers";

const People = (props) => {
  let match = useRouteMatch();
  const sessionContext = useContext(SessionContext);
  const [validModules, setValidModules] = useState({
    proveedores: false,
    clientes: false,
  });

  useEffect(() => {
    if (sessionContext.user) {
      const { modules } = sessionContext.user;
      let proveedores = false;
      let clientes = false;
      if (modules.includes(5)) {
        proveedores = true;
      }
      if (modules.includes(6)) {
        clientes = true;
      }

      setValidModules({ proveedores, clientes });
    }
  }, []);

  return (
    <React.Fragment>
      <Switch>
        <Route exact path={`${match.url}`}>
          <div className={classes.Container}>
            {validModules.clientes ? (
              <NavLink
                to={`${match.url}/clients`}
                className={`${classes.ButtonContainer} ${classes.ButtonActive}`}
              >
                <div className={classes.IconContainer}>
                  <BsFillPersonFill className={classes.Icon} />
                </div>

                <div className={`${classes.DescriptionContainer}`}>
                  <span
                    style={{
                      display: "block",
                      color: "#0F52AB",
                      fontSize: 30,
                    }}
                  >
                    CLIENTES
                  </span>

                  <span
                    style={{
                      display: "block",
                      marginTop: 15,
                      color: "lightgrey",
                    }}
                  >
                    Ver lista de clientes
                  </span>
                </div>
              </NavLink>
            ) : null}
            {validModules.proveedores ? (
              <NavLink
                to={`${match.url}/providers`}
                className={`${classes.ButtonContainer} ${classes.ButtonActive}`}
              >
                <div className={classes.IconContainer}>
                  <FaTruck className={classes.Icon} />
                </div>
                <div className={`${classes.DescriptionContainer}`}>
                  <span
                    style={{
                      display: "block",
                      color: "#0F52AB",
                      fontSize: 30,
                    }}
                  >
                    PROVEEDORES
                  </span>
                  <span
                    style={{
                      display: "block",
                      marginTop: 15,
                      color: "lightgrey",
                    }}
                  >
                    Ver lista de proveedores
                  </span>
                </div>
              </NavLink>
            ) : null}
          </div>
        </Route>

        <Route exact path={`${match.url}/clients`}>
          <Clients />
        </Route>

        <Route exact path={`${match.url}/providers`}>
          <Providers />
        </Route>
      </Switch>
    </React.Fragment>
  );
};

export default People;
