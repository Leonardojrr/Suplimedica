import React from "react";
import ModuleHeader from "../../../components/ModuleHeader";
import classes from './Buy.module.css'

function Buy() {
  return (
    <div className={classes.container}>
        <ModuleHeader title="Compra" />
        <div className={classes.content}>
            <div className={classes.supliers}>
                proveedores
            </div>
            <div className={classes.products}>
                productos
            </div>
            <div className={classes.details}>
                detalle
            </div>
        </div>
    </div>
  );
}

export default Buy;