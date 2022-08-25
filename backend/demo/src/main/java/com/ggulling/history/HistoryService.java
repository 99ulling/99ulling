package com.ggulling.history;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
@Transactional
@RequiredArgsConstructor
public class HistoryService {
    final private HistoryRepository historyRepository;

    @Transactional(readOnly = true)
    public SharingHistoryListResponse getSharingHistory(Long farmId) {
        final List<History> historyList = historyRepository.findAllByFarmIdOrderByCreatedAtDesc(farmId);
        final List<SharingHistoryResponse> sharingList = getDistinctDayHistory(historyList);

        return SharingHistoryListResponse.of(sharingList);
    }

    @Transactional(readOnly = true)
    public SharingHistoryResponse getSharingTodayHistory(Long farmId) {
        List<History> historyList = historyRepository.findAllByFarmIdOrderByCreatedAtDesc(farmId);

        List<History> todayHistoryList = getTodayHistories(historyList);

        return SharingHistoryResponse.of(LocalDate.now(), todayHistoryList);
    }

    private List<History> getTodayHistories(List<History> historyList) {
        return historyList.stream()
                .filter(history -> history.getCreatedAt().toLocalDate().equals(LocalDate.now()))
                .collect(Collectors.toList());
    }

    private List<SharingHistoryResponse> getDistinctDayHistory(List<History> historyList) {
        Set<LocalDate> dateSet = historyList.stream()
                .map(history -> history.getCreatedAt().toLocalDate())
                .collect(Collectors.toCollection(LinkedHashSet::new));

        return dateSet.stream()
                .map(date -> {
                    List<History> data = historyList.stream()
                            .filter(history -> history.getCreatedAt().equals(date))
                            .collect(Collectors.toList());

                    return SharingHistoryResponse.of(date, data);
                }).collect(Collectors.toList());
    }

}
