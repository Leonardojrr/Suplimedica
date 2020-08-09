import React, { useState } from "react";
import { useRouteMatch, matchPath, Switch, Route } from "react-router-dom";

import { UpdateUser } from "./UpdateUser/UpdateUser";
import AddUser from "./AddUser/AddUser";
import { PermissionList } from "./PermissionList/PermissionList";
import { DropableSearchHeader } from "../../../components/DropableSearchHeader/DropableSearchHeader";
import { SearchInput } from "../../../components/SearchInput/SearchInput";
import { Header } from "../../../components/Header/Header";

import classes from "./Permission.module.css";

const Permission = () => {
  let match = useRouteMatch();

  const [routePermission, setPermissionRoute] = useState(match.url);
  const [searchBarVisible, setSearchBarVisible] = useState(false);
  const [nameValue, setUserNameValue] = useState("");
  const [ciValue, setUserCiValue] = useState("");
  const [usernameValue, setUserUsernameValue] = useState("");
  const [usersList, setUsersList] = useState("");

  const onFilterByUserName = (name) => {
    setUserNameValue(name);
  };

  const onFilterByCi = (code) => {
    setUserCiValue(code);
  };

  const onFilterByUsername = (code) => {
    setUserUsernameValue(code);
  };

  const isInHome = () => {
    if (routePermission === "/module/permissions") {
      return (
        <DropableSearchHeader
          searchBarVisible={searchBarVisible}
          onToggle={() => setSearchBarVisible((actualValue) => !actualValue)}
        >
          <div className={classes.Input}>
            <SearchInput
              inputStyle={{ height: 20 }}
              label={"Nombre"}
              onChange={(value) => {
                onFilterByUserName(value);
              }}
            />
          </div>
          <div className={classes.Input}>
            <SearchInput
              inputStyle={{ height: 20 }}
              label={"Ci"}
              onChange={(value) => {
                onFilterByCi(value);
              }}
            />
          </div>
          <div className={classes.Input}>
            <SearchInput
              inputStyle={{ height: 20 }}
              label={"Username"}
              onChange={(value) => {
                onFilterByUsername(value);
              }}
            />
          </div>
        </DropableSearchHeader>
      );
    } else return null;
  };

  return (
    <div className={classes.Container}>
      <div className={classes.HeaderContainer}>
        <div className={classes.ButtonsContainer}></div>
        <Header title={"Permisos"} />
        {isInHome()}
      </div>

      <div className={classes.Content}>
        <Switch>
          <Route exact path={`${match.url}`}>
            <PermissionList
              List={usersList}
              nameValue={""}
              ciValue={""}
              usernameValue={""}
            />
          </Route>
          <Route exact path={`${match.url}/add`}>
            <AddUser changeRoute={setPermissionRoute} />
          </Route>
          <Route exact path={`${match.url}/update`}>
            <UpdateUser changeRoute={setPermissionRoute} />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default Permission;
