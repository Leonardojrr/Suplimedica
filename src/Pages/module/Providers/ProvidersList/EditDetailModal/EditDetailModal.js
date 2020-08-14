import React, { useState, useEffect } from "react";

import classes from "./EditDetailModal.module.css";

import { MdClose } from "react-icons/md";
import { EditInput } from "./EditInput/EditInput";
import { ExitIcon } from "../../../../../components/Icons/ExitIcon/ExitIcon";
import { LoaderModal } from "../../../../../components/Loader/Loader";

export const EditDetailModal = (props) => {
  let { modalVisible, onClose, updateList } = props;
  const [isLoading, setIsLoading] = useState(false);
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
      name: props.provider.nombre_persona,
      ci: props.provider.ci_persona,
      address: props.provider.direccion_persona,
      number: props.provider.numero_persona,
    });
  }, [props.provider]);

  const onCancelHandler = () => {
    setState({
      name: props.provider.nombre_persona,
      ci: props.provider.ci_persona,
      address: props.provider.direccion_persona,
      number: props.provider.numero_persona,
    });
    onClose();
  };

  const onEditProvider = async () => {
    try {
      setIsLoading(true);

      const res = await fetch(
        "http://localhost:3000/provider/" + props.provider.id_persona,
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
      setIsLoading(false);

      if (res.status === 200) {
        // onOpenDetailModal({
        //   id_persona: props.provider.id_persona,
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
          <div className={classes.Title}>Edita los datos de este proveedor</div>
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
            <LoaderModal visible={isLoading} />
          </div>
        </div>

        <div className={classes.BottomContainer}>
          <div className={classes.CancelButton} onClick={onCancelHandler}>
            Cancelar
          </div>
          <div className={classes.AcceptButton} onClick={onEditProvider}>
            Editar
          </div>
        </div>
      </div>
    </div>
  );
};
