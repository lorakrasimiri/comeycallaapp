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
public class Recipe {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String nombre;
    private String descripcion;
    private int tiempo; // tiempo en minutos
    private String nacionalidad;
    private String photoUrl;


    @OneToMany(mappedBy = "recipe", cascade = CascadeType.ALL)
    private List<RecipeHasIngredient> ingredientes;


}
