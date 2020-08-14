import React, { useState, useEffect } from "react";

import classes from "./AddNewProduct.module.css";

import { EditInput } from "./EditInput/EditInput";
import { ExitIcon } from "../../../../../components/Icons/ExitIcon/ExitIcon";
import { LoaderModal } from "../../../../../components/Loader/Loader";

export const AddNewProduct = (props) => {
  let { modalVisible, onClose, onAddProduct = () => {}, updateList } = props;
  const [isLoading, setIsLoading] = useState(false);

  const [state, setState] = useState({
    nombre: "",
    codigo: "",
    marca: "",
    descripcion: "",
    precio: 0,
  });

  const onCancelHandler = () => {
    setState({});
    onClose();
  };

  const onAddProductHandler = async () => {
    try {
      setIsLoading(true);
      const res = await fetch("http://localhost:3000/product/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          code: state.codigo,
          name: state.nombre,
          price: state.precio,
          description: state.descripcion,
          brand: state.marca,
        }),
      }).then((resp) => resp.json());
      onAddProduct();
      updateList();
    } catch (e) {
      return e;
    }
    setIsLoading(false);
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

  const onDescriptionChangeHandler = (val) => {
    setState({ ...state, descripcion: val });
  };

  return (
    <div
      className={classes.ModalContainer}
      style={{ display: modalVisible ? "block" : "none" }}
    >
      <div className={classes.Backdrop} onClick={onClose}></div>
      <div className={classes.Modal}>
        <div className={classes.TitleContainer}>
          <div className={classes.Title}>Añadir un nuevo producto</div>
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
            <EditInput
              label={"Descripción"}
              value={state.descripcion}
              onChange={onDescriptionChangeHandler}
            />
          </div>
        </div>

        <div className={classes.BottomContainer}>
          <div className={classes.CancelButton} onClick={onCancelHandler}>
            Cancelar
          </div>
          <div
            className={classes.AcceptButton}
            onClick={() => onAddProductHandler(state)}
          >
            Añadir
          </div>
        </div>
      </div>
      <LoaderModal visible={isLoading} />
    </div>
  );
};
