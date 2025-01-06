import React, { useState } from "react";
import Navbar from "../components/Navbar";
import PageLayout from "../components/PageLayout";


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
            <PageLayout>
                <div className="create-recipe">
                    <form>
                        {/* Campo para el nombre */}
                        <div className="mb-3">
                            <label htmlFor="recipeName" className="form-label">
                                Name:
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="recipeName"
                                className="form-control"
                                value={recipe.name}
                                onChange={handleChange}
                            />
                        </div>

                        {/* Campo para la descripción */}
                        <div className="mb-3">
                            <label htmlFor="recipeDescription" className="form-label">
                                Description:
                            </label>
                            <textarea
                                name="description"
                                id="recipeDescription"
                                className="form-control"
                                rows="3"
                                value={recipe.description}
                                onChange={handleChange}
                            ></textarea>
                        </div>

                        {/* Campo para el tiempo */}
                        <div className="mb-3">
                            <label htmlFor="recipeTime" className="form-label">
                                Time (in minutes):
                            </label>
                            <input
                                type="number"
                                name="time"
                                id="recipeTime"
                                className="form-control"
                                value={recipe.time}
                                onChange={handleChange}
                            />
                        </div>

                        {/* Campo para la nacionalidad */}
                        <div className="mb-3">
                            <label htmlFor="recipeNationality" className="form-label">
                                Nationality:
                            </label>
                            <input
                                type="text"
                                name="nationality"
                                id="recipeNationality"
                                className="form-control"
                                value={recipe.nationality}
                                onChange={handleChange}
                            />
                        </div>

                        {/* Subformulario para añadir ingredientes */}
                        <div className="mb-3">
                            <label htmlFor="addIngredient" className="form-label">
                                Add Ingredients:
                            </label>
                            <form onSubmit={handleAddIngredient} className="d-flex align-items-center">
                                <input
                                    type="text"
                                    name="ingredient"
                                    id="addIngredient"
                                    className="form-control me-2"
                                    placeholder="Ingredient name"
                                />
                                <button type="submit" className="btn btn-secondary">
                                    Add Ingredient
                                </button>
                            </form>
                        </div>

                        {/* Lista de ingredientes añadidos */}
                        <ul className="list-group mb-3">
                            {recipe.ingredients.map((ing, index) => (
                                <li key={index} className="list-group-item">
                                    {ing.name} - {ing.quantity}
                                </li>
                            ))}
                        </ul>

                        {/* Botón para guardar la receta */}
                        <button type="submit" className="btn btn-primary">
                            Save Recipe
                        </button>
                    </form>
                </div>
            </PageLayout>
            
        </div>
    );
}

export default CreateRecipe;
