package com.example.menusemanal.controller.mapper;


import com.example.menusemanal.controller.dto.IngredientDTO;
import com.example.menusemanal.persistance.IngredientEntity;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface IngredientMapper {

    @Mapping(target = "seasons", ignore = true)
    IngredientDTO toDTO(IngredientEntity ingredientEntity);

    IngredientEntity toEntity(IngredientDTO ingredientDTO);
}
