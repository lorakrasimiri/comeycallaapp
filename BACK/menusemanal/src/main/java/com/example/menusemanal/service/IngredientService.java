package com.example.menusemanal.service;

import com.example.menusemanal.controller.dto.IngredientDTO;
import com.example.menusemanal.persistance.IngredientEntity;

import java.util.List;

public interface IngredientService {

    List<IngredientEntity> obtenerIngredientes();

    IngredientEntity guardar(IngredientEntity ingredientEntity);

    List<IngredientDTO> getSeasonalIngredients();
}
