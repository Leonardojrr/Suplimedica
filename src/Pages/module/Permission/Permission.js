import React, { useState } from "react";
import "./Permission.css";

const Permission = () => {
    const [personAdded, setPersonAdded] = useState(false);
    const onAddNewEmployee = () => {
        setPersonAdded(true);
    };

    const onAddNewUser = () => {};

    return <h1>Permisos</h1>;
};

export default Permission;
