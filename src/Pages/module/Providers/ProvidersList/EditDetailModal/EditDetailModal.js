import React, { useState, useEffect } from "react";

import classes from "./EditDetailModal.module.css";

import { MdClose } from "react-icons/md";
import { EditInput } from "./EditInput/EditInput";
import { ExitIcon } from "../../../../../components/Icons/ExitIcon/ExitIcon";

export const EditDetailModal = (props) => {
    let { modalVisible, onClose } = props;
    const [editNameValue, setEditNameValue] = useState("");
    const [editIdValue, setEditIdValue] = useState("");
    const [editAddressValue, setEditAddressValue] = useState("");
    const [editNumberValue, setEditNumberValue] = useState("");

    const handleChange = () => {};

    useEffect(() => {
        setEditNameValue(props.provider.nombre);
        setEditIdValue(props.provider.ci);
        setEditAddressValue(props.provider.direccion);
        setEditNumberValue(props.provider.numero);
    }, [props.provider]);

    const onCancelHandler = () => {
        setEditNameValue(props.provider.nombre);
        setEditIdValue(props.provider.ci);
        setEditAddressValue(props.provider.direccion);
        setEditNumberValue(props.provider.numero);
        onClose();
    };

    const onNameChangeHandler = (val) => {
        setEditNameValue(val);
    };

    const onIdChangeHandler = (val) => {
        setEditIdValue(val);
    };

    const onAddressChangeHandler = (val) => {
        setEditAddressValue(val);
    };

    const onNumberChangeHandler = (val) => {
        setEditNumberValue(val);
    };

    // console.log(item);
    console.log(editNameValue);

    return (
        <div
            className={classes.ModalContainer}
            style={{ display: modalVisible ? "block" : "none" }}
        >
            <div className={classes.Backdrop} onClick={onClose}></div>
            <div className={classes.Modal}>
                <div className={classes.TitleContainer}>
                    <div className={classes.Title}>
                        Edita los datos de este proveedor
                    </div>
                    <div className={classes.IconsContainer}>
                        <ExitIcon onClick={onClose} />
                    </div>
                </div>

                <div className={classes.ContentContainer}>
                    <div className={classes.Content}>
                        <EditInput
                            label={"Nombre"}
                            value={editNameValue}
                            onChange={onNameChangeHandler}
                        />
                        <EditInput
                            label={"Identificación"}
                            value={editIdValue}
                            onChange={onIdChangeHandler}
                        />
                        <EditInput
                            label={"Direccion"}
                            value={editAddressValue}
                            onChange={onAddressChangeHandler}
                        />
                        <EditInput
                            label={"Numero"}
                            value={editNumberValue}
                            onChange={onNumberChangeHandler}
                        />
                    </div>
                </div>

                <div className={classes.BottomContainer}>
                    <div
                        className={classes.CancelButton}
                        onClick={onCancelHandler}
                    >
                        Cancelar
                    </div>
                    <div
                        className={classes.AcceptButton}
                        // onClick={onAddprovider}
                    >
                        Editar
                    </div>
                </div>
            </div>
        </div>
    );
};
