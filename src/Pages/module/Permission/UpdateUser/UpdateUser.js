import React, { Fragment, useState, useContext } from "react";
import { useLocation, useHistory } from "react-router-dom";
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
  const history = useHistory();
  let query = useQuery();

  const [state, setState] = useState({
    id_persona: query.get("id_persona"),
    nombre_persona: query.get("nombre_persona"),
    ci_persona: query.get("ci_persona"),
    nombre_usuario: query.get("nombre_usuario"),
    numero_persona: query.get("numero_persona"),
    contrasena_usuario: "",
    direccion_persona: query.get("direccion_persona"),
    modules: query
      .get("modules")
      .split(",")
      .map((string) => parseInt(string)),
  });

  const updateUser = async () => {
    if (!state.nombre_persona) {
      alert("El usuario tiene que tener un nombre");
      return null;
    }

    if (!state.ci_persona) {
      alert("El usuario tiene que tener un ci");
      return null;
    }

    if (!state.nombre_usuario) {
      alert("El usuario tiene que tener un nombre de usuario");
      return null;
    }

    if (state.modules.length === 0) {
      alert("El usuario tiene que tener acceso al menos a 1 modulo");
      return null;
    }

    const res = await fetch("http://localhost:3000/user/" + state.id_persona, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(state),
    }).then((resp) => resp.json());

    if (res.status === 200) {
      history.push("/module/permissions");
    }
  };

  const onChangeName = (e) => {
    setState({ ...state, nombre_persona: e.target.value });
  };

  const onChangeCi = (e) => {
    setState({ ...state, ci_persona: e.target.value });
  };

  const onChangeUsername = (e) => {
    setState({ ...state, nombre_usuario: e.target.value });
  };

  const onChangePassword = (e) => {
    setState({ ...state, contrasena_usuario: e.target.value });
  };

  const onChangeNumber = (e) => {
    setState({ ...state, numero_persona: e.target.value });
  };

  const onChangeAddress = (e) => {
    setState({ ...state, direccion_persona: e.target.value });
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
        <Input
          name={"Nombre"}
          handleChange={onChangeName}
          value={state.nombre_persona}
        />

        <Input
          name={"Cedula"}
          handleChange={onChangeCi}
          value={state.ci_persona}
        />

        <Input
          name={"Usuario"}
          handleChange={onChangeUsername}
          value={state.nombre_usuario}
        />

        <Input
          name={"Cambiar Contraseña"}
          handleChange={onChangePassword}
          password={true}
          value={state.contrasena_usuario}
        />
      </div>
      <div className={classes.SecondColumn}>
        <Input
          name={"Telefono"}
          handleChange={onChangeNumber}
          value={state.numero_persona}
        />

        <Input
          name={"Direccion"}
          handleChange={onChangeAddress}
          value={state.direccion_persona}
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
        <div className={classes.Button} onClick={updateUser}>
          Actualizar Usuario
        </div>
      </div>
    </Fragment>
  );
};
