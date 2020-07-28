import React, { useState } from "react";
import ModuleHeader from "../../../components/General/ModuleHeader";
import classes from "./Sale.module.css";
import { Input } from "../../../Util/Input/Input";

import { MdSearch } from "react-icons/md";

const Sale = (props) => {
    return (
        <div className={classes.Container}>
            <div className={classes.Header}>Venta</div>
            <div className={classes.LeftContainer}>
                <div className={classes.LeftContent}>
                    <div className={classes.LeftTitle}>
                        Búsqueda de productos
                    </div>
                    <div className={classes.InputContainer}>
                        <div className={classes.Input}>
                            <Input
                                label={"Nombre"}
                                onChange={(value) => {
                                    console.log(value);
                                }}
                            />
                        </div>
                        <div className={classes.Search}>
                            <MdSearch className={classes.SearchIcon} />
                        </div>
                    </div>
                    <div className={classes.InputContainer}>
                        <div className={classes.Input}>
                            <Input
                                label={"Código"}
                                onChange={(value) => {
                                    console.log(value);
                                }}
                            />
                        </div>
                        <div className={classes.Search}>
                            <MdSearch className={classes.SearchIcon} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sale;
