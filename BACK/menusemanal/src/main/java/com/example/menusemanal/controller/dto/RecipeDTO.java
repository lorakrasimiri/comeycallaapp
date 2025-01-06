package com.example.menusemanal.controller.dto;


import jakarta.persistence.Id;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@RequiredArgsConstructor
public class RecipeDTO {

    @Id
    private Integer id;

    private String name;
    private String description;
    private int time;
    private String nationality;
    private String img;

    private List<IngredientDTO> ingredients;

}
