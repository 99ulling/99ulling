package com.ggulling.farm;

import com.ggulling.history.History;
import com.ggulling.history.HistoryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
@RequiredArgsConstructor
public class FarmService {
    public static final int RADIUS = 1;
    final private FarmRepository farmRepository;
    final private HistoryRepository historyRepository;

    @Transactional(readOnly = true)
    public SearchFarmResponse searchFarm(SearchFarmRequest request) {

//        final List<Farm> farmList = farmRepository.findFarmByRadius(request.getLatitude(), request.getLongitude(), request.getTransportation().getKm());
        final List<Farm> farmList = farmRepository.findAll();

        if (farmList.isEmpty()) throw new NoFarmAvailableException();

        Collections.shuffle(farmList);

        final Farm targetFarm = farmList.get(0);

        final Optional<History> history = historyRepository.findFirstByFarmIdOrderByCreatedAtDesc(targetFarm.getId());

        final int remains = getRemains(targetFarm, history);

        return SearchFarmResponse.of(targetFarm, remains);
    }

    private int getRemains(Farm targetFarm, Optional<History> history) {
        if (history.isEmpty()) {
            return targetFarm.getSharingGgulCount();
        }
        return history.get().getRemainGgulCount();
    }
}
