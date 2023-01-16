package com.ggulling.history;

import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

public interface HistoryRepository extends JpaRepository<History, Long> {
    Optional<History> findFirstByFarmIdOrderByCreatedAtDesc(Long farmId);
    Optional<History> findByUserIdAndStatus(Long userId,String status);
    List<History> findAllByFarmIdOrderByCreatedAtDesc(Long farmId);
    List<History> findAllByUserId(Long userId);
}
