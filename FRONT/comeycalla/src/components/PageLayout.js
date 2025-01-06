import React from "react";
import SeasonalIngredientCard from "../components/SeasonalIngredientCard";
import RecipeCarousel from "../components/RecipeCarousel";

const PageLayout = ({ children }) => {
    return (
        <section className="py-3">
            <div className="container-fluid">
                <div className="row">
                    {/* Contenedor principal de las tarjetas */}
                    <div className="banner-blocks">
                        {/* Tarjeta grande */}
                        <div className="banner-ad large bg-light block-1 p-4 shadow-sm">
                            {children}
                        </div>

                        {/* Tarjeta verde (Ingredientes de temporada) */}
                        <div className="banner-ad block-2 bg-success-subtle shadow-sm">
                            <SeasonalIngredientCard />
                        </div>

                        {/* Tarjeta rosa (Carrusel de recetas sugeridas) */}
                        <div className="banner-ad block-3 bg-danger shadow-sm">
                            <RecipeCarousel />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PageLayout;
