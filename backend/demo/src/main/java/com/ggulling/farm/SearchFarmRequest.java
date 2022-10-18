package com.ggulling.farm;

import lombok.Getter;

@Getter
public class SearchFarmRequest {
    private double latitude;
    private double longitude;
    private String address;
    private String sentence;
    private Transportation transportation;
}
