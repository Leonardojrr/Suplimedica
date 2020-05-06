import React, { useState } from "react";
import ModuleHeader from "../../../components/ModuleHeader";
import classes from './Buy.module.css'
import Providers from "../../../components/Providers/Providers";
import Products from "../../../components/Products/Products";

const Buy = (props) => {

    const [provider, setProvider] = useState(null)

    const selectProviderHandler = (provider) => {
        setProvider(provider)
    } 

    return (
        <div className={classes.container}>
            <ModuleHeader title="Compra" />
            <div className={classes.content}>
                <div className={classes.providers}>
                    <Providers selectProv={selectProviderHandler}/>
                </div>
                {provider ? (
                    <div className={classes.products}>
                        <Products />
                    </div>
                ) : 
                (
                    <div className={classes.products}>
                        Select a provider
                    </div>
                )
                }
                <div className={classes.details}>
                    detalle
                </div>
            </div>
        </div>
    );
}

export default Buy;