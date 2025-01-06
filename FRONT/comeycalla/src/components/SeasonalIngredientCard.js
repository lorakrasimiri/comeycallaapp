import React, { useEffect, useState } from "react";

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
        <div className="row banner-content p-5">
            <div className="col-12 text-center">
                <h3 className="mb-4">Seasonal Ingredients</h3>
                {seasonalIngredients.length === 0 ? (
                    <p className="text-center text-muted">No seasonal ingredients available.</p>
                ) : (
                    <ul className="list-unstyled row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">
                        {seasonalIngredients.map((ingredient, index) => (
                            <li
                                key={`${ingredient.id}-${index}`}
                                className="col text-center">
                                <img
                                    src={ingredient.img}
                                    alt={ingredient.name}
                                    className="img-fluid rounded-circle mb-2"
                                />
                                <span>{ingredient.name}</span>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );

}




//HARDCODEADO PARA PROBAR

/* const [seasonalIngredients] = useState([
    { id: 1, name: "Tomato", img: "https://via.placeholder.com/80" },
    { id: 2, name: "Cucumber", img: "https://via.placeholder.com/80" },
    { id: 3, name: "Pumpkin", img: "https://via.placeholder.com/80" },
]);*/
/* return (
     <div
         className="banner-ad bg-success-subtle block-2"
         style={{
             backgroundImage: "url('images/ad-image-1.png')",
             backgroundRepeat: "no-repeat",
             backgroundPosition: "right bottom",
         }}
     >
         <div className="row banner-content p-5">
             <div className="col-12">
                 <h3 className="text-center">Seasonal Ingredients</h3>
                 {seasonalIngredients.length === 0 ? (
                     <p className="text-center text-muted">No seasonal ingredients available.</p>
                 ) : (
                     <ul className="list-unstyled d-flex flex-wrap justify-content-center mt-4">
                         {seasonalIngredients.map((ingredient) => (
                             <li
                                 key={ingredient.id}
                                 className="ingredient-item d-flex flex-column align-items-center m-3"
                             >
                                 <img
                                     src={ingredient.img}
                                     alt={ingredient.name}
                                     className="ingredient-image rounded-circle mb-2"
                                     style={{ width: "80px", height: "80px", objectFit: "cover" }}
                                 />
                                 <span className="text-center">{ingredient.name}</span>
                             </li>
                         ))}
                     </ul>
                 )}
             </div>
         </div>
     </div>

 );
 */

export default SeasonalIngredientsCard;
