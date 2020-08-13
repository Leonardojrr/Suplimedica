import React, { useState } from "react";

import classes from "./AddClientModal.module.css";

import { MdClose } from "react-icons/md";

import { Input } from "../../../../Util/Input/Input";
import { formatId } from "../../../../Util/FormatId/FormatId";

export const AddClientModal = (props) => {
  let { modalVisible, onCloseModal, onAddNewClient } = props;
  const [state, setState] = useState({
    name: "",
    ci: "",
    address: "",
    number: 0,
  });
  const [nameValue, setNameValue] = useState("");
  const [idValue, setIdValue] = useState("");
  const [addressValue, setAddressValue] = useState("");
  const [numberValue, setNumberValue] = useState(0);

  const onNameChangeHandler = (newVal) => {
    setState({ ...state, name: newVal });
  };

  const onIdChangeHandler = (newVal) => {
    setState({ ...state, ci: newVal });
  };

  const onAddressChangeHandler = (newVal) => {
    setState({ ...state, address: newVal });
  };

  const onNumberChangeHandler = (newVal) => {
    setState({ ...state, number: newVal });
  };

  const onAddProvider = () => {
    if (formatId(state.ci)) {
      if (state.name && state.ci) {
        onAddNewClient({
          ...state,
          ci: formatId(state.ci),
        });
      } else {
        alert("no se ingresaron datos");
      }
      onCloseModal();
    } else {
      alert("Cedula invalida");
    }
  };

  const onCancelHandler = () => {
    setState({});
    onCloseModal();
  };

  return (
    <div
      className={classes.ModalContainer}
      style={{ display: modalVisible ? "block" : "none" }}
    >
      <div className={classes.Backdrop} onClick={onCloseModal}></div>
      <div className={classes.Modal}>
        <div className={classes.Title}>Añadir a un nuevo cliente</div>
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
          <div className={classes.CancelButton} onClick={onCancelHandler}>
            Cancelar
          </div>
          <div className={classes.AcceptButton} onClick={onAddProvider}>
            Añadir
          </div>
        </div>
        <div className={classes.ExitButtonContainer} onClick={onCloseModal}>
          <MdClose className={classes.ExitButton} />
        </div>
      </div>
    </div>
  );
};
