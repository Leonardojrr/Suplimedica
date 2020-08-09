import React, { useState } from "react";

import classes from "./AddClientModal.module.css";

import { MdClose } from "react-icons/md";

import { Input } from "../../../../../Util/Input/Input";
import { ExitIcon } from "../../../../../components/Icons/ExitIcon/ExitIcon";

export const AddClientModal = (props) => {
    let { modalVisible, onCloseModal, onAddNewClient } = props;
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

    const onAddClient = () => {
        if (nameValue && idValue) {
            onAddNewClient({
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
                <div className={classes.Header}>
                    <div className={classes.Title}>
                        Añadir a un nuevo cliente
                    </div>
                    <div className={classes.IconsContainer}>
                        <ExitIcon onClick={onCloseModal} />
                    </div>
                </div>

                <div className={classes.InputsContainer}>
                    <div className={classes.InputContainer}>
                        <Input
                            label="Nombre"
                            onChange={(value) => {
                                onNameChangeHandler(value);
                            }}
                        />
                    </div>
                    <div className={classes.InputContainer}>
                        <Input
                            label="Identificación"
                            onChange={(value) => {
                                onIdChangeHandler(value);
                            }}
                        />
                    </div>
                    <div className={classes.InputContainer}>
                        <Input
                            label="Dirección"
                            onChange={(value) => {
                                onAddressChangeHandler(value);
                            }}
                        />
                    </div>
                    <div className={classes.InputContainer}>
                        <Input
                            label="Número"
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
                    <div className={classes.AcceptButton} onClick={onAddClient}>
                        Añadir
                    </div>
                </div>
            </div>
        </div>
    );
};
