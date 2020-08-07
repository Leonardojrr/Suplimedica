import React, { useState, useEffect } from "react";

import classes from "./EditDetailModal.module.css";

import { MdClose, MdEdit } from "react-icons/md";
import { FaBarcode } from "react-icons/fa";
import { Input } from "../../../../../Util/Input/Input";
import { EditInput } from "./EditInput/EditInput";

export const EditDetailModal = (props) => {
    let { modalVisible, onClose, item } = props;
    const [editNameValue, setEditNameValue] = useState(props.item.nombre);
    const [editBrandValue, setEditBrandValue] = useState(props.item.marca);
    const [editCodeValue, setEditCodeValue] = useState(props.item.codigo);
    const [editPriceValue, setEditPriceValue] = useState(props.item.precio);

    const handleChange = () => {};

    useEffect(() => {
        setEditNameValue(props.item.nombre);
        setEditBrandValue(props.item.marca);
        setEditCodeValue(props.item.codigo);
        setEditPriceValue(props.item.precio);
    }, [props.item]);

    const onCancelHandler = () => {
        setEditNameValue(props.item.nombre);
        setEditBrandValue(props.item.marca);
        setEditCodeValue(props.item.codigo);
        setEditPriceValue(props.item.precio);
        onClose();
    };

    const onNameChangeHandler = (val) => {
        setEditNameValue(val);
    };

    const onCodeChangeHandler = (val) => {
        setEditCodeValue(val);
    };

    const onPriceChangeHandler = (val) => {
        setEditPriceValue(val);
    };

    const onBrandChangeHandler = (val) => {
        setEditBrandValue(val);
    };

    console.log(item);
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
                        Edita los datos de este producto
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
                        <EditInput
                            label={"Nombre"}
                            value={editNameValue}
                            onChange={onNameChangeHandler}
                        />
                        <EditInput
                            label={"Codigo"}
                            value={editCodeValue}
                            onChange={onCodeChangeHandler}
                        />
                        <EditInput
                            label={"Marca"}
                            value={editBrandValue}
                            onChange={onBrandChangeHandler}
                        />
                        <EditInput
                            label={"Precio"}
                            value={editPriceValue}
                            onChange={onPriceChangeHandler}
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
                        // onClick={onAddClient}
                    >
                        Editar
                    </div>
                </div>
            </div>
        </div>
    );
};