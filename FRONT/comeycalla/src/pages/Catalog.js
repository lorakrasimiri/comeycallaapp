import React, { useEffect, useState } from "react";
import {getRecipes} from "../api.js"
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import Table from "../components/Table";
import TableHeader from "../components/TableHeader";
import TableRow from "../components/TableRow";


function Catalog() {
    const [recipes, setRecipes] = useState([
        { name: "Spaghetti", time: 30, nationality: "Italian" },
        { name: "Tacos", time: 20, nationality: "Mexican" },
        { name: "Sushi", time: 50, nationality: "Japanese" },
    ]);

    const [search, setSearch] = useState("");
    const [sortField, setSortField] = useState("");

    const handleSearch = (query) => {
        setSearch(query.toLowerCase());
    };

    const handleSort = (field) => {
        const sortedRecipes = [...recipes].sort((a, b) =>
            a[field] < b[field] ? -1 : a[field] > b[field] ? 1 : 0
        );
        setRecipes(sortedRecipes);
        setSortField(field);
    };

    const filteredRecipes = recipes.filter(
        (recipe) =>
            recipe.name.toLowerCase().includes(search) ||
            recipe.nationality.toLowerCase().includes(search) ||
            recipe.time.toString().includes(search)
    );

    return (
        <div>
            <Navbar />
            <h1>Catalog of Recipes</h1>
            <SearchBar value={search} onChange={handleSearch} />

            <Table>
                <TableHeader
                    headers={[
                        { label: "Name", field: "name", isSorted: sortField === "name" },
                        { label: "Time (mins)", field: "time", isSorted: sortField === "time" },
                        { label: "Nationality", field: "nationality", isSorted: sortField === "nationality" },
                    ]}
                    onSort={handleSort}
                />
                <tbody>
                    {filteredRecipes.map((recipe, index) => (
                        <TableRow key={index} row={recipe} />
                    ))}
                </tbody>
            </Table>
        </div>
    );
}
    

/*function Catalog() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const data = await getRecipes();
                setRecipes(data);
            } catch (error) {
                console.error("Error fetching recipes:", error);
            }
        };

        fetchRecipes();
    }, []);

    return (
        <div>
            <h1>Catalog of Recipes</h1>
            <ul>
                {recipes.map((recipe, index) => (
                    <li key={index}>{recipe}</li>
                ))}
            </ul>
        </div>
    );
}*/

export default Catalog;