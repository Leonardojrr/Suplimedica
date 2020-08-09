import React, { Fragment, useState } from "react";
import { useRouteMatch, useLocation } from "react-router-dom";
import { Input } from "../Input/Input";

//icons imports
import { FaWarehouse, FaDatabase, FaTruck } from "react-icons/fa";
import { BsFillPersonFill, BsLock } from "react-icons/bs";
import { MdShoppingCart, MdReceipt } from "react-icons/md";

import classes from "./UpdateUser.module.css";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

export const UpdateUser = (props) => {
  let match = useRouteMatch();
  let query = useQuery();
  props.changeRoute(match.url);

  const [state, setState] = useState({
    name: query.get("name"),
    ci: query.get("ci"),
    username: query.get("username"),
    password: query.get("password"),
    number: query.get("number"),
    direccion: query.get("address"),
    modules: query
      .get("modules")
      .split(",")
      .map((string) => parseInt(string)),
  });

  const onChangeName = (e) => {
    setState({ ...state, name: e.target.value });
  };

  const onChangeCi = (e) => {
    setState({ ...state, ci: e.target.value });
  };

  const onChangeUsername = (e) => {
    setState({ ...state, username: e.target.value });
  };

  const onChangePassword = (e) => {
    setState({ ...state, password: e.target.value });
  };

  const onChangeNumber = (e) => {
    setState({ ...state, number: e.target.value });
  };

  const onChangeAddress = (e) => {
    setState({ ...state, address: e.target.value });
  };

  const ChangeModules = (id) => {
    let arr = state.modules;
    let index = arr.indexOf(id);

    if (index > -1) {
      arr.splice(index, 1);
      setState({ ...state, modules: arr });
    } else {
      arr.push(id);
      setState({ ...state, modules: arr });
    }
  };

  const getInventoryModule = (arr = []) => {
    if (arr.includes(1)) {
      return (
        <div onClick={clickModule} className={classes.OnModule}>
          <div module_id={1} className={classes.ToggleArea}></div>
          <FaWarehouse />
        </div>
      );
    } else {
      return (
        <div onClick={clickModule} className={classes.OffModule}>
          <div module_id={1} className={classes.ToggleArea}></div>
          <FaWarehouse />
        </div>
      );
    }
  };

  const getProductsModule = (arr = []) => {
    if (arr.includes(2)) {
      return (
        <div onClick={clickModule} className={classes.OnModule}>
          <div module_id={2} className={classes.ToggleArea}></div>
          <FaDatabase />
        </div>
      );
    } else {
      return (
        <div onClick={clickModule} className={classes.OffModule}>
          <div module_id={2} className={classes.ToggleArea}></div>
          <FaDatabase />
        </div>
      );
    }
  };

  const getPurchaseModule = (arr = []) => {
    if (arr.includes(3)) {
      return (
        <div onClick={clickModule} className={classes.OnModule}>
          <div module_id={3} className={classes.ToggleArea}></div>
          <MdShoppingCart />
        </div>
      );
    } else {
      return (
        <div onClick={clickModule} className={classes.OffModule}>
          <div module_id={3} className={classes.ToggleArea}></div>
          <MdShoppingCart />
        </div>
      );
    }
  };

  const getSalesModule = (arr = []) => {
    if (arr.includes(4)) {
      return (
        <div onClick={clickModule} className={classes.OnModule}>
          <div module_id={4} className={classes.ToggleArea}></div>
          <MdReceipt />
        </div>
      );
    } else {
      return (
        <div onClick={clickModule} className={classes.OffModule}>
          <div module_id={4} className={classes.ToggleArea}></div>
          <MdReceipt />
        </div>
      );
    }
  };

  const getProvidersModule = (arr = []) => {
    if (arr.includes(5)) {
      return (
        <div onClick={clickModule} className={classes.OnModule}>
          <div module_id={5} className={classes.ToggleArea}></div>
          <FaTruck />
        </div>
      );
    } else {
      return (
        <div onClick={clickModule} className={classes.OffModule}>
          <div module_id={5} className={classes.ToggleArea}></div>
          <FaTruck />
        </div>
      );
    }
  };

  const getClientsModule = (arr = []) => {
    if (arr.includes(6)) {
      return (
        <div onClick={clickModule} className={classes.OnModule}>
          <div module_id={6} className={classes.ToggleArea}></div>
          <BsFillPersonFill />
        </div>
      );
    } else {
      return (
        <div onClick={clickModule} className={classes.OffModule}>
          <div module_id={6} className={classes.ToggleArea}></div>
          <BsFillPersonFill />
        </div>
      );
    }
  };

  const getPermissionsModule = (arr = []) => {
    if (arr.includes(7)) {
      return (
        <div onClick={clickModule} className={classes.OnModule}>
          <div module_id={7} className={classes.ToggleArea}></div>
          <BsLock />
        </div>
      );
    } else {
      return (
        <div onClick={clickModule} className={classes.OffModule}>
          <div module_id={7} className={classes.ToggleArea}></div>
          <BsLock />
        </div>
      );
    }
  };

  const clickModule = (e) => {
    let module_id = parseInt(e.target.getAttribute("module_id"));
    ChangeModules(module_id);
  };

  return (
    <Fragment>
      <div className={classes.FirstColumn}>
        <Input name={"Nombre"} handleChange={onChangeName} value={state.name} />

        <Input name={"Cedula"} handleChange={onChangeCi} value={state.ci} />

        <Input
          name={"Usuario"}
          handleChange={onChangeUsername}
          value={state.username}
        />

        <Input
          name={"Password"}
          handleChange={onChangePassword}
          value={state.password}
        />
      </div>
      <div className={classes.SecondColumn}>
        <Input
          name={"Telefono"}
          handleChange={onChangeNumber}
          value={state.number}
        />

        <Input
          name={"Direccion"}
          handleChange={onChangeAddress}
          value={state.address}
        />

        <div className={classes.ModulesField}>
          <span>Modulos</span>
          <div className={classes.ModulesContainer}>
            {getInventoryModule(state.modules)}
            {getProductsModule(state.modules)}
            {getPurchaseModule(state.modules)}
            {getSalesModule(state.modules)}
            {getProvidersModule(state.modules)}
            {getClientsModule(state.modules)}
            {getPermissionsModule(state.modules)}
          </div>
        </div>
      </div>
    </Fragment>
  );
};
