import React from "react";

import classes from "./ProviderDetails.module.css";

export const ProviderDetails = (props) => {
    const { provider, onSelectProvider = () => {} } = props;

    // console.log(Provider);

    return (
        <div
            className={classes.ProviderContainer}
            onClick={() => {
                onSelectProvider(provider);
            }}
        >
            <div className={classes.ProviderData}>
                <div className={classes.ProviderTitle}>{provider.nombre}</div>
                <div className={classes.ProviderCode}>{provider.ci}</div>
            </div>
        </div>
    );
};
