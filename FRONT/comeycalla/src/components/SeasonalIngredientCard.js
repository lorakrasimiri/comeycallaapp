import React, { useEffect, useState } from "react";
import "./css/SeasonalIngredientCardStyle.css";

function SeasonalIngredientsCard() {
    const [seasonalIngredients, setSeasonalIngredients] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Realiza la solicitud al backend
        fetch("http://localhost:8080/api/seasonal-ingredients")
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                setSeasonalIngredients(data); // Guarda los datos
                setLoading(false); // Finaliza el estado de carga
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="seasonal-card">
            <h3>Seasonal Ingredients</h3>
            {seasonalIngredients.length === 0 ? (
                <p>No seasonal ingredients available.</p>
            ) : (
                <ul>
                    {seasonalIngredients.map((ingredient) => (
                        <li key={ingredient.id} className="ingredient-item">
                            {/* Imagen pequeña */}
                            <img
                                src={ ingredient.img }
                                alt={ingredient.name}
                                className="ingredient-image"
                            />
                            <span>{ingredient.name}</span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default SeasonalIngredientsCard;
