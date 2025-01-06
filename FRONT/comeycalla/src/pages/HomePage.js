import React from "react";
import PageLayout from "../components/PageLayout";
import Navbar from "../components/Navbar";


const HomePage = () => {
    // Simulación de una receta sugerida al azar
    const randomRecipe = {
        title: "Smoothie de Fresa",
        image: "/images/smoothie.jpg",
        ingredients: ["Fresas", "Plátano", "Leche"],
        instructions:
            "Mezcla las fresas, el plátano y la leche en una licuadora. Sirve frío.",
    };

    return (
        <div>
            <Navbar />
            <PageLayout>

                {/* Contenido de la tarjeta grande */}
                <div>
                    <h2 className="text-primary">{randomRecipe.title}</h2>
                    <img
                        src={randomRecipe.image}
                        alt={randomRecipe.title}
                        className="img-fluid rounded mb-3"
                    />
                    <h4>Ingredientes:</h4>
                    <ul>
                        {randomRecipe.ingredients.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                        ))}
                    </ul>
                    <h4>Instrucciones:</h4>
                    <p>{randomRecipe.instructions}</p>
                </div>
            </PageLayout>
        </div>
    );
};
export default HomePage;
