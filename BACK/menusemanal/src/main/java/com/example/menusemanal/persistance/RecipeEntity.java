package com.example.menusemanal.persistance;


import jakarta.persistence.*;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@RequiredArgsConstructor
@Entity
public class RecipeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String name;
    private String description;
    private int time;
    private String nationality;
    private String img;


    @OneToMany(mappedBy = "recipeEntity", cascade = CascadeType.ALL)
    private List<RecipeHasIngredient> ingredients;


}
