package com.example.menusemanal.controller.mapper;

import com.example.menusemanal.controller.dto.IngredientDTO;
import com.example.menusemanal.controller.dto.RecipeDTO;
import com.example.menusemanal.persistance.IngredientEntity;
import com.example.menusemanal.persistance.RecipeEntity;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface RecipeMapper {

    @Mapping(target = "ingredients", ignore = true)
    RecipeDTO toDTO(RecipeEntity recipeEntity);

    @Mapping(target = "ingredients", ignore = true)
    RecipeEntity toEntity(RecipeDTO recipeDTO);
}
