import React, { useState, useEffect } from "react";

import classes from "./DetailModal.module.css";

import { MdClose, MdEdit } from "react-icons/md";

import { Receipt } from "./Receipt/Receipt";
import { ExitIcon } from "../../../../../components/Icons/ExitIcon/ExitIcon";
import { EditIcon } from "../../../../../components/Icons/EditIcon/EditIcon";

export const DetailModal = (props) => {
  let { modalVisible, onClose, onEdit } = props;
  const [provider, setProvider] = useState({});
  const [providerReceipts, setProviderReceipts] = useState([]);

  // console.log(provider);

  useEffect(() => {
    if (props.provider.id_persona) {
      console.log("id: ", props.provider);
      getReceipts(props.provider.id_persona);
    }
    setProvider(props.provider);
  }, [props.provider]);

  const getReceipts = async (id_proveedor) => {
    const res = await fetch("http://localhost:3000/operation/" + id_proveedor, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }).then((resp) => resp.json());

    if (res.status === 200) {
      setProviderReceipts(res.data);
    } else {
      alert("Error al traer los recibos de este proveedor");
    }
  };

  console.log("receipts: ", providerReceipts);

  let providerData = null;

  if (provider.nombre_persona) {
    providerData = (
      <div className={classes.ProviderData}>
        <div className={classes.ProviderFieldDetail}>
          {provider.ci_persona.toLowerCase().startsWith("j")
            ? "RIF: " + provider.ci_persona
            : "CI: " + provider.ci_persona}
        </div>
        <div className={classes.ProviderFieldDetail}>
          {provider.direccion_persona
            ? "direccion: " + provider.direccion_persona
            : null}
        </div>
        <div className={classes.ProviderFieldDetail}>
          {provider.numero_persona
            ? "numero: " + provider.numero_persona
            : null}
        </div>
      </div>
    );
  }

  // let providerReceipts = [
  //   {
  //     id_operacion: 1,
  //     fecha_operacion: "24/10/2020",
  //     total_operacion: 1200,
  //     id_usuario: 1,
  //     detalle: [
  //       {
  //         cantidad_producto_operacion: 10,
  //         codigo: 29292929,
  //         nombre: "Paquete de vendaje 60 unidades",
  //         precio: 120,
  //       },
  //       {
  //         cantidad_producto_operacion: 10,
  //         codigo: 29292989,
  //         nombre: "Inyectadora 30 unidades",
  //         precio: 100,
  //       },
  //     ],
  //   },
  //   {
  //     id_operacion: 2,
  //     fecha_operacion: "24/10/2020",
  //     total_operacion: 1200,
  //     id_usuario: 1,
  //     detalle: [
  //       {
  //         cantidad_producto_operacion: 10,
  //         codigo: 29292929,
  //         nombre: "Paquete de vendaje 60 unidades",
  //         precio: 120,
  //       },
  //       {
  //         cantidad_producto_operacion: 10,
  //         codigo: 29292989,
  //         nombre: "Inyectadora 30 unidades",
  //         precio: 100,
  //       },
  //     ],
  //   },
  // ];

  let providerReceiptsList = [];
  if (providerReceipts.length > 0) {
    providerReceipts.map((receipt, index) => {
      return providerReceiptsList
        .push(<Receipt key={index} receipt={receipt} />)
        .reverse();
    });
  }

  return (
    <div
      className={classes.ModalContainer}
      style={{ display: modalVisible ? "block" : "none" }}
    >
      <div className={classes.Backdrop} onClick={onClose}></div>
      <div className={classes.Modal}>
        <div className={classes.TitleContainer}>
          <div className={classes.Name}>{provider.nombre_persona}</div>
          <div className={classes.IconsContainer}>
            <EditIcon onClick={onEdit} />
            <ExitIcon onClick={onClose} />
          </div>
        </div>

        <div className={classes.ContentContainer}>
          <div className={classes.Content}>
            <div className={classes.ProviderDataContainer}>{providerData}</div>
            <div className={classes.ProviderReceipts}>
              <div className={classes.Gap} />
              {providerReceiptsList}
              <div className={classes.Gap} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
