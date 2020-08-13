import React, { Fragment, useState } from "react";
import { useHistory } from "react-router-dom";
import { Input } from "../Input/Input";

//icons imports
import { FaWarehouse, FaDatabase, FaTruck } from "react-icons/fa";
import { BsFillPersonFill, BsLock } from "react-icons/bs";
import { MdShoppingCart, MdReceipt } from "react-icons/md";

import classes from "./AddUser.module.css";
import { stat } from "fs";
import { UpdateUser } from "../UpdateUser/UpdateUser";

export const AddUser = (props) => {
  const history = useHistory();

  const [state, setState] = useState({
    name: "",
    ci: "",
    username: "",
    password: "",
    number: "",
    address: "",
    modules: [],
  });

  const addUser = async () => {
    if (!state.name) {
      alert("El usuario tiene que tener un nombre");
      return null;
    }

    if (!state.ci) {
      alert("El usuario tiene que tener un ci");
      return null;
    }

    if (!state.username) {
      alert("El usuario tiene que tener un nombre de usuario");
      return null;
    }

    if (!state.password) {
      alert("El usuario tiene que tener una contraseña");
      return null;
    }

    if (state.modules.length === 0) {
      alert("El usuerio tiene que tener acceso al menos a 1 modulo");
      return null;
    }

    //Añade un nuevo usuario
    const res = await fetch("http://localhost:3000/user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(state),
    }).then((resp) => resp.json());

    if (res.status === 200) {
      history.push("/module/permissions");
    }
  };

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
          name={"Contraseña"}
          handleChange={onChangePassword}
          password={true}
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
        <div className={classes.Button} onClick={addUser}>
          Añadir Usuario
        </div>
      </div>
    </Fragment>
  );
};
