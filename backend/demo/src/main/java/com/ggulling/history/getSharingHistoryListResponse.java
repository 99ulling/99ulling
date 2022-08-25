package com.ggulling.history;

import com.ggulling.farm.Farm;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import lombok.ToString;

import java.util.ArrayList;
import java.util.List;

@ToString
@Getter
@RequiredArgsConstructor(access = AccessLevel.PRIVATE)
public class getSharingHistoryListResponse {
    private final List<getSharingHistoryResponse> responses;

    public static getSharingHistoryListResponse of(List<getSharingHistoryResponse> historyList) {
        return new getSharingHistoryListResponse(historyList);
    }
}
