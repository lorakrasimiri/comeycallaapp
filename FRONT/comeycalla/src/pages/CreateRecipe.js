// src/pages/CreateRecipe.js
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import SeasonalIngredientsCard from "../components/SeasonalIngredientCard";
import RecipeCarousel from "../components/RecipeCarousel";

import axios from "axios";

/*const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post("https://api.example.com/recipes", recipe);
        console.log("Recipe saved:", response.data);
    } catch (error) {
        console.error("Error saving recipe:", error);
    }
};*/


function CreateRecipe() {
    const [recipe, setRecipe] = useState({
        name: "",
        description: "",
        time: "",
        nationality: "",
        ingredients: [],
    });

    const handleChange = (e) => {
        setRecipe({ ...recipe, [e.target.name]: e.target.value });
    };

    const handleAddIngredient = (e) => {
        e.preventDefault();
        const ingredient = e.target.elements.ingredient.value;
        if (ingredient) {
            setRecipe({
                ...recipe,
                ingredients: [...recipe.ingredients, { name: ingredient, quantity: 1 }],
            });
        }
    };

    return (
        <div>
            <Navbar />
            <div className="create-recipe">
                <form>
                    <label>Name:</label>
                    <input type="text" name="name" value={recipe.name} onChange={handleChange} />

                    <label>Description:</label>
                    <textarea name="description" value={recipe.description} onChange={handleChange} />

                    <label>Time (in minutes):</label>
                    <input type="number" name="time" value={recipe.time} onChange={handleChange} />

                    <label>Nationality:</label>
                    <input type="text" name="nationality" value={recipe.nationality} onChange={handleChange} />

                    <label>Add Ingredients:</label>
                    <form onSubmit={handleAddIngredient}>
                        <input type="text" name="ingredient" placeholder="Ingredient name" />
                        <button type="submit">Add Ingredient</button>
                    </form>

                    <ul>
                        {recipe.ingredients.map((ing, index) => (
                            <li key={index}>{ing.name} - {ing.quantity}</li>
                        ))}
                    </ul>

                    <button type="submit">Save Recipe</button>
                </form>

                <aside>
                    <SeasonalIngredientsCard />
                    <RecipeCarousel />
                </aside>
            </div>
        </div>
    );
}

export default CreateRecipe;
