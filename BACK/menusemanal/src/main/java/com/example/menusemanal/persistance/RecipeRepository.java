package com.example.menusemanal.persistance;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;


@Repository
public interface RecipeRepository extends JpaRepository<RecipeEntity, Integer> {

    @Query(value = "SELECT * FROM recipe ORDER BY RAND() LIMIT 1", nativeQuery = true)
    Optional<RecipeEntity> findRandomRecipe();
}
