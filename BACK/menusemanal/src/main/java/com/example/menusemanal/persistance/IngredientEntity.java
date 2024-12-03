package com.example.menusemanal.persistance;


import jakarta.persistence.*;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@RequiredArgsConstructor
@Entity
public class IngredientEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

   /* @OneToMany(mappedBy = "ingredientEntity", cascade = CascadeType.ALL)
    private List<RecipeHasIngredient> recipes;*/

}
