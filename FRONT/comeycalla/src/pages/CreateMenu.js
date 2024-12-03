import React, { useState } from "react";
import Navbar from "../components/Navbar";
import SeasonalIngredientsCard from "../components/SeasonalIngredientCard";
import GenerateMenuButton from "../components/GenerateMenuButton";
import Table from "../components/Table";
import TableRow from "../components/TableRow";

function CreateMenu() {
    const [menu, setMenu] = useState([]);

    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    const seasonalIngredients = ["Tomatoes", "Basil", "Pumpkin"]; // Replace with dynamic data
    const recipes = ["Spaghetti", "Tacos", "Salad", "Soup", "Pizza"]; // Replace with dynamic data

    const generateMenu = () => {
        const newMenu = days.map((day) => {
            return {
                day,
                lunch: recipes[Math.floor(Math.random() * recipes.length)],
                dinner: recipes[Math.floor(Math.random() * recipes.length)],
            };
        });
        setMenu(newMenu);
    };

    return (
        <div>
            <Navbar />
            <h1>Create Weekly Menu</h1>
            <GenerateMenuButton onClick={generateMenu} />

            {menu.length > 0 && (
                <Table>
                    <thead>
                        <tr>
                            <th>Day</th>
                            <th>Lunch</th>
                            <th>Dinner</th>
                        </tr>
                    </thead>
                    <tbody>
                        {menu.map((entry, index) => (
                            <TableRow key={index} row={entry} />
                        ))}
                    </tbody>
                </Table>
            )}

            <SeasonalIngredientsCard />
        </div>
    );
}

export default CreateMenu;