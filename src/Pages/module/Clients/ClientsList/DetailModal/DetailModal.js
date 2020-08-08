import React, { useState, useEffect } from "react";

import classes from "./DetailModal.module.css";

import { MdClose, MdEdit } from "react-icons/md";

import { Receipt } from "./Receipt/Receipt";
import { ExitIcon } from "../../../../../components/Icons/ExitIcon/ExitIcon";
import { EditIcon } from "../../../../../components/Icons/EditIcon/EditIcon";

export const DetailModal = (props) => {
    let { modalVisible, onClose, onEdit } = props;
    const [client, setClient] = useState({});

    useEffect(() => {
        setClient(props.client);
    }, [props.client]);

    let clientData = null;

    if (client.nombre) {
        clientData = (
            <div className={classes.ClientData}>
                <div className={classes.ClientFieldDetail}>
                    {client.ci.toLowerCase().startsWith("j")
                        ? "RIF: " + client.ci
                        : "CI: " + client.ci}
                </div>
                <div className={classes.ClientFieldDetail}>
                    {client.direccion ? "direccion: " + client.direccion : null}
                </div>
                <div className={classes.ClientFieldDetail}>
                    {client.numero ? "numero: " + client.numero : null}
                </div>
            </div>
        );
    }

    let clientReceipts = [
        {
            id_operacion: 1,
            fecha_operacion: "24/10/2020",
            total_operacion: 1200,
            tipo_operacion: "venta",
            id_usuario: 1,
            detalle: [
                {
                    cantidad_producto_operacion: 10,
                    costo_operacion_producto: 600,
                    codigo: 29292929,
                    nombre: "Paquete de vendaje 60 unidades",
                    precio: 120,
                },
                {
                    cantidad_producto_operacion: 10,
                    costo_operacion_producto: 600,
                    codigo: 29292989,
                    nombre: "Inyectadora 30 unidades",
                    precio: 100,
                },
            ],
        },
        {
            id_operacion: 2,
            fecha_operacion: "24/10/2020",
            total_operacion: 1200,
            tipo_operacion: "venta",
            id_usuario: 1,
            detalle: [
                {
                    cantidad_producto_operacion: 10,
                    costo_operacion_producto: 600,
                    codigo: 29292929,
                    nombre: "Paquete de vendaje 60 unidades",
                    precio: 120,
                },
                {
                    cantidad_producto_operacion: 10,
                    costo_operacion_producto: 600,
                    codigo: 29292989,
                    nombre: "Inyectadora 30 unidades",
                    precio: 100,
                },
            ],
        },
    ];

    let clientReceiptsList = [];

    clientReceipts.map((receipt) => {
        return clientReceiptsList.push(<Receipt receipt={receipt} />);
    });

    return (
        <div
            className={classes.ModalContainer}
            style={{ display: modalVisible ? "block" : "none" }}
        >
            <div className={classes.Backdrop} onClick={onClose}></div>
            <div className={classes.Modal}>
                <div className={classes.TitleContainer}>
                    <div className={classes.Name}>{client.nombre}</div>
                    <div className={classes.IconsContainer}>
                        <EditIcon onClick={onEdit} />
                        <ExitIcon onClick={onClose} />
                    </div>
                </div>

                <div className={classes.ContentContainer}>
                    <div className={classes.Content}>
                        <div className={classes.ClientDataContainer}>
                            {clientData}
                        </div>
                        <div className={classes.ClientReceipts}>
                            <div className={classes.Gap} />
                            {clientReceiptsList}
                            <div className={classes.Gap} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
