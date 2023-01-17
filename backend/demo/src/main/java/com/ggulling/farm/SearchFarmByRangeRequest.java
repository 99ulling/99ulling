package com.ggulling.farm;

import lombok.Getter;

@Getter
public class SearchFarmByRangeRequest {
    private double latitude;
    private double longitude;
    private Transportation transportation;
}
