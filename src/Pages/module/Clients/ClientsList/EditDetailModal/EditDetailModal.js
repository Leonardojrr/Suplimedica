import React, { useState, useEffect } from "react";

import classes from "./EditDetailModal.module.css";

import { MdClose } from "react-icons/md";
import { EditInput } from "./EditInput/EditInput";
import { ExitIcon } from "../../../../../components/Icons/ExitIcon/ExitIcon";

export const EditDetailModal = (props) => {
  let { modalVisible, onClose, updateList } = props;
  const [state, setState] = useState({
    name: "",
    ci: "",
    address: "",
    number: 0,
  });

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

  useEffect(() => {
    setState({
      name: props.client.nombre_persona,
      ci: props.client.ci_persona,
      address: props.client.direccion_persona,
      number: props.client.numero_persona,
    });
  }, [props.client]);

  const onCancelHandler = () => {
    setState({
      name: props.client.nombre_persona,
      ci: props.client.ci_persona,
      address: props.client.direccion_persona,
      number: props.client.numero_persona,
    });
    onClose();
  };

  const onEditClient = async () => {
    try {
      const res = await fetch(
        "http://localhost:3000/client/" + props.client.id_persona,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...state,
          }),
        }
      ).then((resp) => resp.json());
      if (res.status === 200) {
        // onOpenDetailModal({
        //   id_persona: props.client.id_persona,
        //   nombre_persona: state.name,
        //   direccion_persona: state.address,
        //   numero_persona: state.number,
        //   ci_persona: state.ci,
        // });
        updateList();
        onClose();
      }
    } catch (e) {
      return e;
    }
  };

  return (
    <div
      className={classes.ModalContainer}
      style={{ display: modalVisible ? "block" : "none" }}
    >
      <div className={classes.Backdrop} onClick={onClose}></div>
      <div className={classes.Modal}>
        <div className={classes.TitleContainer}>
          <div className={classes.Title}>Edita los datos de este cliente</div>
          <div className={classes.IconsContainer}>
            <ExitIcon onClick={onClose} />
          </div>
        </div>

        <div className={classes.ContentContainer}>
          <div className={classes.Content}>
            <EditInput
              label={"Nombre"}
              value={state.name}
              onChange={onNameChangeHandler}
            />
            <EditInput
              label={"Identificación"}
              value={state.ci}
              onChange={onIdChangeHandler}
            />
            <EditInput
              label={"Direccion"}
              value={state.address}
              onChange={onAddressChangeHandler}
            />
            <EditInput
              label={"Numero"}
              value={state.number}
              onChange={onNumberChangeHandler}
            />
          </div>
        </div>

        <div className={classes.BottomContainer}>
          <div className={classes.CancelButton} onClick={onCancelHandler}>
            Cancelar
          </div>
          <div className={classes.AcceptButton} onClick={onEditClient}>
            Editar
          </div>
        </div>
      </div>
    </div>
  );
};
