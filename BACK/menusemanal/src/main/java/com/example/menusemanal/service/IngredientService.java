package com.example.menusemanal.service;

import com.example.menusemanal.persistance.Ingredient;

import java.util.List;

public interface IngredientService {

    List<Ingredient> obtenerIngredientes();

    Ingredient guardar(Ingredient ingredient);
}
