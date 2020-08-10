import React, { useState } from "react";

import classes from "./DetailModal.module.css";

import { FaBarcode } from "react-icons/fa";
import { EditIcon } from "../../../../../components/Icons/EditIcon/EditIcon";
import { ExitIcon } from "../../../../../components/Icons/ExitIcon/ExitIcon";

export const DetailModal = (props) => {
  let { modalVisible, onClose, onEdit, item, productProviders } = props;

  let providersList = [];

  productProviders.map((proveedor, index) => {
    return providersList.push(
      <div key={index} className={classes.Provider}>
        {proveedor.nombre_persona}
      </div>
    );
  });

  return (
    <div
      className={classes.ModalContainer}
      style={{ display: modalVisible ? "block" : "none" }}
    >
      <div className={classes.Backdrop} onClick={onClose}></div>
      <div className={classes.Modal}>
        <div className={classes.TitleContainer}>
          <div className={classes.Name}>{item.nombre}</div>
          <div className={classes.Code}>
            <FaBarcode className={classes.BarCode} />
            &nbsp;
            {item.codigo}
          </div>
          <div className={classes.IconsContainer}>
            <EditIcon onClick={onEdit} />
            <ExitIcon onClick={onClose} />
          </div>
        </div>

        <div className={classes.ContentContainer}>
          <div className={classes.Content}>
            <span className={classes.ContentLabel}>Lista de proveedores: </span>
            <div className={classes.ProvidersContainer}>{providersList}</div>
          </div>
        </div>

        <div className={classes.BottomContainer}>
          <div className={classes.Price}>
            <span className={classes.BottomLabel}>Precio: </span>
            {item.precio}
          </div>
          <div className={classes.Brand}>
            <span className={classes.BottomLabel}>Marca: </span>
            {item.marca}
          </div>
          <div className={classes.Available}>
            <span className={classes.BottomLabel}>Cantidad total: </span>
            {item.cantidad}
          </div>
        </div>
      </div>
    </div>
  );
};
