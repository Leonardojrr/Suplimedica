import React from "react";
import { useRouteMatch, Switch, Route } from "react-router-dom";

import PermissionList from "./PermissionList/PermissionList";
import UpdateUser from "./UpdateUser/UpdateUser";
import AddUser from "./AddUser/AddUser";

import classes from "./Permission.module.css";

function Permission() {
  let match = useRouteMatch();

  return (
    <div className={classes.Container}>
      <div className={classes.Header_Container}>
        <div className={classes.Buttons_Container}></div>
        <div className={classes.Header}>Permisos</div>
      </div>

      <div className={classes.Content}>
        <Switch>
          <Route exact path={`${match.url}`}>
            <PermissionList />
          </Route>
          <Route exact path={`${match.url}/add`}>
            <AddUser />
          </Route>
          <Route exact path={`${match.url}/update`}>
            <UpdateUser />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default Permission;
