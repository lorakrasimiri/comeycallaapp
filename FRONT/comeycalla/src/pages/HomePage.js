import React, { useEffect, useState } from "react";
import PageLayout from "../components/PageLayout";
import Navbar from "../components/Navbar";
import axios from "axios"; // Asegúrate de tener axios instalado o usa fetch

const HomePage = () => {
    const [recipe, setRecipe] = useState(null); // Estado para la receta
    const [loading, setLoading] = useState(true); // Estado para manejar la carga
    const [error, setError] = useState(null); // Estado para manejar errores

    useEffect(() => {
        // Función para obtener la receta aleatoria
        const fetchRandomRecipe = async () => {
            try {
                const response = await axios.get("http://localhost:8080/api/random-recipe");
                setRecipe(response.data); // Actualiza el estado con la receta recibida
            } catch (err) {
                setError("Error fetching the recipe");
                console.error(err);
            } finally {
                setLoading(false); // Finaliza la carga
            }
        };

        fetchRandomRecipe();
    }, []); // El efecto solo se ejecuta una vez al cargar el componente

    return (
        <div>
            <Navbar />
            <PageLayout>
                {/* Contenido de la tarjeta grande */}
                <div>
                    {loading ? (
                        <p>Cargando receta...</p>
                    ) : error ? (
                        <p className="text-danger">{error}</p>
                    ) : (
                        <>
                            <h2 className="text-primary">{recipe.name}</h2>
                            <img
                                src={recipe.img || "/images/default-recipe.jpg"} // Imagen predeterminada si no hay imagen
                                alt={recipe.name}
                                className="img-fluid rounded mb-3"
                            />
                            <h4>Descripción:</h4>
                            <p>{recipe.description}</p>
                            <h4>Tiempo de preparación:</h4>
                            <p>{recipe.time} minutos</p>
                            <h4>Nacionalidad:</h4>
                            <p>{recipe.nationality}</p>
                            <h4>Ingredientes:</h4>
                            <ul>
                                {recipe.ingredients ? (
                                    recipe.ingredients.map((ingredient, index) => (
                                        <li key={index}>{ingredient}</li>
                                    ))
                                ) : (
                                    <p>No se encontraron ingredientes.</p>
                                )}
                            </ul>
                        </>
                    )}
                </div>
            </PageLayout>
        </div>
    );
};

export default HomePage;
