import React from "react";
import "./ModuleHeader.css";

function ModuleHeader(props) {
  let isHide = false;
  function a() {
    if (isHide) {
      document.getElementById("inventory-panel-container").className = "show";
      document.getElementById("inventory-finder-container").className = "show";
      isHide = false;
    } else {
      document.getElementById("inventory-panel-container").className = "hide";
      document.getElementById("inventory-finder-container").className = "hide";
      isHide = true;
    }
  }
  return (
    <div className="module-header">
      <span>{props.title.toUpperCase()}</span>
      <div className="module-header-buttons-container">{props.children}</div>
    </div>
  );
}

export default ModuleHeader;
