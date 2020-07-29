import React from "react";
import "./WindowFrame.css";

function WindowFrame() {
    return (
        <div id="WindowFrame-container">
            <div id="WindowFrame-buttons-container">
                <div id="minize" className="WindowFrame-button">
                    <img
                        draggable="false"
                        alt="something"
                        src={require("../../assets/WindowFrame/minimize.svg")}
                    />
                </div>
                <div id="maximize" className="WindowFrame-button">
                    <img
                        draggable="false"
                        alt="something"
                        src={require("../../assets/WindowFrame/maximize.svg")}
                    />
                </div>
                <div id="close" className="WindowFrame-button">
                    <img
                        draggable="false"
                        alt="something"
                        src={require("../../assets/WindowFrame/close.svg")}
                    />
                </div>
            </div>
        </div>
    );
}

export default WindowFrame;
