package com.ggulling.history;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface HistoryRepository extends JpaRepository<History, Long> {
    Optional<History> findFirstByFarmIdAndCreatedAtDesc(Long farmId);

    List<History> findAllByFarmIdAndCreatedAtDesc(Long farmId);
}
