package com.example.menusemanal.controller;


import com.example.menusemanal.controller.dto.RecipeDTO;
import com.example.menusemanal.persistance.Ingredient;
import com.example.menusemanal.persistance.Recipe;
import com.example.menusemanal.service.RecipeService;
import com.example.menusemanal.service.IngredientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class RecipeRestController {

    @Autowired
    private RecipeService recipeService;

    @Autowired
    private IngredientService ingredienteService;

    @PostMapping("/crear")
    public RecipeDTO crear(@ModelAttribute("receta") RecipeDTO recipe) {
        // Lógica para guardar la receta en la base de datos usando recetaService
        recipeService.crear(recipe);
        return recipeService.crear(recipe);
    }

    @GetMapping("/recipes")
    public List<String> getRecipes() {
        return List.of("Spaghetti", "Tacos", "Salad"); // Ejemplo de datos
    }

    @GetMapping("/recetas")
    public List<Recipe> getAllRecetas() {
        return this.recipeService.getAllRecetas();
    }

    @GetMapping("/menu-semanal")
    public List<Recipe> getMenuSemanal() {
        return this.recipeService.getRandomRecetas(14); // 7 días, 2 comidas al día
    }

    @GetMapping("/lista-compra")
    public Map<String, Integer> getListaCompra() {
        List<Recipe> recipes = recipeService.getRandomRecetas(14);

        return this.recipeService.getListaCompra(recipes);
    }



    @GetMapping("/ingredientes")
    @ResponseBody
    public List<Ingredient> listarIngredientes() {
        return ingredienteService.obtenerIngredientes();
    }
}
