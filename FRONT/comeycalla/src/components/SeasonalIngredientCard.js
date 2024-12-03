// src/components/SeasonalIngredientsCard.js
import React, { useEffect, useState } from "react";

function SeasonalIngredientsCard() {
    const [seasonalIngredients, setSeasonalIngredients] = useState([]); // Estado para guardar los ingredientes
    const [loading, setLoading] = useState(true); // Estado para manejar el cargando
    const [error, setError] = useState(null); // Estado para manejar errores

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
                setSeasonalIngredients(data); // Guarda los datos en el estado
                setLoading(false); // Desactiva el estado de cargando
            })
            .catch((err) => {
                setError(err.message); // Guarda el error
                setLoading(false); // Desactiva el estado de cargando
            });
    }, []); // Ejecuta solo una vez al montar el componente

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
                        <li key={ingredient.id}>{ingredient.name}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default SeasonalIngredientsCard;
