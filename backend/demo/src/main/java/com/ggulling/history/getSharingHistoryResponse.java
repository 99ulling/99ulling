package com.ggulling.history;

import lombok.AccessLevel;
import lombok.NoArgsConstructor;
import lombok.ToString;

@ToString
@NoArgsConstructor(access = AccessLevel.PRIVATE)
public class getSharingHistoryResponse {
    private Long id;
    private String date;
    private int totalSharingCount;
    private int remainCount;
}
