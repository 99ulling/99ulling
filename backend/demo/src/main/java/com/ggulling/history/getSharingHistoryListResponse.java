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

    public static getSharingHistoryListResponse of(List<History> historyList, List<Integer> totalCountList) {
        final List<getSharingHistoryResponse> response = toSharingHistoryListResponse(historyList, totalCountList);
        return new getSharingHistoryListResponse(response);
    }

    private static List<getSharingHistoryResponse> toSharingHistoryListResponse(List<History> historyList, List<Integer> totalCount) {
        List<getSharingHistoryResponse> historyResponses = new ArrayList<>();
        for (int i = 0; i < historyList.size(); i++) {
            historyResponses.add(getSharingHistoryResponse.of(historyList.get(i), totalCount.get(i)));
        }
        return historyResponses;
    }
}
