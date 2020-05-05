import React, { useState, useEffect } from "react";
import { NavLink, useRouteMatch } from "react-router-dom";
import "./Menu.css";

let icons = {
  inventory: require("../assets/Menu/inventory-icon.svg"),
  market: require("../assets/Menu/market-icon.svg"),
  provider: require("../assets/Menu/provider-icon.svg"),
  client: require("../assets/Menu/client-icon.svg"),
  permission: require("../assets/Menu/permission-icon.svg"),
};

function Menu() {
  let match = useRouteMatch();

  return (
    <div id="Menu-container">
      <NavLink
        title="Inventario"
        draggable={false}
        id="inventory-module-button"
        activeClassName="on"
        className="Menu-button"
        to={`${match.url}/inventory`}
      >
        <svg
          draggable={false}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 42.54 48.81"
        >
          <g id="Layer_2" data-name="Layer 2">
            <g id="Layer_1-2" data-name="Layer 1">
              <g id="Group_31" data-name="Group 31">
                <path
                  class="cls-1"
                  d="M17.52,32.63a1,1,0,0,1-.5-.13l-5-2.91a1,1,0,0,1-.5-.86V22.87A1,1,0,0,1,13,22l5.07,2.92a1,1,0,0,1,.5.88l0,5.83a1,1,0,0,1-.51.86A1,1,0,0,1,17.52,32.63Zm-4-4.48,3.05,1.76,0-3.53-3.07-1.77Z"
                />
                <path
                  class="cls-1"
                  d="M21.27,48.81a1,1,0,0,1-.5-.13L.5,37a1,1,0,0,1-.5-.87V12.7a1,1,0,0,1,.5-.87L20.77.13a1,1,0,0,1,1,0L42,11.83a1,1,0,0,1,.5.87V36.11A1,1,0,0,1,42,37L21.77,48.68A1,1,0,0,1,21.27,48.81ZM2,35.53,21.27,46.66,40.54,35.53V13.28L21.27,2.15,2,13.28Z"
                />
                <path
                  class="cls-1"
                  d="M21.27,25.4a1,1,0,0,1-.5-.13L.5,13.57a1,1,0,0,1,0-1.74L20.77.13a1,1,0,0,1,1,0L42,11.83a1,1,0,0,1,.5.86,1,1,0,0,1-.48.86l-7,4.3a1,1,0,1,1-1-1.7l5.57-3.42L21.27,2.15,3,12.7,21.77,23.53a1,1,0,0,1-.5,1.87Z"
                />
                <path
                  class="cls-1"
                  d="M21.27,48.81a1,1,0,0,1-1-1V24.41a1,1,0,0,1,.5-.87l7.61-4.34a1,1,0,1,1,1,1.73L22.27,25V47.81A1,1,0,0,1,21.27,48.81Z"
                />
                <path
                  class="cls-1"
                  d="M28.87,29.77l-.26,0a1,1,0,0,1-.74-1V20.58L8.09,9.19a1,1,0,0,1,0-1.73l5.07-2.93a1,1,0,0,1,1,0L34.43,16.21a1,1,0,0,1,.5.86v8.78a1,1,0,0,1-1.5.86l-1.66-1-2,3.52A1,1,0,0,1,28.87,29.77ZM10.59,8.32,29.37,19.13a1,1,0,0,1,.5.87v5l.67-1.16a1,1,0,0,1,.6-.46,1,1,0,0,1,.76.1l1,.59V17.65L13.66,6.55Z"
                />
              </g>
            </g>
          </g>
        </svg>
      </NavLink>

      <NavLink
        title="Mercado"
        draggable={false}
        id="market-module-button"
        activeClassName="on"
        className="Menu-button"
        to={`${match.url}/market`}
      >
        <svg
          draggable={false}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 43.85 36.67"
        >
          <g id="Layer_2" data-name="Layer 2">
            <g id="Layer_1-2" data-name="Layer 1">
              <path
                class="cls-1"
                d="M18.74,36.67C10.49,36.67,3.63,33,2,26.94a10.27,10.27,0,0,1-.36-3.41l.18-3L3.45,23c3.42,5.13,12.28,7.11,21.06,4.73S39.89,19.16,40.23,13l.16-3,1.67,2.47a10.78,10.78,0,0,1,1.42,3.1c2.16,7.89-5.4,16.85-16.85,20h0A30.19,30.19,0,0,1,18.74,36.67ZM4,26.59c2,6.71,11.87,9.88,22.16,7.07h0C36.39,30.84,43.29,23.09,41.6,16.31c-2,5.88-8.31,11.12-16.57,13.38S8.64,30.64,4,26.59Z"
              />
              <path
                class="cls-1"
                d="M17,30.79c-6.65,0-12.41-2.38-15.25-6.65A10.48,10.48,0,0,1,.38,21.06,11.82,11.82,0,0,1,1.8,11.93C4.61,7,10.37,3,17.22,1.09,28.65-2,39.71,1.83,41.87,9.72a10.13,10.13,0,0,1,.36,3.4h0C41.83,20.21,34.76,27,25,29.69A30.13,30.13,0,0,1,17,30.79ZM25.2,2a28.31,28.31,0,0,0-7.46,1C11.4,4.74,6.09,8.45,3.54,12.92A9.91,9.91,0,0,0,2.3,20.53,9.19,9.19,0,0,0,3.45,23c3.42,5.13,12.28,7.12,21.06,4.73S39.89,19.16,40.23,13h0A8.39,8.39,0,0,0,40,10.25C38.53,5.1,32.52,2,25.2,2Z"
              />
              <g id="Group_6" data-name="Group 6">
                <path
                  class="cls-1"
                  d="M28.89,17.49A1,1,0,0,1,28,17a1,1,0,0,1,.41-1.36,3.36,3.36,0,0,0,1.87-2.27,2.53,2.53,0,0,0-.69-2.18A5.66,5.66,0,0,0,23,10.27a3.37,3.37,0,0,0-1.86,2.27,2.52,2.52,0,0,0,.69,2.18,1,1,0,0,1-1.5,1.33,4.56,4.56,0,0,1-1.16-3.86,5.37,5.37,0,0,1,2.9-3.69A7.66,7.66,0,0,1,31,9.77a4.58,4.58,0,0,1,1.22,3.92,5.36,5.36,0,0,1-2.9,3.68A1,1,0,0,1,28.89,17.49Z"
                />
                <path
                  class="cls-1"
                  d="M16.53,23.17A7.67,7.67,0,0,1,11.2,21,4.6,4.6,0,0,1,10,17.09a5.37,5.37,0,0,1,2.9-3.69,1,1,0,0,1,.94,1.77A3.38,3.38,0,0,0,12,17.44a2.52,2.52,0,0,0,.69,2.18,5.65,5.65,0,0,0,6.56.88,3.37,3.37,0,0,0,1.86-2.27,2.53,2.53,0,0,0-.69-2.18,1,1,0,0,1,1.5-1.33A4.54,4.54,0,0,1,23,18.59a5.36,5.36,0,0,1-2.9,3.68A7.71,7.71,0,0,1,16.53,23.17Z"
                />
              </g>
              <path
                class="cls-1"
                d="M30.35,11.48a1,1,0,0,1-.88-.53,1,1,0,0,1,.41-1.35l1.78-.95a1,1,0,0,1,.94,1.77l-1.78.95A1,1,0,0,1,30.35,11.48Z"
              />
              <path
                class="cls-1"
                d="M10.11,22.24a1,1,0,0,1-.47-1.88l1.78-.95a1,1,0,0,1,.94,1.77l-1.78.94A1,1,0,0,1,10.11,22.24Z"
              />
            </g>
          </g>
        </svg>
      </NavLink>

      <NavLink
        title="Proveedores"
        draggable={false}
        id="provider-module-button"
        activeClassName="on"
        className="Menu-button"
        to={`${match.url}/providers`}
      >
        <svg
          draggable={false}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 56.54 37.99"
        >
          <g id="Layer_2" data-name="Layer 2">
            <g id="Layer_1-2" data-name="Layer 1">
              <path
                class="cls-1"
                d="M43.85,15.49a1,1,0,0,1-.5-.13L31.66,8.61a1,1,0,0,1,0-1.73L43.35.13a1,1,0,0,1,1,0L56,6.88a1,1,0,0,1,0,1.73L44.35,15.36A1,1,0,0,1,43.85,15.49ZM34.16,7.75l9.69,5.59,9.69-5.59-9.69-5.6Z"
              />
              <path
                class="cls-1"
                d="M44.35,13.63l-.5-.29L32.66,6.88a1,1,0,0,0-1,0h0a1.56,1.56,0,0,0-.2.16,1.16,1.16,0,0,0-.16.21,1.6,1.6,0,0,0-.1.23.75.75,0,0,0,0,.26v5.07l2,1.15V9.48L40.3,13.6l.23.13,1.3.75,1,.59V26.25L41,25.17,39,24v2.31l2,1.16,2.3,1.32,0,0,.05,0a1,1,0,0,0,.5.14,1,1,0,0,0,1-1V14.49A1,1,0,0,0,44.35,13.63Z"
              />
              <path
                class="cls-1"
                d="M43.85,29a1,1,0,0,1-.5-.13,1,1,0,0,1-.5-.87V14.5a1,1,0,0,1,.5-.87L55,6.88a1,1,0,0,1,1,0,1,1,0,0,1,.5.87v13.5a1,1,0,0,1-.5.86L44.35,28.86A1,1,0,0,1,43.85,29Zm1-13.91V26.26l9.69-5.59V9.48Z"
              />
              <path
                class="cls-1"
                d="M12.69,15.51a1,1,0,0,1-.5-.14L.5,8.63a1,1,0,0,1,0-1.74L12.19.15a1,1,0,0,1,1,0L24.87,6.89a1,1,0,0,1,0,1.74L13.19,15.37A1,1,0,0,1,12.69,15.51ZM3,7.76l9.69,5.59,9.68-5.59L12.69,2.17Z"
              />
              <path
                class="cls-1"
                d="M12.69,29a1,1,0,0,1-.5-.13L.5,22.12a1,1,0,0,1-.5-.86V7.76a1,1,0,0,1,.5-.87,1,1,0,0,1,1,0l11.69,6.75a1,1,0,0,1,.5.87V28a1,1,0,0,1-1,1ZM2,20.68l9.69,5.59V15.09L2,9.49Z"
              />
              <path
                class="cls-1"
                d="M25.29,7.37a.7.7,0,0,0-.09-.17,1.58,1.58,0,0,0-.12-.15.83.83,0,0,0-.21-.16,1,1,0,0,0-1,0l-1.5.87-9.68,5.59-.5.29a1,1,0,0,0-.5.86V28a1,1,0,0,0,.45.83h0s0,0,0,0a0,0,0,0,0,0,0,1,1,0,0,0,.5.13A.78.78,0,0,0,13,29a1.17,1.17,0,0,0,.24-.09l2.41-1.39,2-1.16V24l-2,1.16-1.91,1.1V15.08l9.68-5.59V14l2-1.16V7.76A1,1,0,0,0,25.29,7.37Z"
              />
              <path
                class="cls-1"
                d="M32.18,22.4l-.52-.3a1,1,0,0,1-.5-.86v-.56l-2.87,1.66.5.29a1,1,0,0,1,.5.86v.58Zm-6.81-1.74v.6a1,1,0,0,1-.5.86l-.48.28,2.9,1.67V23.5a1,1,0,0,1,.5-.87l.5-.29Zm6.81,1.74-.52-.3a1,1,0,0,1-.5-.86v-.56l-2.87,1.66.5.29a1,1,0,0,1,.5.86v.58Zm-6.81-1.74v.6a1,1,0,0,1-.5.86l-.48.28,2.9,1.67V23.5a1,1,0,0,1,.5-.87l.5-.29Zm15.1-4.78-7.31-4.22-2-1.16L28.79,9.13a1,1,0,0,0-1,0l-2.42,1.4-2,1.15-7.27,4.2a1,1,0,0,0,0,1.73l1.5.87,4.79,2.76,1-.56V19.5L18.6,16.74,23.37,14l2-1.16,2.92-1.68,2.87,1.66,2,1.15L38,16.74l-4.81,2.78v1.14l1,.59L39,18.48l1.5-.87a1,1,0,0,0,0-1.73Zm-9.31,5.36v-.56l-2.87,1.66-2.92-1.68v.6a1,1,0,0,1-.5.86l-.48.28,2.9,1.67.5.29a1,1,0,0,0,.5.13,1,1,0,0,0,.5-.13l.5-.29,2.89-1.67-.52-.3A1,1,0,0,1,31.16,21.24Zm-5.79-.58v.6a1,1,0,0,1-.5.86l-.48.28,2.9,1.67V23.5a1,1,0,0,1,.5-.87l.5-.29Zm6.81,1.74-.52-.3a1,1,0,0,1-.5-.86v-.56l-2.87,1.66.5.29a1,1,0,0,1,.5.86v.58Zm-6.81-1.74v.6a1,1,0,0,1-.5.86l-.48.28,2.9,1.67V23.5a1,1,0,0,1,.5-.87l.5-.29Zm6.81,1.74-.52-.3a1,1,0,0,1-.5-.86v-.56l-2.87,1.66.5.29a1,1,0,0,1,.5.86v.58Z"
              />
              <path
                class="cls-1"
                d="M28.79,22.63l-.5-.29-2.92-1.68v.6a1,1,0,0,1-.5.86l-.48.28,2.9,1.67V35.25L17.6,29.66V18.48l4.79,2.76,1-.56V19.5L18.6,16.74l-1.5-.86a1,1,0,0,0-1.5.86v13.5a1,1,0,0,0,.5.86l11.63,6.71h0l.05,0a1,1,0,0,0,.5.14,1,1,0,0,0,.5-.14,1,1,0,0,0,.5-.86V23.49A1,1,0,0,0,28.79,22.63Z"
              />
              <path
                class="cls-1"
                d="M25.37,20.65v.61a1,1,0,0,1-.5.86l-.48.28-2-1.16,1-.56V19.5Z"
              />
              <path
                class="cls-1"
                d="M40.47,15.88a1,1,0,0,0-1,0l-1.5.86-4.81,2.78v1.14l1,.59L39,18.48V29.67l-9.68,5.59V24.07l2.89-1.67-.52-.3a1,1,0,0,1-.5-.86v-.56l-2.87,1.66-.5.29a1,1,0,0,0-.5.87V37a1,1,0,0,0,.44.82h0a.1.1,0,0,0,.05,0,1,1,0,0,0,.5.13,1,1,0,0,0,.5-.13l11.68-6.75a1,1,0,0,0,.5-.87V16.74A1,1,0,0,0,40.47,15.88Z"
              />
              <path
                class="cls-1"
                d="M34.18,21.25l-2,1.15-.52-.3a1,1,0,0,1-.5-.86v-.56l2-1.15v1.13Z"
              />
            </g>
          </g>
        </svg>
      </NavLink>

      <NavLink
        title="Clientes"
        draggable={false}
        id="client-module-button"
        activeClassName="on"
        className="Menu-button"
        to={`${match.url}/clients`}
      >
        <svg
          draggable={false}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 56 29.64"
        >
          <g id="Layer_2" data-name="Layer 2">
            <g id="Layer_1-2" data-name="Layer 1">
              <g id="Group_194" data-name="Group 194">
                <path
                  id="Path_73"
                  data-name="Path 73"
                  class="cls-1"
                  d="M23.08,4.92A4.92,4.92,0,1,0,28,0h0A4.92,4.92,0,0,0,23.08,4.92Z"
                />
                <path
                  id="Path_74"
                  data-name="Path 74"
                  class="cls-1"
                  d="M28,13.13A9.84,9.84,0,0,0,18.16,23v6.67H37.84V23A9.84,9.84,0,0,0,28,13.13Z"
                />
                <path
                  id="Path_75"
                  data-name="Path 75"
                  class="cls-1"
                  d="M14.87,8.2A4.92,4.92,0,1,0,10,13.12h0A4.92,4.92,0,0,0,14.87,8.2Z"
                />
                <path
                  id="Path_76"
                  data-name="Path 76"
                  class="cls-1"
                  d="M51,8.2a4.93,4.93,0,1,0-4.92,4.92h0A4.93,4.93,0,0,0,51,8.2Z"
                />
                <path
                  id="Path_80"
                  data-name="Path 80"
                  class="cls-1"
                  d="M46.05,16.41a9.72,9.72,0,0,0-5.81,1.93A13,13,0,0,1,41.12,23v6.67H56V26.25A9.93,9.93,0,0,0,46.05,16.41Z"
                />
                <path
                  id="Path_81"
                  data-name="Path 81"
                  class="cls-1"
                  d="M0,26.25v3.39H14.88V23a13,13,0,0,1,.88-4.63A9.72,9.72,0,0,0,10,16.41,9.93,9.93,0,0,0,0,26.25Z"
                />
              </g>
            </g>
          </g>
        </svg>
      </NavLink>

      <NavLink
        title="Permisos"
        draggable={false}
        id="permission-module-button"
        activeClassName="on"
        className="Menu-button"
        to={`${match.url}/permissions`}
      >
        <svg
          draggable={false}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 37.12 37.13"
        >
          <g id="Layer_2" data-name="Layer 2">
            <g id="Layer_1-2" data-name="Layer 1">
              <g id="hotel">
                <path
                  id="Path_31"
                  data-name="Path 31"
                  class="cls-1"
                  d="M18.14,17.79,8.06,27.87a.84.84,0,0,0,1.19,1.19h0L19.33,19a.84.84,0,1,0-1.19-1.19Z"
                />
                <path
                  id="Path_32"
                  data-name="Path 32"
                  class="cls-1"
                  d="M33.86,3.26A11.12,11.12,0,0,0,15.8,15.54L.26,31.09a.82.82,0,0,0-.25.59V36.3H0a.84.84,0,0,0,.82.82H9.76a.85.85,0,0,0,.84-.84h0v-3.5h3.5a.85.85,0,0,0,.84-.84h0v-3.5h3.5a.85.85,0,0,0,.84-.84h0v-4l2.29-2.3A11.12,11.12,0,0,0,33.86,3.26ZM32.68,17.79a9.42,9.42,0,0,1-10.9,1.77.85.85,0,0,0-1,.16l-3,3a.82.82,0,0,0-.25.59v3.5H14.1a.85.85,0,0,0-.84.84h0v3.5H9.76a.85.85,0,0,0-.84.84h0v3.5h-6l4-4a.84.84,0,0,0,0-1.19.83.83,0,0,0-1.18,0l-4,4V32L17.4,16.32a.84.84,0,0,0,.16-1,9.44,9.44,0,1,1,15.11,2.44Z"
                />
                <path
                  id="Path_33"
                  data-name="Path 33"
                  class="cls-1"
                  d="M25.48,6.06h0a3.95,3.95,0,1,0,5.58,0A3.95,3.95,0,0,0,25.48,6.06Zm4.4,4.4a2.27,2.27,0,1,1-3.21-3.21h0a2.27,2.27,0,0,1,3.21,3.21Z"
                />
              </g>
            </g>
          </g>
        </svg>
      </NavLink>
    </div>
  );
}

export default Menu;
