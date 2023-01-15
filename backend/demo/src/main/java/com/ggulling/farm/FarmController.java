package com.ggulling.farm;

import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class FarmController {

    private final FarmService farmService;

    @ApiOperation("귤 농가를 탐색하여 조회합니다.")
    @PostMapping("/v1/farm/search")
    public SearchFarmResponse searchFarm(@Valid @RequestBody SearchFarmRequest request) {
        return farmService.searchFarm(request);
    }

    @ApiOperation("전방의 귤 농가를 탐색하여 조회합니다.")
    @PostMapping("/v2/farm/search")
    public SearchFarmByRangeResponse searchFarmByRange(@Valid @RequestBody SearchFarmByRangeRequest request) {
        return farmService.searchFarmByRange(request);
    }
}
