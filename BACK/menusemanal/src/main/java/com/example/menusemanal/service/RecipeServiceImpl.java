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



        RecipeEntity recipeEntity = new RecipeEntity();
        recipeEntity.setId(recipeDTO.getId());
        recipeEntity.setNombre(recipeDTO.getName());
        recipeEntity.setDescripcion(recipeDTO.getDescription());
        recipeEntity.setTiempo(recipeDTO.getTime());
        recipeEntity.setNacionalidad(recipeDTO.getNationality());

        this.recipeRepository.save(recipeEntity);

        return recipeEntity;

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
    public Map<String, Integer> getListaCompra(List<RecipeEntity> recipeEntities) {
        Map<String, Integer> listaCompra = new HashMap<>();
        for (RecipeEntity recipeEntity : recipeEntities) {
            for (RecipeHasIngredient ingrediente : recipeEntity.getIngredientes()) {

                listaCompra.put(ingrediente.getIngredientEntity().getNombre(), listaCompra.getOrDefault(ingrediente.getIngredientEntity().getNombre(), 0) + Integer.parseInt(ingrediente.getCantidad()));
            }
        }
        return listaCompra;
    }
}
