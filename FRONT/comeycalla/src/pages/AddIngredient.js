// src/pages/AddIngredients.js
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import PageLayout from "../components/PageLayout";

function AddIngredient() {
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
            <PageLayout>
                    <div>
                        <h3>Añadir Ingrediente</h3>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="ingredientName" className="form-label">
                                    Nombre del Ingrediente
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="ingredientName"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="ingredientImage" className="form-label">
                                    Imagen del Ingrediente
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="ingredientImage"
                                />
                            </div>
                            <button type="submit" className="btn btn-primary">
                                Añadir
                            </button>
                        </form>
                    </div>
                </PageLayout>
        </div>
    
        )
    }
export default AddIngredient;
