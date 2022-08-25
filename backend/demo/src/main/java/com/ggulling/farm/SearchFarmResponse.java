package com.ggulling.farm;

import lombok.ToString;

@ToString
public class SearchFarmResponse {
    private Long id;
    private String name;
    private String farmImage;
    private String address;
    private String availableTime;
    private int remainCount;
}

