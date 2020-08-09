import React from "react";
import { NavLink, useRouteMatch } from "react-router-dom";
import classes from "./Menu.module.css";

// import { ListAltOutlined } from "@material-ui/icons";
import { BsClipboardData } from "react-icons/bs";
import { MdAttachMoney } from "react-icons/md";
import { TiGroup } from "react-icons/ti";
import { BsLock } from "react-icons/bs";
import { RiLogoutCircleLine } from "react-icons/ri";

const Menu = (props) => {
    let match = useRouteMatch();

    return (
        <div id="Menu-container" className={classes.container}>
            <div className={classes.ModuleIcons}>
                <NavLink
                    title="Inventario"
                    draggable={false}
                    id="inventory-module-button"
                    activeClassName={classes.on}
                    className={classes.button}
                    to={`${match.url}/warehouse`}
                >
                    <BsClipboardData />
                </NavLink>

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
            </div>

            <div className={classes.LogOutButton}>
                <RiLogoutCircleLine className={classes.LogOutIcon} />
            </div>
        </div>
    );
};

export default Menu;
