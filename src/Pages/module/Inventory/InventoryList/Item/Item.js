import React from "react";

import classes from "./Item.module.css";

import { MdAdd } from "react-icons/md";

export const Item = (props) => {
    const { item, onViewDetails, onCloseModal } = props;

    return (
        <div className={classes.DataRow}>
            <div className={classes.DataField}>
                <div className={classes.DataContent}>
                    <p className={classes.Text}>{item.codigo}</p>
                </div>
            </div>
            <div className={classes.DataField}>
                <div className={classes.DataContent}>
                    <p className={classes.Text}>{item.nombre}</p>
                </div>
            </div>
            <div className={classes.DataField}>
                <div className={classes.DataContent}>
                    <p className={classes.Text}>{item.marca}</p>
                </div>
            </div>
            <div className={classes.DataField}>
                <div className={classes.DataContent}>
                    <p className={classes.Text}>{item.precio}</p>
                </div>
            </div>
            <div className={classes.DataField}>
                <div className={classes.DataContent}>
                    <p className={classes.Text}>{item.cantidad}</p>
                </div>
            </div>
            <div
                className={classes.ViewMore}
                onClick={() => onViewDetails(item)}
            >
                Ver mas
            </div>
        </div>
    );
};
