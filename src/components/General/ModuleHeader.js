import React from "react";
import "./ModuleHeader.css";

function ModuleHeader(props) {
    return (
        <div className="module-header">
            <span>{props.title.toUpperCase()}</span>
            <div className="module-header-buttons-container">
                {props.children}
            </div>
        </div>
    );
}

export default ModuleHeader;
