package com.ggulling.sharing;

import com.ggulling.history.History;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.ToString;

@Getter
@ToString
@AllArgsConstructor(access = AccessLevel.PRIVATE)
public class CompleteSharingResponse {
    private Long reservationId;
    private String nickname;
    private Status status;

    public static CompleteSharingResponse of(History history) {
        return new CompleteSharingResponse(
                history.getId(),
                history.getUser().getNickname(),
                history.getStatus());
    }
}
