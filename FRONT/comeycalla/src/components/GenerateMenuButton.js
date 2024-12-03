// src/components/GenerateMenuButton.js
import React from "react";

function GenerateMenuButton({ onClick }) {
    return (
        <button onClick={onClick} className="generate-menu-button">
            Generate Menu
        </button>
    );
}

export default GenerateMenuButton;
