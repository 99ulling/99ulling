package com.ggulling.history;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.time.format.DateTimeFormatter;

@ToString
@AllArgsConstructor(access = AccessLevel.PRIVATE)
public class getSharingHistoryResponse {
    private Long id;
    private String date;
    private int totalSharingCount;
    private int remainCount;

    public static getSharingHistoryResponse of(final History history, final int totalSharingCount) {
        return new getSharingHistoryResponse(
                history.getId(),
                history.getCreatedAt().format(DateTimeFormatter.ofPattern("MM월 dd일")),
                totalSharingCount,
                history.getRemainGgulCount());
    }
}
