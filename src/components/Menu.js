import React, { useState, useEffect } from "react";
import { NavLink, useRouteMatch } from "react-router-dom";
import "./Menu.css";

let icons = {
  inventory: {
    on: require("../assets/Menu/inventory-icon-on.svg"),
    off: require("../assets/Menu/inventory-icon-off.svg"),
  },
  market: {
    on: require("../assets/Menu/market-icon-on.svg"),
    off: require("../assets/Menu/market-icon-off.svg"),
  },
  provider: {
    on: require("../assets/Menu/provider-icon-on.svg"),
    off: require("../assets/Menu/provider-icon-off.svg"),
  },
  client: {
    on: require("../assets/Menu/client-icon-on.svg"),
    off: require("../assets/Menu/client-icon-off.svg"),
  },
  permission: {
    on: require("../assets/Menu/permission-icon-on.svg"),
    off: require("../assets/Menu/permission-icon-off.svg"),
  },
};

function Menu() {
  let match = useRouteMatch();

  let [button, setButton] = useState(null);

  useEffect(() => {
    if (button === null) {
    } else {
      switch (button.id) {
        case "inventory-module-button":
          button.childNodes[0].src = icons.inventory.on;
          break;
        case "market-module-button":
          button.childNodes[0].src = icons.market.on;
          break;
        case "provider-module-button":
          button.childNodes[0].src = icons.provider.on;
          break;
        case "client-module-button":
          button.childNodes[0].src = icons.client.on;
          break;
        case "permission-module-button":
          button.childNodes[0].src = icons.permission.on;
          break;
      }
    }
  });

  function changeStateOfButtom(e) {
    let elementClicked = e.target;

    if (e.target.tagName === "IMG") elementClicked = e.target.parentNode;

    if (button === null) setButton(elementClicked);
    else {
      switch (button.id) {
        case "inventory-module-button":
          button.childNodes[0].src = icons.inventory.off;
          break;
        case "market-module-button":
          button.childNodes[0].src = icons.market.off;
          break;
        case "provider-module-button":
          button.childNodes[0].src = icons.provider.off;
          break;
        case "client-module-button":
          button.childNodes[0].src = icons.client.off;
          break;
        case "permission-module-button":
          button.childNodes[0].src = icons.permission.off;
          break;
      }

      setButton(elementClicked);
    }
  }

  return (
    <div id="Menu-container">
      <NavLink
        draggable={false}
        id="inventory-module-button"
        onClick={changeStateOfButtom}
        activeClassName="on"
        className="Menu-button"
        to={`${match.url}/inventory`}
      >
        <img draggable={false} src={icons.inventory.off} />
      </NavLink>

      <NavLink
        draggable={false}
        id="market-module-button"
        onClick={changeStateOfButtom}
        activeClassName="on"
        className="Menu-button"
        to={`${match.url}/market`}
      >
        <img draggable={false} src={icons.market.off} />
      </NavLink>

      <NavLink
        draggable={false}
        id="provider-module-button"
        onClick={changeStateOfButtom}
        activeClassName="on"
        className="Menu-button"
        to={`${match.url}/providers`}
      >
        <img draggable={false} src={icons.provider.off} />
      </NavLink>

      <NavLink
        draggable={false}
        id="client-module-button"
        onClick={changeStateOfButtom}
        activeClassName="on"
        className="Menu-button"
        to={`${match.url}/clients`}
      >
        <img draggable={false} src={icons.client.off} />
      </NavLink>

      <NavLink
        draggable={false}
        id="permission-module-button"
        onClick={changeStateOfButtom}
        activeClassName="on"
        className="Menu-button"
        to={`${match.url}/permissions`}
      >
        <img draggable={false} src={icons.permission.off} />
      </NavLink>
    </div>
  );
}

export default Menu;
