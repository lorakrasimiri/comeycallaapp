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
        List<SeasonHasIngredientEntity> listOfSeasonsAndIngredients = this.seasonHasIngredientRepository.getBySeasonId(1);//(LocalDate.now().getMonthValue());

        List<IngredientEntity> ingredientEntities = listOfSeasonsAndIngredients.stream()
                .map(season -> this.ingredientRepository.findById(season.getIngredient_id())
                        .orElseThrow(() -> new IllegalArgumentException("Ingredient not found with id: " + season.getIngredient_id())))
                .toList();

        return ingredientEntities.stream()
                .map(ingredientMapper::toDTO)
                .toList();
    }
}
