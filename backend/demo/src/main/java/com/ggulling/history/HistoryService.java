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
    public getSharingHistoryListResponse getSharingHistory(Long farmId) {
        List<History> historyList = historyRepository.findAllByFarmIdOrderByCreatedAtDesc(farmId);
        //해당 날의 가장 첫번째 : 총 수량
        //해당 날의 가장 마지막 번째 : 마지막 수량
        List<getSharingHistoryResponse> sharingList = getDistinctDayHistory(historyList);

        return getSharingHistoryListResponse.of(sharingList);
    }

    @Transactional(readOnly = true)
    public getSharingHistoryResponse getSharingTodayHistory(Long farmId) {
        List<History> historyList = historyRepository.findAllByFarmIdOrderByCreatedAtDesc(farmId);

        List<History> todayHistoryList = getTodayHistories(historyList);

        return getSharingHistoryResponse.of(LocalDate.now(), todayHistoryList);
    }

    private List<History> getTodayHistories(List<History> historyList) {
        List<History> todayHistoryList = historyList.stream()
                .filter(history -> history.getCreatedAt().toLocalDate().equals(LocalDate.now()))
                .collect(Collectors.toList());
        return todayHistoryList;
    }

    private List<getSharingHistoryResponse> getDistinctDayHistory(List<History> historyList) {
        Set<LocalDate> dateSet = historyList.stream()
                .map(history -> history.getCreatedAt().toLocalDate())
                .collect(Collectors.toCollection(LinkedHashSet::new));

        List<getSharingHistoryResponse> sharingList = dateSet.stream()
                .map(date -> {
                    List<History> data = historyList.stream()
                            .filter(history -> history.getCreatedAt().equals(date))
                            .collect(Collectors.toList());

                    return getSharingHistoryResponse.of(date, data);
                }).collect(Collectors.toList());
        return sharingList;
    }

}
