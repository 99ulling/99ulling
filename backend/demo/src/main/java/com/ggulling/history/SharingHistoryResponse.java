package com.ggulling.history;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.ToString;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;

@ToString
@Getter
@AllArgsConstructor(access = AccessLevel.PRIVATE)
public class SharingHistoryResponse {
    private Long id;
    private String date;
    private int totalSharingCount;
    private int remainCount;

    public static SharingHistoryResponse of(final LocalDate date, final List<History> histories) {
        return new SharingHistoryResponse(
                histories.get(0).getId(),
                date.format(DateTimeFormatter.ofPattern("MM월 dd일")),
                histories.get(histories.size() - 1).getRemainGgulCount(),
                histories.get(0).getRemainGgulCount()
        );
    }
}
