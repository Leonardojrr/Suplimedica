import React from "react";

import classes from "./Client.module.css";

export const Client = (props) => {
  let { client, onSelectClient } = props;

  return (
    <div
      className={classes.ClientContainer}
      onClick={() => onSelectClient(client)}
    >
      <div className={classes.ClientName}>{client.nombre_persona}</div>
      <div className={classes.ClientId}>
        {client.ci_persona.toLowerCase().startsWith("j")
          ? "RIF: " + client.ci_persona
          : "CI: " + client.ci_persona}
      </div>
    </div>
  );
};
