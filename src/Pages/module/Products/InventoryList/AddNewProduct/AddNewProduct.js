import React, { useState, useEffect } from "react";

import classes from "./AddNewProduct.module.css";

import { EditInput } from "./EditInput/EditInput";
import { ExitIcon } from "../../../../../components/Icons/ExitIcon/ExitIcon";

export const AddNewProduct = (props) => {
    let { modalVisible, onClose, onAddProduct = () => {} } = props;
    const [state, setState] = useState({
        nombre: "",
        codigo: "",
        marca: "",
        precio: 0,
    });

    const onCancelHandler = () => {
        setState({});
        onClose();
    };

    const onNameChangeHandler = (val) => {
        setState({ ...state, nombre: val });
    };

    const onCodeChangeHandler = (val) => {
        setState({ ...state, codigo: val });
    };

    const onPriceChangeHandler = (val) => {
        setState({ ...state, precio: val });
    };

    const onBrandChangeHandler = (val) => {
        setState({ ...state, marca: val });
    };

    return (
        <div
            className={classes.ModalContainer}
            style={{ display: modalVisible ? "block" : "none" }}
        >
            <div className={classes.Backdrop} onClick={onClose}></div>
            <div className={classes.Modal}>
                <div className={classes.TitleContainer}>
                    <div className={classes.Title}>
                        Añadir un nuevo producto
                    </div>
                    <div className={classes.IconsContainer}>
                        <ExitIcon onClick={onClose} />
                    </div>
                </div>

                <div className={classes.ContentContainer}>
                    <div className={classes.Content}>
                        <EditInput
                            label={"Nombre"}
                            value={state.nombre}
                            onChange={onNameChangeHandler}
                        />
                        <EditInput
                            label={"Codigo"}
                            value={state.codigo}
                            onChange={onCodeChangeHandler}
                        />
                        <EditInput
                            label={"Marca"}
                            value={state.marca}
                            onChange={onBrandChangeHandler}
                        />
                        <EditInput
                            label={"Precio"}
                            value={state.precio}
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
                        onClick={() => onAddProduct(state)}
                    >
                        Añadir
                    </div>
                </div>
            </div>
        </div>
    );
};
