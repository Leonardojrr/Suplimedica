import React, { useState } from "react";

import classes from "./AddProviderModal.module.css";

import { MdClose } from "react-icons/md";

import { Input } from "../../../../Util/Input/Input";

export const AddProviderModal = (props) => {
    let { modalVisible, onCloseModal, onAddNewProvider } = props;
    const [nameValue, setNameValue] = useState("");
    const [idValue, setIdValue] = useState("");
    const [addressValue, setAddressValue] = useState("");
    const [numberValue, setNumberValue] = useState(0);

    const onNameChangeHandler = (newVal) => {
        setNameValue(newVal);
    };

    const onIdChangeHandler = (newVal) => {
        setIdValue(newVal);
    };

    const onAddressChangeHandler = (newVal) => {
        setAddressValue(newVal);
    };

    const onNumberChangeHandler = (newVal) => {
        setNumberValue(newVal);
    };

    const onAddProvider = () => {
        if (nameValue && idValue) {
            onAddNewProvider({
                name: nameValue,
                id: idValue,
                address: addressValue,
                number: numberValue,
            });
        } else {
            alert("no se ingresaron datos");
        }
        onCloseModal();
    };

    const onCancelHandler = () => {
        setNameValue("");
        setIdValue("");
        setAddressValue("");
        setNumberValue(0);
        onCloseModal();
    };

    return (
        <div
            className={classes.ModalContainer}
            style={{ display: modalVisible ? "block" : "none" }}
        >
            <div className={classes.Backdrop} onClick={onCloseModal}></div>
            <div className={classes.Modal}>
                <div className={classes.Title}>Añadir a un nuevo proveedor</div>
                <div className={classes.InputsContainer}>
                    <div className={classes.InputContainer}>
                        <Input
                            label="nombre"
                            onChange={(value) => {
                                onNameChangeHandler(value);
                            }}
                        />
                    </div>
                    <div className={classes.InputContainer}>
                        <Input
                            label="ci"
                            onChange={(value) => {
                                onIdChangeHandler(value);
                            }}
                        />
                    </div>
                    <div className={classes.InputContainer}>
                        <Input
                            label="direccion"
                            onChange={(value) => {
                                onAddressChangeHandler(value);
                            }}
                        />
                    </div>
                    <div className={classes.InputContainer}>
                        <Input
                            label="numero"
                            onChange={(value) => {
                                onNumberChangeHandler(value);
                            }}
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
                        onClick={onAddProvider}
                    >
                        Añadir
                    </div>
                </div>
                <div
                    className={classes.ExitButtonContainer}
                    onClick={onCloseModal}
                >
                    <MdClose className={classes.ExitButton} />
                </div>
            </div>
        </div>
    );
};
