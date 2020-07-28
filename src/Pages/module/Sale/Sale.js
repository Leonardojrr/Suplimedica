import React, { useState } from "react";
import ModuleHeader from "../../../components/General/ModuleHeader";
import classes from "./Sale.module.css";
import { Input } from "../../../Util/Input/Input";
import { SearchInput } from "./SearchInput/SearchInput";
import { AddItemList } from "./AddItemList/AddItemList";

import { MdSearch } from "react-icons/md";

const Sale = (props) => {
    const [nameValue, setNameValue] = useState("");
    const [codeValue, setCodeValue] = useState("");

    const onFilterByName = (name) => {
        setNameValue(name);
    };

    const onFilterByCode = (code) => {
        setCodeValue(code);
    };

    const onAddSaleProduct = (data) => {
        console.log(data);
    };

    return (
        <div className={classes.Container}>
            <div className={classes.Header}>Venta</div>
            <div className={classes.LeftContainer}>
                <div className={classes.LeftContent}>
                    <div className={classes.LeftTitle}>
                        Búsqueda de productos
                    </div>
                    <div className={classes.Inputs}>
                        <SearchInput
                            label={"Nombre"}
                            onChange={(value) => {
                                onFilterByName(value);
                            }}
                        />
                        <SearchInput
                            label={"Código"}
                            onChange={(value) => {
                                onFilterByCode(value);
                            }}
                        />
                    </div>
                    <div className={classes.BreakLineContainer}>
                        <div className={classes.BreakLine} />
                    </div>
                    <div className={classes.ItemsList}>
                        <AddItemList />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sale;
