import React, { useEffect, useState } from "react";

import classes from "./Receipt.module.css";

export const Receipt = (props) => {
    const [receipt, setReceipt] = useState({});
    useEffect(() => {
        setReceipt(props.receipt);
    }, [props.receipt]);

    console.log(receipt);
    let table = [];
    if (receipt.id_operacion) {
        receipt.detalle.map((producto) => {
            return table.push(
                <div>
                    <div>{producto.nombre}</div>
                    <div className={classes.Row}>
                        <div>
                            <span className={classes.Label}>Cantidad: </span>
                            {producto.cantidad_producto_operacion}
                        </div>
                        <div>
                            <span className={classes.Label}>Precio: $ </span>
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
                <span className={classes.Label}>
                    Referencia de la operacion:{" "}
                </span>
                {receipt.id_operacion}
            </div>
            <div>
                <span className={classes.Label}>Id del empleado: </span>
                {receipt.id_usuario}
            </div>
            <div className={classes.Row}>
                <div>
                    <span className={classes.Label}>Fecha: </span>
                    {receipt.fecha_operacion}
                </div>
                <div>
                    <span className={classes.Label}>Hora: </span>
                    {"10:10"}
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
                    <div>$ {receipt.total_operacion}</div>
                </div>
                <div className={classes.Row}>
                    <div>
                        <span className={classes.Label}>Iva(16.00%): </span>
                    </div>
                    <div>$ {receipt.total_operacion * 0.16}</div>
                </div>
                <div className={classes.Row}>
                    <div>
                        <span className={classes.Label}>Total: </span>
                    </div>
                    <div>$ {receipt.total_operacion * 1.16}</div>
                </div>
            </div>
        </div>
    );
};
