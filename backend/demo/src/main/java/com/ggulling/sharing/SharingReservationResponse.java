package com.ggulling.sharing;

import com.ggulling.history.History;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.time.format.DateTimeFormatter;

@Getter
@ToString
@AllArgsConstructor(access = AccessLevel.PRIVATE)
public class SharingReservationResponse {
    private Long reservationId;
    private int reservationCount;
    private String farmName;
    private String availableTime;

    public static SharingReservationResponse of(History history) {
        return new SharingReservationResponse(
                history.getId(),
                history.getReservationGGulCount(),
                history.getFarm().getFarmName(),
                history.getFarm().getAvailableStartTime().format(DateTimeFormatter.ofPattern("HH:mm")) + " : " + history.getFarm().getAvailableEndTime().format(DateTimeFormatter.ofPattern("HH:mm"))
        );
    }
}
