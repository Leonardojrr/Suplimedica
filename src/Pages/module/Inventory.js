import React from "react";
import ModuleHeader from "../../components/ModuleHeader";
import InventoryList from "../../components/InventoryList";
import InventoryFinder from "../../components/InventoryFinder";

import "./Inventory.css";

function Inventory() {
  return (
    <div id="inventory-module-container">
      <div id="inventory-panel-container" className="show">
        <ModuleHeader title="Inventario">
          <span>a</span>
          <span>b</span>
        </ModuleHeader>
        <div id="inventory-list-container">
          <InventoryList />
        </div>
      </div>
      <div id="inventory-finder-container" className="show">
        <InventoryFinder />
      </div>
    </div>
  );
}

export default Inventory;
