import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreateRecipe from "./pages/CreateRecipe";
import AddIngredients from "./pages/AddIngredient";
import CreateMenu from "./pages/CreateMenu";
import Catalog from "./pages/Catalog";


function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/create-recipe" element={<CreateRecipe />} />
      <Route path="/add-ingredients" element={<AddIngredients />} />
      <Route path="/create-menu" element={<CreateMenu />} />
      <Route path="/catalog" element={<Catalog />} />
    </Routes>
  );
}

export default App;
