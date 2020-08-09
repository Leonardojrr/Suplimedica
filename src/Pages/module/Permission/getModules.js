import React from "react";

import { FaWarehouse, FaDatabase, FaTruck } from "react-icons/fa";
import { BsFillPersonFill, BsLock } from "react-icons/bs";
import { MdShoppingCart, MdReceipt } from "react-icons/md";

import classes from "./UserRow/UserRow.module.css";

export const getModules = (id, active = true) => {
  switch (id) {
    //Inventario
    case 1:
      return (
        <div module_id={1} className={classes.Module}>
          <FaWarehouse />
        </div>
      );

    //Productos
    case 2:
      return (
        <div module_id={2} className={classes.Module}>
          <FaDatabase />
        </div>
      );

    //Compra
    case 3:
      return (
        <div module_id={3} className={classes.Module}>
          <MdShoppingCart />
        </div>
      );

    //Venta
    case 4:
      return (
        <div module_id={4} className={classes.Module}>
          <MdReceipt />
        </div>
      );

    //Proveedores
    case 5:
      return (
        <div module_id={5} className={classes.Module}>
          <FaTruck />
        </div>
      );

    //Clientes
    case 6:
      return (
        <div module_id={6} className={classes.Module}>
          <BsFillPersonFill />
        </div>
      );

    //Permisos
    case 7:
      return (
        <div module_id={7} className={classes.Module}>
          <BsLock />
        </div>
      );
  }
};
