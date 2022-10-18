package com.ggulling.farm;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface FarmRepository extends JpaRepository<Farm, Long> {
    Optional<Farm> findByFarmName(String nickname);

    Optional<Farm> findByIdAndShareTrue(Long id);

    @Query(value = "SELECT *," +
            "       (6371 * acos(cos(radians(:latitude)) * cos(radians(latitude)) * cos(radians(longitude) " +
            "           - radians(:longitude)) + sin(radians(:latitude)) * sin(radians(latitude)))) AS distance " +
            "FROM farm " +
            "WHERE share = 1 " +
            "HAVING distance <= :km " +
            "ORDER BY distance;"
            , nativeQuery = true)
    List<Farm> findFarmByRadius(double latitude, double longitude, int km);
}
