package com.example.menusemanal.controller.dto;


import jakarta.persistence.Id;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@RequiredArgsConstructor
public class IngredientDTO {

    @Id
    private Integer id;
    private String name;
   // private List<String> seasons;
}
