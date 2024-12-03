// src/pages/AddIngredients.js
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import SeasonalIngredientsCard from "../components/SeasonalIngredientCard";
import RecipeCarousel from "../components/RecipeCarousel";

function AddIngredients() {
    const [ingredient, setIngredient] = useState({ name: "", seasonMonths: "" });

    const handleChange = (e) => {
        setIngredient({ ...ingredient, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Ingredient added:", ingredient); // Replace with API call later.
    };

    return (
        <div>
            <Navbar />
            <div className="add-ingredients">
                <form onSubmit={handleSubmit}>
                    <label>Ingredient Name:</label>
                    <input type="text" name="name" value={ingredient.name} onChange={handleChange} />

                    <label>Season Months:</label>
                    <input type="text" name="seasonMonths" value={ingredient.seasonMonths} onChange={handleChange} />

                    <button type="submit">Add Ingredient</button>
                </form>

                <aside>
                    <SeasonalIngredientsCard />
                    <RecipeCarousel />
                </aside>
            </div>
        </div>
    );
}

export default AddIngredients;
