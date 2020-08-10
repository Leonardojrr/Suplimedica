import React, { useContext, useState, useEffect } from "react";
import { NavLink, useRouteMatch } from "react-router-dom";
import classes from "./Menu.module.css";
import { SessionContext } from "../../../context/SessionContext";

// import { ListAltOutlined } from "@material-ui/icons";
import { BsClipboardData } from "react-icons/bs";
import { MdAttachMoney } from "react-icons/md";
import { TiGroup } from "react-icons/ti";
import { BsLock } from "react-icons/bs";
import { RiLogoutCircleLine } from "react-icons/ri";

const Menu = (props) => {
  let match = useRouteMatch();
  const sessionContext = useContext(SessionContext);
  const [validModules, setValidModules] = useState({
    mercado: false,
    personas: false,
    almacen: false,
    permisos: false,
  });

  const { modules } = sessionContext.user;
  console.log(modules);

  useEffect(() => {
    let almacen = false;
    let mercado = false;
    let permisos = false;
    let personas = false;
    if (modules.includes(1) || modules.includes(2)) {
      almacen = true;
    }
    if (modules.includes(3) || modules.includes(4)) {
      mercado = true;
    }
    if (modules.includes(5) || modules.includes(6)) {
      personas = true;
    }
    if (modules.includes(7)) {
      permisos = true;
    }
    setValidModules({ almacen, mercado, personas, permisos });
  }, []);

  return (
    <div id="Menu-container" className={classes.container}>
      <div className={classes.ModuleIcons}>
        {validModules.almacen ? (
          <NavLink
            title="Almacen"
            draggable={false}
            id="warehouse-module-button"
            activeClassName={classes.on}
            className={classes.button}
            to={`${match.url}/warehouse`}
          >
            <BsClipboardData />
          </NavLink>
        ) : null}

        {validModules.mercado ? (
          <NavLink
            title="Mercado"
            draggable={false}
            id="market-module-button"
            activeClassName={classes.on}
            className={classes.button}
            to={`${match.url}/market`}
          >
            <MdAttachMoney />
          </NavLink>
        ) : null}

        {validModules.personas ? (
          <NavLink
            title="Personas"
            draggable={false}
            id="people-module-button"
            activeClassName={classes.on}
            className={classes.button}
            to={`${match.url}/people`}
          >
            <TiGroup />
          </NavLink>
        ) : null}
        {validModules.permisos ? (
          <NavLink
            title="Permisos"
            draggable={false}
            id="permission-module-button"
            activeClassName={classes.on}
            className={classes.button}
            to={`${match.url}/permissions`}
          >
            <BsLock />
          </NavLink>
        ) : null}
      </div>

      <div className={classes.LogOutButton}>
        <RiLogoutCircleLine className={classes.LogOutIcon} />
      </div>
    </div>
  );
};

export default Menu;
