package com.ggulling.farm;

import com.ggulling.history.History;
import com.ggulling.history.HistoryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Collections;
import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class FarmService {
    public static final int RADIUS = 1;
    final private FarmRepository farmRepository;
    final private HistoryRepository historyRepository;

    @Transactional(readOnly = true)
    public SearchFarmResponse searchFarm(SearchFarmRequest request) {

        final List<Farm> farmList = farmRepository.findFarmByRadius(request.getLatitude(), request.getLongitude(), request.getTransportation().getKm());
        if (farmList.isEmpty()) throw new NoFarmAvailableException();

        Collections.shuffle(farmList);

        final Farm targetFarm = farmList.get(0);

        final History history = historyRepository.findFirstByFarmIdAndCreatedAtDesc(targetFarm.getId())
                .orElse(
                        History.newInstance(0, targetFarm.getSharingGgulCount(), null, targetFarm)
                );

        return SearchFarmResponse.of(targetFarm, history.getRemainGgulCount());
    }
}
