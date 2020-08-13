import React, { useState, useEffect } from "react";

import classes from "./ProvidersList.module.css";
import { Provider } from "./Provider/Provider";

// import { MdAdd } from "react-icons/md";

export const ProvidersList = (props) => {
  const { providers = [], onViewDetails } = props;
  const [nameValue, setNameValue] = useState("");
  const [idValue, setIdValue] = useState("");

  useEffect(() => {
    setNameValue(props.nameValue);
  }, [props.nameValue]);

  useEffect(() => {
    setIdValue(props.idValue);
  }, [props.idValue]);

  let providersList = [];

  if (providers.length > 0) {
    providers.map((provider) => {
      if (
        provider.nombre_persona
          .toLowerCase()
          .includes(nameValue.toLowerCase()) &&
        provider.ci_persona
          .toLowerCase()
          .replace(/[\.\-\s]+/g, "")
          .toString()
          .includes(idValue.toLowerCase().replace(/[\.\-\s]+/g, ""))
      ) {
        return providersList.push(
          <Provider
            key={provider.ci_persona}
            provider={provider}
            onSelectProvider={onViewDetails}
          />
        );
      }
      return null;
    });
  }

  const itemNotFound = <div>No se han encontrado coincidencias</div>;

  return <div className={classes.Content}>{providersList}</div>;
};
