package com.ggulling.sharing;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.ToString;

import java.time.LocalTime;
import java.time.format.DateTimeFormatter;

@ToString
@AllArgsConstructor(access = AccessLevel.PROTECTED)
public class CreateSharingResponse {
    private Long id;
    private String farmImage;
    private int ggulSharingCount;
    private String availableTime;

    public static CreateSharingResponse of(Long id, String farmImage, int ggulSharingCount, LocalTime startTime, LocalTime endTime) {
        return new CreateSharingResponse(id, farmImage, ggulSharingCount, startTime.format(DateTimeFormatter.ofPattern("HH:mm")) + " - " + endTime.format(DateTimeFormatter.ofPattern("HH:mm")));
    }
}
