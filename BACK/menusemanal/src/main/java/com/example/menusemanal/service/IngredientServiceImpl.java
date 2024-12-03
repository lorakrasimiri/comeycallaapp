package com.example.menusemanal.service;


import com.example.menusemanal.controller.dto.IngredientDTO;
import com.example.menusemanal.controller.mapper.IngredientMapper;
import com.example.menusemanal.persistance.IngredientEntity;
import com.example.menusemanal.persistance.IngredientRepository;
import com.example.menusemanal.persistance.SeasonHasIngredientEntity;
import com.example.menusemanal.persistance.SeasonHasIngredientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class IngredientServiceImpl implements IngredientService {

    private final IngredientMapper ingredientMapper;

    public IngredientServiceImpl(IngredientMapper ingredientMapper) {
        this.ingredientMapper = ingredientMapper;
    }

    @Autowired
    private IngredientRepository ingredientRepository;

    @Autowired
    private SeasonHasIngredientRepository seasonHasIngredientRepository;
    @Override
    public List<IngredientEntity> obtenerIngredientes() {
        return this.ingredientRepository.findAll();
    }

    @Override
    public IngredientEntity guardar(IngredientEntity ingredientEntity) {
        return ingredientRepository.save(ingredientEntity);
    }


    @Override
    public List<IngredientDTO> getSeasonalIngredients() {
        List<SeasonHasIngredientEntity> seasonIngredients = seasonHasIngredientRepository.findAllBySeasonId(9);

        List<IngredientEntity> ingredients = seasonIngredients.stream()
                .map(this::fetchIngredientFromSeasonHasIngredient)
                .toList();

        return ingredients.stream()
                .map(ingredientMapper::toDTO)
                .collect(Collectors.toList());
    }

    private IngredientEntity fetchIngredientFromSeasonHasIngredient(SeasonHasIngredientEntity seasonIngredient) {
        return ingredientRepository.findById(seasonIngredient.getIngredientId())
                .orElseThrow(() -> new IllegalArgumentException("Ingredient not found with id: " + seasonIngredient.getIngredientId()));
    }

}
