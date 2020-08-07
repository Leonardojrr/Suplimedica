import React, { useState } from "react";

import classes from "./DetailModal.module.css";

import { MdClose, MdEdit } from "react-icons/md";
import { FaBarcode } from "react-icons/fa";

export const DetailModal = (props) => {
    let { modalVisible, onClose, onEdit, item } = props;
    item.proveedores = [
        "Juan",
        "Pedro",
        "Farmacias SAS",
        "Juan",
        "Pedro",
        "Farmacias SAS",
        "Juan",
        "Pedro",
        "Farmacias SAS",
        "Juan",
        "Pedro",
        "Farmacias SAS",
    ];

    let providersList = [];

    item.proveedores.map((proveedor, index) => {
        return providersList.push(
            <div key={index} className={classes.Provider}>
                {proveedor}
            </div>
        );
    });

    console.log(item);

    return (
        <div
            className={classes.ModalContainer}
            style={{ display: modalVisible ? "block" : "none" }}
        >
            <div className={classes.Backdrop} onClick={onClose}></div>
            <div className={classes.Modal}>
                <div className={classes.TitleContainer}>
                    <div className={classes.Name}>{item.nombre}</div>
                    <div className={classes.Code}>
                        <FaBarcode className={classes.BarCode} />
                        &nbsp;
                        {item.codigo}
                    </div>
                    <div
                        className={classes.EditButtonContainer}
                        onClick={onEdit}
                    >
                        <MdEdit className={classes.EditButton} />
                    </div>
                    <div
                        className={classes.ExitButtonContainer}
                        onClick={onClose}
                    >
                        <MdClose className={classes.ExitButton} />
                    </div>
                </div>

                <div className={classes.ContentContainer}>
                    <div className={classes.Content}>
                        <span className={classes.ContentLabel}>
                            Lista de proveedores:{" "}
                        </span>
                        <div className={classes.ProvidersContainer}>
                            {providersList}
                        </div>
                    </div>
                </div>

                <div className={classes.BottomContainer}>
                    <div className={classes.Price}>
                        <span className={classes.BottomLabel}>Precio: </span>
                        {item.precio}
                    </div>
                    <div className={classes.Brand}>
                        <span className={classes.BottomLabel}>Marca: </span>
                        {item.marca}
                    </div>
                    <div className={classes.Available}>
                        <span className={classes.BottomLabel}>
                            Cantidad total:{" "}
                        </span>
                        {item.cantidad}
                    </div>
                </div>
            </div>
        </div>
    );
};
