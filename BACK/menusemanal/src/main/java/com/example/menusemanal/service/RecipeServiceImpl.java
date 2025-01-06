package com.example.menusemanal.service;


import com.example.menusemanal.controller.dto.RecipeDTO;
import com.example.menusemanal.controller.mapper.RecipeMapper;
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

    @Autowired
    private RecipeMapper recipeMapper;

    @Override
    public RecipeDTO create(RecipeDTO recipeDTO) {
       /* if(Objects.nonNull(recipe.getIngredients())){
           this.recipeHasIngredientRepository.saveAll(recipe.getIngredients());




        RecipeEntity recipeEntity = new RecipeEntity();
        recipeEntity.setId(recipeDTO.getId());
        recipeEntity.setName(recipeDTO.getName());
        recipeEntity.setDescription(recipeDTO.getDescription());
        recipeEntity.setTime(recipeDTO.getTime());
        recipeEntity.setNationality(recipeDTO.getNationality());

        this.recipeRepository.save(recipeEntity);
*/
        return null;

    }

    @Override
    public List<RecipeEntity> getAllRecetas() {
        return recipeRepository.findAll();
    }


    @Override
    public List<RecipeEntity> getRandomRecetas(int count) {
        List<RecipeEntity> allRecipeEntities = recipeRepository.findAll();
        Random rand = new Random();
        return rand.ints(count, 0, allRecipeEntities.size())
                .mapToObj(allRecipeEntities::get)
                .collect(Collectors.toList());
    }

    @Override
    //TODO AÑADIR ERROR
    public RecipeDTO getRandomRecipe() {
        return this.recipeRepository.findRandomRecipe().map(recipeMapper::toDTO).orElse(null);
    }


    @Override
    public Map<String, Integer> getListaCompra(List<RecipeEntity> recipeEntities) {
      /*  Map<String, Integer> listaCompra = new HashMap<>();
        for (RecipeEntity recipeEntity : recipeEntities) {
            for (RecipeHasIngredient ingrediente : recipeEntity.getIngredients()) {

                listaCompra.put(ingrediente.getIngredientEntity().getName(), listaCompra.getOrDefault(ingrediente.getIngredientEntity().getName(), 0) + Integer.parseInt(ingrediente.getCantidad()));
            }
        }*/
        return null;
    }
}
