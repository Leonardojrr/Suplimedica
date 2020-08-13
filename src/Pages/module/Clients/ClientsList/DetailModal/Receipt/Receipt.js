import React, { useEffect, useState } from "react";

import classes from "./Receipt.module.css";

export const Receipt = (props) => {
  const [receipt, setReceipt] = useState({});
  useEffect(() => {
    setReceipt(props.receipt);
  }, [props.receipt]);

  let base_total = 0;

  if (receipt.productos) {
    receipt.productos.map(
      (producto) =>
        (base_total += producto.precio * producto.cantidad_operacion_producto)
    );
  }

  let table = [];
  if (receipt.id_operacion) {
    console.log(receipt.fecha_operacion.split("T")[0]);
    receipt.productos.map((producto, index) => {
      return table.push(
        <div key={index}>
          <div>{producto.nombre}</div>
          <div className={classes.Row}>
            <div>
              <span className={classes.Label}>Cantidad: </span>
              {producto.cantidad_operacion_producto}
            </div>
            <div>
              <span className={classes.Label}>Costo: $ </span>
              {producto.precio}
            </div>
          </div>
        </div>
      );
    });
  }
  return (
    <div className={classes.ReceiptContainer}>
      <div>
        <span className={classes.Label}>Referencia de la operacion: </span>
        {receipt.id_operacion}
      </div>
      <div>
        <span className={classes.Label}>Id del empleado: </span>
        {receipt.id_usuario}
      </div>
      <div className={classes.Row}>
        <div>
          <span className={classes.Label}>Fecha: </span>
          {receipt.fecha_operacion
            ? receipt.fecha_operacion.split(",")[0]
            : "SF"}
        </div>
        <div>
          <span className={classes.Label}>Hora: </span>
          {receipt.fecha_operacion
            ? receipt.fecha_operacion.split(", ")[1]
            : "SH"}
        </div>
      </div>
      <div>
        <span className={classes.Label}>Productos: </span>
        <div className={classes.Table}>{table}</div>
      </div>
      <div className={classes.Total}>
        <div className={classes.Row}>
          <div>
            <span className={classes.Label}>Base: </span>
          </div>
          <div>$ {base_total.toFixed(2)}</div>
        </div>
        <div className={classes.Row}>
          <div>
            <span className={classes.Label}>Iva(16.00%): </span>
          </div>
          <div>$ {(base_total * 0.16).toFixed(2)}</div>
        </div>
        <div className={classes.Row}>
          <div>
            <span className={classes.Label}>Total: </span>
          </div>
          <div>$ {(base_total * 1.16).toFixed(2)}</div>
        </div>
      </div>
    </div>
  );
};
