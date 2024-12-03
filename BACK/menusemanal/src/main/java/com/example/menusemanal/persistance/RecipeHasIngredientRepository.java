package com.example.menusemanal.persistance;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RecipeHasIngredientRepository extends JpaRepository<RecipeHasIngredient, Integer> {


}
