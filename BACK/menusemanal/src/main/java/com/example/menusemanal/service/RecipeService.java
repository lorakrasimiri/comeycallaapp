package com.example.menusemanal.service;

import com.example.menusemanal.controller.dto.RecipeDTO;
import com.example.menusemanal.persistance.RecipeEntity;

import java.util.List;
import java.util.Map;

public interface RecipeService {

    public RecipeDTO crear(RecipeDTO recipe);

    public List<RecipeEntity> getAllRecetas();

    public List<RecipeEntity> getRandomRecetas(int count);

    public Map<String, Integer> getListaCompra(List<RecipeEntity> recipeEntities);
}
