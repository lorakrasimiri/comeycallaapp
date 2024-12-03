// src/components/SeasonalIngredientsCard.js
import React from "react";

function SeasonalIngredientsCard() {
    //TODO: Replace with dynamic data later.

    const seasonalIngredients = ["Tomatoes", "Cucumbers", "Basil"]; 
    return (
        <div className="seasonal-card">
            <h3>Seasonal Ingredients</h3>
            <ul>
                {seasonalIngredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
        </div>
    );
}

export default SeasonalIngredientsCard;
