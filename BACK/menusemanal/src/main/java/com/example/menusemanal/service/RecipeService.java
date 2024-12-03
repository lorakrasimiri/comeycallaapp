package com.example.menusemanal.service;

import com.example.menusemanal.controller.dto.RecipeDTO;
import com.example.menusemanal.persistance.RecipeEntity;

import java.util.List;
import java.util.Map;

public interface RecipeService {

    RecipeDTO create(RecipeDTO recipeDTO);

    List<RecipeEntity> getAllRecetas();

     List<RecipeEntity> getRandomRecetas(int count);

     Map<String, Integer> getListaCompra(List<RecipeEntity> recipeEntities);
}
