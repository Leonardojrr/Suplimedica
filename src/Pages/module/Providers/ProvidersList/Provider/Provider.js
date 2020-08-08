import React from "react";

import classes from "./Provider.module.css";

export const Provider = (props) => {
    let { provider, onSelectProvider } = props;

    return (
        <div
            className={classes.ProviderContainer}
            onClick={() => onSelectProvider(provider)}
        >
            <div className={classes.ProviderName}>{provider.nombre}</div>
            <div className={classes.ProviderId}>
                {provider.ci.toLowerCase().startsWith("j")
                    ? "RIF: " + provider.ci
                    : "CI: " + provider.ci}
            </div>
        </div>
    );
};
