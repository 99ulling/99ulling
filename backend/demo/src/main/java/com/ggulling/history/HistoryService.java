package com.ggulling.history;

import com.ggulling.farm.Farm;
import com.ggulling.farm.FarmRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Collections;
import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class HistoryService {
    final private HistoryRepository historyRepository;

    public getSharingHistoryListResponse getSharingHistory(Long farmId) {
        List<History> historyList = historyRepository.findAllByFarmIdAndCreatedAtDesc(farmId);
        //해당 날의 가장 첫번째 : 총 수량
        //해당 날의 가장 마지막 번째 : 마지막 수량

        Collections.sort(historyList);

        return getSharingHistoryListResponse(historyList);
    }
}
