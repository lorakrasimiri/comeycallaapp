package com.example.menusemanal.service;


import com.example.menusemanal.controller.dto.RecipeDTO;
import com.example.menusemanal.persistance.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

@Service
public class RecipeServiceImpl implements RecipeService {

    @Autowired
    private RecipeRepository recipeRepository;

    @Autowired
    private RecipeHasIngredientRepository recipeHasIngredientRepository;



    @Override
    public RecipeDTO crear(RecipeDTO recipeDTO) {
       /* if(Objects.nonNull(recipe.getIngredients())){
           this.recipeHasIngredientRepository.saveAll(recipe.getIngredients());
        }*/



        Recipe recipe = new Recipe();
        recipe.setId(recipeDTO.getId());
        recipe.setNombre(recipeDTO.getName());
        recipe.setDescripcion(recipeDTO.getDescription());
        recipe.setTiempo(recipeDTO.getTime());
        recipe.setNacionalidad(recipeDTO.getNationality());

        this.recipeRepository.save(recipe);

        return recipe;

    }

    @Override
    public List<Recipe> getAllRecetas() {
        return recipeRepository.findAll();
    }


    @Override
    public List<Recipe> getRandomRecetas(int count) {
        List<Recipe> allRecipes = recipeRepository.findAll();
        Random rand = new Random();
        return rand.ints(count, 0, allRecipes.size())
                .mapToObj(allRecipes::get)
                .collect(Collectors.toList());
    }

    @Override
    public Map<String, Integer> getListaCompra(List<Recipe> recipes) {
        Map<String, Integer> listaCompra = new HashMap<>();
        for (Recipe recipe : recipes) {
            for (RecipeHasIngredient ingrediente : recipe.getIngredientes()) {

                listaCompra.put(ingrediente.getIngredient().getNombre(), listaCompra.getOrDefault(ingrediente.getIngredient().getNombre(), 0) + Integer.parseInt(ingrediente.getCantidad()));
            }
        }
        return listaCompra;
    }
}
