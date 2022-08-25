package com.ggulling.farm;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class FarmService {
    final private FarmRepository farmRepository;

    @Transactional(readOnly = true)
    public SearchFarmResponse searchFarm(SearchFarmRequest request) {
        // 해당 반경 내의 귤 농장 가져옴
        List<Farm> farmList = farmRepository.findFarmByRadius(request.getLatitude(), request.getLongitude());

        // 그 중에 랜덤 하나
        return null;
        //sma
    }
}
