import React from "react";

import classes from "./ProviderDetails.module.css";

export const ProviderDetails = (props) => {
  const { provider, onSelectProvider = () => {} } = props;

  return (
    <div
      className={classes.ProviderContainer}
      onClick={() => {
        onSelectProvider(provider);
      }}
    >
      <div className={classes.ProviderData}>
        <div className={classes.ProviderTitle}>{provider.nombre_persona}</div>
        <div className={classes.ProviderCode}>{provider.ci_persona}</div>
      </div>
    </div>
  );
};
