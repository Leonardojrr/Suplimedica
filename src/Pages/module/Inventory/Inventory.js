import React, { Fragment } from "react";
import ModuleHeader from "../../../components/General/ModuleHeader";
import InventoryList from "../../../components/Inventory/InventoryList";
import InventoryFinder from "../../../components/Inventory/InventoryFinder";

import "./Inventory.css";

function Inventory() {
  let isHide = true;

  function activeHeaderButton(e) {
    let clicked = e.target.parentNode;

    clicked.classList.contains("on")
      ? clicked.classList.remove("on")
      : clicked.classList.add("on");

    if (clicked.id === "finder-button") {
      if (isHide) {
        document.getElementById("inventory-panel-container").className = "show";
        document.getElementById("inventory-finder-container").className =
          "show";

        isHide = false;
      } else {
        document.getElementById("inventory-panel-container").className = "hide";
        document.getElementById("inventory-finder-container").className =
          "hide";

        isHide = true;
      }
    }
  }

  return (
    <Fragment>
      <div id="inventory-module-container">
        <div id="inventory-panel-container" className="hide">
          <ModuleHeader title="Inventario">
            <div id="finder-button" className="module-header-button">
              <div
                className="header-button-clickable-area"
                onClick={activeHeaderButton}
              ></div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 39.36 38.62">
                <g id="Layer_2" data-name="Layer 2">
                  <g id="Layer_1-2" data-name="Layer 1">
                    <path
                      class="cls-1"
                      d="M37.36,38.62A2,2,0,0,1,35.94,38L22.39,24.49a2,2,0,0,1,2.83-2.83L38.77,35.21a2,2,0,0,1,0,2.83A2,2,0,0,1,37.36,38.62Z"
                    />
                    <path
                      class="cls-1"
                      d="M14.53,29.07A14.54,14.54,0,1,1,29.07,14.53,14.55,14.55,0,0,1,14.53,29.07ZM14.53,4A10.54,10.54,0,1,0,25.07,14.53,10.55,10.55,0,0,0,14.53,4Z"
                    />
                  </g>
                </g>
              </svg>
            </div>
            <div id="filter-button" className="module-header-button">
              <div
                className="header-button-clickable-area"
                onClick={activeHeaderButton}
              ></div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38.83 37.22">
                <g id="Layer_2" data-name="Layer 2">
                  <g id="Layer_1-2" data-name="Layer 1">
                    <g id="adjust">
                      <g id="Group_119" data-name="Group 119">
                        <g id="Group_118" data-name="Group 118">
                          <path
                            id="Path_43"
                            data-name="Path 43"
                            class="cls-1"
                            d="M37.21,29.94H32.9a5.62,5.62,0,0,0-10.8,0H1.62a1.62,1.62,0,0,0,0,3.23H22.1a5.62,5.62,0,0,0,10.8,0h4.31a1.62,1.62,0,1,0,0-3.23ZM27.5,34a2.43,2.43,0,1,1,2.43-2.43A2.42,2.42,0,0,1,27.5,34Z"
                          />
                        </g>
                      </g>
                      <g id="Group_121" data-name="Group 121">
                        <g id="Group_120" data-name="Group 120">
                          <path
                            id="Path_44"
                            data-name="Path 44"
                            class="cls-1"
                            d="M37.21,4.05H32.9a5.63,5.63,0,0,0-10.8,0H1.62a1.62,1.62,0,0,0,0,3.24H22.1a5.63,5.63,0,0,0,10.8,0h4.31a1.62,1.62,0,0,0,0-3.24ZM27.5,8.1a2.43,2.43,0,1,1,2.43-2.43h0A2.44,2.44,0,0,1,27.5,8.1Z"
                          />
                        </g>
                      </g>
                      <g id="Group_123" data-name="Group 123">
                        <g id="Group_122" data-name="Group 122">
                          <path
                            id="Path_45"
                            data-name="Path 45"
                            class="cls-1"
                            d="M37.21,17H16.73a5.63,5.63,0,0,0-10.8,0H1.62a1.62,1.62,0,0,0,0,3.24H5.93a5.62,5.62,0,0,0,10.8,0H37.21a1.62,1.62,0,0,0,0-3.24ZM11.33,21a2.43,2.43,0,1,1,2.42-2.43h0A2.42,2.42,0,0,1,11.33,21Z"
                          />
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
            <div id="refresh-button" className="module-header-button">
              <div
                className="header-button-clickable-area"
                onClick={activeHeaderButton}
              ></div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40.02 40.02">
                <g id="Layer_2" data-name="Layer 2">
                  <g id="Layer_1-2" data-name="Layer 1">
                    <g id="actualizar">
                      <g id="Group_89" data-name="Group 89">
                        <g id="Group_88" data-name="Group 88">
                          <path
                            id="Path_41"
                            data-name="Path 41"
                            class="cls-1"
                            d="M38.6,5.52a1.57,1.57,0,0,0-1.7,1.41h0l-.21,2.27A19.73,19.73,0,0,0,2.38,10.85a1.56,1.56,0,1,0,2.78,1.43A16.62,16.62,0,0,1,34.07,10.9L31.84,9.3A1.56,1.56,0,1,0,30,11.85l6.76,4.82A1.57,1.57,0,0,0,39,16.31a1.53,1.53,0,0,0,.28-.77L40,7.22A1.57,1.57,0,0,0,38.6,5.52Z"
                          />
                        </g>
                      </g>
                      <g id="Group_91" data-name="Group 91">
                        <g id="Group_90" data-name="Group 90">
                          <path
                            id="Path_42"
                            data-name="Path 42"
                            class="cls-1"
                            d="M37,27.06a1.57,1.57,0,0,0-2.1.68A16.61,16.61,0,0,1,6,29.12l2.23,1.59A1.56,1.56,0,1,0,10,28.17h0L3.23,23.34a1.56,1.56,0,0,0-2.18.37,1.47,1.47,0,0,0-.28.76L0,32.79a1.56,1.56,0,1,0,3.11.31v0l.21-2.27a19.74,19.74,0,0,0,34.31-1.65A1.57,1.57,0,0,0,37,27.06Z"
                          />
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
          </ModuleHeader>
          <div id="inventory-list-container">
            <InventoryList />
          </div>
        </div>
        <div id="inventory-finder-container" className="hide">
          <InventoryFinder />
        </div>
      </div>
      <div id="inventory-modal-container"></div>
    </Fragment>
  );
}

export default Inventory;
