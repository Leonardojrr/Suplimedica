import React from "react";

import classes from "./Provider.module.css";

export const Provider = (props) => {
  let { provider, onSelectProvider } = props;

  return (
    <div
      className={classes.ProviderContainer}
      onClick={() => onSelectProvider(provider)}
    >
      <div className={classes.ProviderName}>{provider.nombre_persona}</div>
      <div className={classes.ProviderId}>
        {provider.ci_persona.toLowerCase().startsWith("j")
          ? "RIF: " + provider.ci_persona
          : "CI: " + provider.ci_persona}
      </div>
    </div>
  );
};
