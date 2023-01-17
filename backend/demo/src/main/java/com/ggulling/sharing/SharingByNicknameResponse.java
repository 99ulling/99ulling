package com.ggulling.sharing;


import com.ggulling.history.History;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.ToString;

@Getter
@ToString
@AllArgsConstructor(access = AccessLevel.PRIVATE)
public class SharingByNicknameResponse {
    private Long reservationId;
    private int reservationCount;
    private String farmName;
    private String farmImage;
    private String address;
    private String phoneNumber;

    public static SharingByNicknameResponse of(History history) {
        return new SharingByNicknameResponse(history.getId(),
                history.getReservationGGulCount(),
                history.getFarm().getFarmName(),
                history.getFarm().getFarmImage(),
                history.getFarm().getAddress(),
                history.getFarm().getPhoneNumber());
    }
}
