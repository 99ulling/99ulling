package com.ggulling.farm;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.ToString;

import java.time.format.DateTimeFormatter;

@ToString
@Getter
@AllArgsConstructor(access = AccessLevel.PRIVATE)
public class SearchFarmResponse {
    private Long id;
    private String name;
    private String farmImage;
    private String address;
    private String availableTime;
    private int totalCount;
    private int remainCount;

    public static SearchFarmResponse of(Farm farm, int remainCount) {
        return new SearchFarmResponse(
                farm.getId(),
                farm.getFarmName(),
                farm.getFarmImage(),
                farm.getAddress(),
                farm.getAvailableStartTime().format(DateTimeFormatter.ofPattern("HH:mm")) + " : " + farm.getAvailableEndTime().format(DateTimeFormatter.ofPattern("HH:mm")),
                farm.getSharingGgulCount(),
                remainCount
        );
    }
}

