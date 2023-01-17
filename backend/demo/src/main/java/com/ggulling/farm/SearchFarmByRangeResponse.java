package com.ggulling.farm;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.ToString;

import java.time.format.DateTimeFormatter;

@ToString
@Getter
@AllArgsConstructor(access = AccessLevel.PRIVATE)
public class SearchFarmByRangeResponse {
    private Long id;
    private String name;
    private String farmImage;
    private String address;
    private String availableTime;
    private int totalCount;
    private int remainCount;
    private double distance;

    public static SearchFarmByRangeResponse of(Farm farm, double distance) {
        return new SearchFarmByRangeResponse(
                farm.getId(),
                farm.getFarmName(),
                farm.getFarmImage(),
                farm.getAddress(),
                farm.getAvailableStartTime().format(DateTimeFormatter.ofPattern("HH:mm")) + " ~ " + farm.getAvailableEndTime().format(DateTimeFormatter.ofPattern("HH:mm")),
                farm.getSharingGgulCount(),
                farm.getRemainGgulCount(),
                distance
        );
    }
}
