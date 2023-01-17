package com.ggulling.farm;

import com.ggulling.history.History;
import com.ggulling.history.HistoryRepository;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
@RequiredArgsConstructor
class FarmService {
    private final FarmRepository farmRepository;
    private final HistoryRepository historyRepository;

    @Transactional(readOnly = true)
    public SearchFarmResponse searchFarm(SearchFarmRequest request) {
        final List<Farm> farmList = farmRepository.findAll();

        if (farmList.isEmpty()) throw new NoFarmAvailableException();

        Collections.shuffle(farmList);

        final Farm targetFarm = farmList.get(0);

        final Optional<History> history = historyRepository.findFirstByFarmIdOrderByCreatedAtDesc(targetFarm.getId());

        final int remains = getRemains(targetFarm, history);

        return SearchFarmResponse.of(targetFarm, remains);
    }

    @Transactional(readOnly = true)
    public SearchFarmByRangeResponse searchFarmByRange(final SearchFarmByRangeRequest request) {
        //조건에 맞는 농장 가져오기
        final List<Farm> farmList = farmRepository.findFarmByRadius(request.getLatitude(), request.getLongitude(), request.getTransportation().getKm());
        final int randInt = (int) (Math.random() * farmList.size());
        final double distance = getDistance(request.getLatitude(), request.getLongitude(), farmList.get(randInt).getLatitude(), farmList.get(randInt).getLongitude());

        return SearchFarmByRangeResponse.of(farmList.get(randInt), distance);
    }

    private int getRemains(Farm targetFarm, Optional<History> history) {
        if (history.isEmpty()) {
            return targetFarm.getSharingGgulCount();
        }
        return history.get().getRemainGgulCount();
    }

    private static double getDistance(double lat1, double lon1, double lat2, double lon2) {
        double theta = lon1 - lon2;
        double dist = Math.sin(deg2rad(lat1)) * Math.sin(deg2rad(lat2)) + Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.cos(deg2rad(theta));

        dist = Math.acos(dist);
        dist = rad2deg(dist);
        dist = dist * 60 * 1.1515;

        return dist *= 1.609344;
    }

    private static double deg2rad(double deg) {
        return (deg * Math.PI / 180.0);
    }

    private static double rad2deg(double rad) {
        return (rad * 180 / Math.PI);
    }

}
