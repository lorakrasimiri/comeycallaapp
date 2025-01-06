package com.example.menusemanal.controller;


import com.example.menusemanal.controller.dto.IngredientDTO;
import com.example.menusemanal.controller.dto.RecipeDTO;
import com.example.menusemanal.persistance.IngredientEntity;
import com.example.menusemanal.persistance.RecipeEntity;
import com.example.menusemanal.service.RecipeService;
import com.example.menusemanal.service.IngredientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class RecipeRestController {

    @Autowired
    private RecipeService recipeService;

    @Autowired
    private IngredientService ingredientService;

    @PostMapping("/crear")
    public RecipeDTO crear(@ModelAttribute("receta") RecipeDTO recipe) {
        // Lógica para guardar la receta en la base de datos usando recetaService

        return null;
    }

    @GetMapping("/recipes")
    public List<String> getRecipes() {
        return List.of("Spaghetti", "Tacos", "Salad"); // Ejemplo de datos
    }

    @GetMapping("/recetas")
    public List<RecipeEntity> getAllRecetas() {
        return this.recipeService.getAllRecetas();
    }

    @GetMapping("/menu-semanal")
    public List<RecipeEntity> getMenuSemanal() {
        return this.recipeService.getRandomRecetas(14); // 7 días, 2 comidas al día
    }

    @GetMapping("/lista-compra")
    public Map<String, Integer> getListaCompra() {
        List<RecipeEntity> recipeEntities = recipeService.getRandomRecetas(14);

        return this.recipeService.getListaCompra(recipeEntities);
    }


    @GetMapping("/ingredientes")
    @ResponseBody
    public List<IngredientEntity> listarIngredientes() {
        return ingredientService.obtenerIngredientes();
    }

    @GetMapping("/seasonal-ingredients")
    @ResponseBody
    public ResponseEntity<List<IngredientDTO>> getSeasonalIngredients() {
        List<IngredientDTO> ingredients = ingredientService.getSeasonalIngredients();
        return ResponseEntity.ok(ingredients);
    }


    @GetMapping("/random-recipe")
    @ResponseBody
    public ResponseEntity<RecipeDTO> getRandomRecipe() {
        RecipeDTO recipe = this.recipeService.getRandomRecipe();
        return ResponseEntity.ok(recipe);
    }
}
