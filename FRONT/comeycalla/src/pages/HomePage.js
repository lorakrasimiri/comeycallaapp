// src/pages/HomePage.js
import React from "react";
import Navbar from "../components/Navbar";

function HomePage() {
    return (
        <div>
            <Navbar />
            <header className="homepage-header">
                <h1>Welcome to My Daily Tool</h1>
                <p>Your personal assistant for creating weekly menus from your favorite recipes!</p>
            </header>
        </div>
    );
}

export default HomePage;
