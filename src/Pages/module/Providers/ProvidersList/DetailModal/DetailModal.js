import React, { useState, useEffect } from "react";

import classes from "./DetailModal.module.css";

import { MdClose, MdEdit } from "react-icons/md";

import { Receipt } from "./Receipt/Receipt";
import { ExitIcon } from "../../../../../components/Icons/ExitIcon/ExitIcon";
import { EditIcon } from "../../../../../components/Icons/EditIcon/EditIcon";

export const DetailModal = (props) => {
    let { modalVisible, onClose, onEdit } = props;
    const [provider, setProvider] = useState({});

    useEffect(() => {
        setProvider(props.provider);
    }, [props.provider]);

    let providerData = null;

    if (provider.nombre) {
        providerData = (
            <div className={classes.ProviderData}>
                <div className={classes.ProviderFieldDetail}>
                    {provider.ci.toLowerCase().startsWith("j")
                        ? "RIF: " + provider.ci
                        : "CI: " + provider.ci}
                </div>
                <div className={classes.ProviderFieldDetail}>
                    {provider.direccion
                        ? "direccion: " + provider.direccion
                        : null}
                </div>
                <div className={classes.ProviderFieldDetail}>
                    {provider.numero ? "numero: " + provider.numero : null}
                </div>
            </div>
        );
    }

    let providerReceipts = [
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

    let providerReceiptsList = [];

    providerReceipts.map((receipt) => {
        return providerReceiptsList.push(<Receipt receipt={receipt} />);
    });

    return (
        <div
            className={classes.ModalContainer}
            style={{ display: modalVisible ? "block" : "none" }}
        >
            <div className={classes.Backdrop} onClick={onClose}></div>
            <div className={classes.Modal}>
                <div className={classes.TitleContainer}>
                    <div className={classes.Name}>{provider.nombre}</div>
                    <div className={classes.IconsContainer}>
                        <EditIcon onClick={onEdit} />
                        <ExitIcon onClick={onClose} />
                    </div>
                </div>

                <div className={classes.ContentContainer}>
                    <div className={classes.Content}>
                        <div className={classes.ProviderDataContainer}>
                            {providerData}
                        </div>
                        <div className={classes.ProviderReceipts}>
                            <div className={classes.Gap} />
                            {providerReceiptsList}
                            <div className={classes.Gap} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
