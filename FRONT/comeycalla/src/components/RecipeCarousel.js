import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function RecipeCarousel() {
    // Datos de prueba para simular la respuesta del backend
    const recipes = [
        {
            id: 1,
            img: "https://img.freepik.com/free-photo/salmon-poke-bowl-flat-lay-photography_53876-108183.jpg?t=st=1736185878~exp=1736189478~hmac=0f2ce9ffdfef1c9c1f2f3f325804f364df332078645a4b36a1686fec41f0b00c&w=740",
            title: "Spaghetti",
        },
        {
            id: 2,
            img: "https://img.freepik.com/free-photo/salmon-poke-bowl-flat-lay-photography_53876-108183.jpg?t=st=1736185878~exp=1736189478~hmac=0f2ce9ffdfef1c9c1f2f3f325804f364df332078645a4b36a1686fec41f0b00c&w=740",
            title: "Tacos",
        },
        {
            id: 3,
            img: "https://img.freepik.com/free-photo/salmon-poke-bowl-flat-lay-photography_53876-108183.jpg?t=st=1736185878~exp=1736189478~hmac=0f2ce9ffdfef1c9c1f2f3f325804f364df332078645a4b36a1686fec41f0b00c&w=740",
            title: "Salad",
        },
        {
            id: 4,
            img: "https://img.freepik.com/free-photo/salmon-poke-bowl-flat-lay-photography_53876-108183.jpg?t=st=1736185878~exp=1736189478~hmac=0f2ce9ffdfef1c9c1f2f3f325804f364df332078645a4b36a1686fec41f0b00c&w=740",
            title: "Burger",
        },
    ];

    // Configuración del carrusel
    const settings = {
        dots: true, // Muestra los puntos de navegación
        infinite: true, // Ciclo infinito
        speed: 1000, // Velocidad de transición
        slidesToShow: 1, // Muestra dos recetas por vez
        slidesToScroll: 1, // Se mueve una receta por vez
        autoplay: true, // Activar desplazamiento automático
        autoplaySpeed: 3000, // Velocidad del desplazamiento automático
        responsive: [
            {
                breakpoint: 768, // En dispositivos pequeños
                settings: {
                    slidesToShow: 1, // Muestra una receta por vez
                },
            },
        ],
    };

    return (
        <div className="row banner-content p-5">
            <h3 className="mb-4 text-center">Recomended recipes</h3>
            <Slider {...settings} className="carousel">
                {recipes.map((recipe) => (
                    <div key={recipe.id} className="carousel-item text-center">
                        <div
                            className="d-flex flex-column align-items-center"
                            style={{ minHeight: "300px" }} // Altura mínima para centrar
                        >
                            <img
                                src={recipe.img}
                                alt={recipe.title}
                                className="img-fluid rounded mb-3"
                                style={{
                                    maxHeight: "200px",
                                    objectFit: "cover",
                                }}
                            />
                            <h5>{recipe.title}</h5>
                        </div>
                    </div>
                ))}
            </Slider>

        </div>
        
    );
}

export default RecipeCarousel;
