package com.example.menusemanal.persistance;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SeasonHasIngredientRepository extends JpaRepository<SeasonHasIngredientEntity, Integer> {

    List<SeasonHasIngredientEntity> getBySeasonId(Integer seasonId);


}
