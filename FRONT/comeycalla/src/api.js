import axios from "axios";

const API_BASE_URL = "http://localhost:8080/api"; // URL base del backend

export const getRecipes = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/recipes`);
        return response.data;
    } catch (error) {
        console.error("Error fetching recipes:", error);
        throw error;
    }
};
