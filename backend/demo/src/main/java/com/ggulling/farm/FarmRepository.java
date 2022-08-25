package com.ggulling.farm;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface FarmRepository extends JpaRepository<Farm, Long> {
    Optional<Farm> findByFarmName(String nickname);

    Optional<Farm> findByIdAndIsActiveTrue(Long id);

    @Query(value = "SELECT *, (6371 * acos(cos(radians(37.4685225))*cos(radians(P_LAT))*cos(radians(P_LON)-radians(126,8943311)+sin(radians(37.4685225))*sin(radians(P_LAT)))) AS distance " +
            "FROM FARM " +
            "WHERE share = 'TRUE'" +
            "HAVING distance <= 0.3 " +
            "ORDER BY distance "
            , nativeQuery = true)
    List<Farm> findFarmByRadius(double latitude, double longitude, int km);
}
