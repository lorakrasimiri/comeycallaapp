package com.example.menusemanal.service;

import com.example.menusemanal.controller.dto.RecipeDTO;
import com.example.menusemanal.persistance.Recipe;

import java.util.List;
import java.util.Map;

public interface RecipeService {

    public RecipeDTO crear(RecipeDTO recipe);

    public List<Recipe> getAllRecetas();

    public List<Recipe> getRandomRecetas(int count);

    public Map<String, Integer> getListaCompra(List<Recipe> recipes);
}
