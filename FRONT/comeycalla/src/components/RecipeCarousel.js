import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function RecipeCarousel() {
    //TODO:  Replace with dynamic data later.
    const recipes = ["Spaghetti", "Tacos", "Salad"]; 

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <Slider {...settings} className="carousel">
            {recipes.map((recipe, index) => (
                <div key={index} className="carousel-item">
                    <h3>{recipe}</h3>
                </div>
            ))}
        </Slider>
    );
}

export default RecipeCarousel;
