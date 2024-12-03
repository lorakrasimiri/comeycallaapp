package com.example.menusemanal.service;


import com.example.menusemanal.persistance.Ingredient;
import com.example.menusemanal.persistance.IngredientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class IngredientServiceImpl implements IngredientService {

    @Autowired
    private IngredientRepository ingredientRepository;
    @Override
    public List<Ingredient> obtenerIngredientes() {
        return this.ingredientRepository.findAll();
    }

    @Override
    public Ingredient guardar(Ingredient ingredient) {
        return ingredientRepository.save(ingredient);
    }
}
