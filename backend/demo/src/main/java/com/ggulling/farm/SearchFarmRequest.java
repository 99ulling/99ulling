package com.ggulling.farm;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
public class SearchFarmRequest {
    private double latitude;
    private double longitude;
    private String address;
    private Transportation transportation;
}
