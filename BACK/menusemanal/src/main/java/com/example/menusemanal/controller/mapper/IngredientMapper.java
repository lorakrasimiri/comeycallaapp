package com.example.menusemanal.controller.mapper;


import com.example.menusemanal.controller.dto.IngredientDTO;
import com.example.menusemanal.persistance.IngredientEntity;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface IngredientMapper {

    IngredientDTO toDTO(IngredientEntity ingredientEntity);

    IngredientEntity toEntity(IngredientDTO ingredientDTO);
}
