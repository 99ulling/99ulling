package com.ggulling.history;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.ToString;

import java.util.List;

@ToString
@Getter
@RequiredArgsConstructor(access = AccessLevel.PRIVATE)
public class SharingHistoryListResponse {
    private final List<SharingHistoryResponse> responses;

    public static SharingHistoryListResponse of(List<SharingHistoryResponse> historyList) {
        return new SharingHistoryListResponse(historyList);
    }
}
