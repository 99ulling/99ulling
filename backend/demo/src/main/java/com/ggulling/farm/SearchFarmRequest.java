package com.ggulling.farm;

import lombok.Getter;

@Getter
public class SearchFarmRequest {
    private Long latitude;
    private Long longitude;
    private String address;
    private Transportation transportation;
}
