import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/create-recipe" className="nav-link">Create Recipe</Link>
            <Link to="/add-ingredients" className="nav-link">Add Ingredients</Link>
            <Link to="/create-menu" className="nav-link">Create Menu</Link>
            <Link to="/catalog" className="nav-link">Catalog</Link>
        </nav>
    );
}

export default Navbar;
