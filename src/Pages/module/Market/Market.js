import React from "react";
import classes from "./Market.module.css";
import { NavLink, useRouteMatch, Switch, Route } from "react-router-dom";

// Modules imports
import Buy from "../Buy/Buy";

function Market() {
  let match = useRouteMatch();

  return (
    <Switch>
      <Route exact path={`${match.url}`}>
        <div className={classes.container}>
          <NavLink
            to={`${match.url}/buy`}
            className={`${classes.buttonContainer} ${classes.buttonActive}`}
          >
            <div className={classes.iconContainer} style={{ marginBottom: 20 }}>
              <div className={classes.icon}>
                <svg
                  draggable={false}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 275.22 279.91"
                >
                  <g id="Layer_2" data-name="Layer 2">
                    <g id="Layer_1-2" data-name="Layer 1">
                      <path
                        class="cls-1"
                        d="M121.81,279.91a4.43,4.43,0,0,1-2.25-.61L2.25,211.58A4.51,4.51,0,0,1,0,207.68V72.22a4.5,4.5,0,0,1,6.75-3.89l117.31,67.73a4.5,4.5,0,0,1,2.25,3.89V275.41a4.5,4.5,0,0,1-2.25,3.89A4.43,4.43,0,0,1,121.81,279.91ZM9,205.08l108.31,62.53V142.55L9,80Z"
                      />
                      <path
                        class="cls-1"
                        d="M234.62,99.65V205.08l-108.3,62.53V142.55l83.11-48L217.3,90a27.33,27.33,0,0,1-4.59-7.74l-7.66,4.42-.21.12-83,47.93h0l-2.24,1.29a4.49,4.49,0,0,0-2.25,3.9V275.41a4.48,4.48,0,0,0,2.25,3.89,4.4,4.4,0,0,0,2.25.61,4.45,4.45,0,0,0,2.25-.61l117.3-67.72a4.49,4.49,0,0,0,2.25-3.9V99.45a26.81,26.81,0,0,1-5.1.48A26.43,26.43,0,0,1,234.62,99.65Zm9-28c0-.13,0-.26-.07-.39s-.06-.24-.1-.36a1.42,1.42,0,0,0-.07-.22c-.06-.14-.12-.29-.19-.42A2.1,2.1,0,0,0,243,70h0a4.55,4.55,0,0,0-1.65-1.64,4.45,4.45,0,0,0-4.5,0L234,70l-3.9,2.24-7.76,4.49H234v3.64l.6-.34V91.56a4.5,4.5,0,0,0,8.4-2.24V76.72h.6v-4.5A3.81,3.81,0,0,0,243.58,71.63ZM212.71,82.28l-7.66,4.42-.21.12a36.53,36.53,0,0,0,4.58,7.75L217.3,90A27.33,27.33,0,0,1,212.71,82.28Zm17.41-10.06-7.76,4.49H234V70Z"
                      />
                      <path
                        class="cls-1"
                        d="M243.58,71.63c0-.13,0-.26-.07-.39s-.06-.24-.1-.36a1.42,1.42,0,0,0-.07-.22,2,2,0,0,0-.19-.42A2.1,2.1,0,0,0,243,70h0a4.55,4.55,0,0,0-1.65-1.64l-1.06-.61L234,64.09v3.63H222.35l7.77,4.49-7.76,4.49H234v3.64l.6-.34,5.71-3.3,1-.6A4.5,4.5,0,0,0,243,74.47a4.59,4.59,0,0,0,.6-2.25A3.81,3.81,0,0,0,243.58,71.63ZM171.46,38.36l9,5.19,24.37,14.08,7.87,4.54a27.33,27.33,0,0,1,4.59-7.74l-7.88-4.55L182.73,34.47l-.14-.07L124.06.6a4.52,4.52,0,0,0-4.5,0L2.25,68.33a4.5,4.5,0,0,0,0,7.79L9,80l51.94,30,56.37,32.55,2.25,1.3a4.52,4.52,0,0,0,4.5,0l2.25-1.3,83.11-48L217.3,90a27.33,27.33,0,0,1-4.59-7.74h0l-7.66,4.43-.21.12-83,47.93L72.17,106.09h0l-9-5.2h0L13.5,72.22,121.81,9.69Zm38,56.21a36.53,36.53,0,0,1-4.58-7.75l-83,47.93L72.17,106.09h0L65.41,110a4.49,4.49,0,0,1-2.25.6,4.44,4.44,0,0,1-2.22-.59l56.37,32.55V140a4.49,4.49,0,0,1,2.25-3.9l2.24-1.29,2.26,1.3a4.5,4.5,0,0,1,2.25,3.89v2.6Zm-4.37-7.87,7.66-4.42h0Z"
                      />
                      <path
                        class="cls-1"
                        d="M238.52,35.52a36.7,36.7,0,0,0-3.9,73.2,36.31,36.31,0,0,0,9-.15,36.7,36.7,0,0,0-5.1-73Zm5.1,63.93a26.81,26.81,0,0,1-5.1.48,26.43,26.43,0,0,1-3.9-.28A27.65,27.65,0,0,1,217.3,90a27.33,27.33,0,0,1-4.59-7.74h0a27.66,27.66,0,0,1,4.59-27.84,27.7,27.7,0,1,1,26.32,45Z"
                      />
                      <path
                        class="cls-1"
                        d="M243,57.6V89.32a4.5,4.5,0,0,1-9,0V57.6a4.5,4.5,0,1,1,9,0Z"
                      />
                      <path
                        class="cls-1"
                        d="M258.88,72.22a4.49,4.49,0,0,1-4.5,4.5h-32a4.5,4.5,0,0,1,0-9h32A4.5,4.5,0,0,1,258.88,72.22Z"
                      />
                      <path
                        class="cls-1"
                        d="M63.16,110.59a4.5,4.5,0,0,1-2.25-8.4l117.3-67.73a4.5,4.5,0,0,1,4.5,7.8L65.41,110A4.49,4.49,0,0,1,63.16,110.59Z"
                      />
                    </g>
                  </g>
                </svg>
              </div>
            </div>
            <div className={`${classes.descriptionContainer}`}>
              <span
                style={{ display: "block", color: "#00e6ff", fontSize: 30 }}
              >
                COMPRA
              </span>
              <span
                style={{ display: "block", marginTop: 15, color: "lightgrey" }}
              >
                Realizar una nueva compra
              </span>
            </div>
          </NavLink>

          <NavLink
            to={`${match.url}/sell`}
            className={`${classes.buttonContainer} ${classes.buttonActive}`}
          >
            <div className={classes.iconContainer}>
              <div className={classes.icon}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 306.2 203.33"
                >
                  <g id="Layer_2" data-name="Layer 2">
                    <g id="Layer_1-2" data-name="Layer 1">
                      <path
                        id="transportation"
                        class="cls-1"
                        d="M5.56,173H22.4a33.62,33.62,0,0,0,66.9,0H198.17a33.61,33.61,0,0,0,66.9,0h35.52a5.65,5.65,0,0,0,5.61-5.7h0V5.71A5.65,5.65,0,0,0,300.59,0H105.85a5.65,5.65,0,0,0-5.61,5.71v32H52.7a5.62,5.62,0,0,0-4.6,2.45L17.4,84.85,5.39,102,1,108.3a5.74,5.74,0,0,0-1,3.25v55.59a5.8,5.8,0,0,0,1.57,4.12,5.58,5.58,0,0,0,4,1.75Zm50.17,17.12a22.83,22.83,0,1,1,22.45-23.2v.37a22.92,22.92,0,0,1-22.45,23.11Zm175.77,0A22.83,22.83,0,1,1,254,166.93v.37a22.92,22.92,0,0,1-22.45,23.11ZM294.86,11.41V113.67H142.5a5.71,5.71,0,0,0,0,11.41H294.86V161.6H265a33.61,33.61,0,0,0-66.9,0H111.46V37.38H152A5.71,5.71,0,0,0,152,26H111.46V11.41ZM55.62,49.13h44.9V161.6H89.29a33.61,33.61,0,0,0-66.89,0H11.17V113.38l1.69-2.45H81.32a5.67,5.67,0,0,0,5.62-5.7V63a5.67,5.67,0,0,0-5.62-5.71H49.9ZM42,68.82H75.71V99.63h-55Z"
                      />
                    </g>
                  </g>
                </svg>
              </div>
            </div>
            <div className={`${classes.descriptionContainer}`}>
              <span
                style={{ display: "block", color: "#00e6ff", fontSize: 30 }}
              >
                VENTA
              </span>
              <span
                style={{ display: "block", marginTop: 15, color: "lightgrey" }}
              >
                Realizar una nueva venta
              </span>
            </div>
          </NavLink>
        </div>
      </Route>

      <Route exact path={`${match.url}/buy`}>
        <Buy />
      </Route>

      <Route exact path={`${match.url}/sell`}>
        <h1>venta</h1>
      </Route>
    </Switch>
  );
}

export default Market;
