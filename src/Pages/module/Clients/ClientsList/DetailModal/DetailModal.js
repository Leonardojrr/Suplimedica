import React, { useState, useEffect } from "react";

import classes from "./DetailModal.module.css";

import { MdClose, MdEdit } from "react-icons/md";

import { Receipt } from "./Receipt/Receipt";
import { ExitIcon } from "../../../../../components/Icons/ExitIcon/ExitIcon";
import { EditIcon } from "../../../../../components/Icons/EditIcon/EditIcon";

export const DetailModal = (props) => {
  let { modalVisible, onClose, onEdit } = props;
  const [client, setClient] = useState({});
  const [clientReceipts, setClientReceipts] = useState([]);

  // console.log(client);

  useEffect(() => {
    if (props.client.id_persona) {
      console.log("id: ", props.client);
      getReceipts(props.client.id_persona);
    }
    setClient(props.client);
  }, [props.client]);

  const getReceipts = async (id_cliente) => {
    const res = await fetch("http://localhost:3000/operation/" + id_cliente, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }).then((resp) => resp.json());

    if (res.status === 200) {
      console.log(res.data);
      setClientReceipts(res.data);
    } else {
      alert("Error al traer los recibos de este proveedor");
    }
  };

  console.log("receipts: ", clientReceipts);

  let clientData = null;

  if (client.nombre_persona) {
    clientData = (
      <div className={classes.ClientData}>
        <div className={classes.ClientFieldDetail}>
          {client.ci_persona.toLowerCase().startsWith("j")
            ? "RIF: " + client.ci_persona
            : "CI: " + client.ci_persona}
        </div>
        <div className={classes.ClientFieldDetail}>
          {client.direccion_persona
            ? "direccion: " + client.direccion_persona
            : null}
        </div>
        <div className={classes.ClientFieldDetail}>
          {client.numero_persona ? "numero: " + client.numero_persona : null}
        </div>
      </div>
    );
  }

  // let clientReceipts = [
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

  let clientReceiptsList = [];
  if (clientReceipts.length > 0) {
    clientReceipts.map((receipt, index) => {
      return clientReceiptsList.push(<Receipt key={index} receipt={receipt} />);
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
          <div className={classes.Name}>{client.nombre_persona}</div>
          <div className={classes.IconsContainer}>
            <EditIcon onClick={onEdit} />
            <ExitIcon onClick={onClose} />
          </div>
        </div>

        <div className={classes.ContentContainer}>
          <div className={classes.Content}>
            <div className={classes.ClientDataContainer}>{clientData}</div>
            <div className={classes.ClientReceipts}>
              <div className={classes.Gap} />
              {clientReceiptsList}
              <div className={classes.Gap} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
