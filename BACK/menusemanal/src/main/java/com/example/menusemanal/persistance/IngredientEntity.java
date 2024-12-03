package com.example.menusemanal.persistance;


import jakarta.persistence.*;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@RequiredArgsConstructor
@Entity
@Table(name = "ingredient")
public class IngredientEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false)
    private String name;

    @Column
    private String img;

   /* @OneToMany(mappedBy = "ingredientEntity", cascade = CascadeType.ALL)
    private List<RecipeHasIngredient> recipes;*/

}
