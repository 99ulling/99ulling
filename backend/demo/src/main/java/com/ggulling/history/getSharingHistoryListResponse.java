package com.ggulling.history;

import java.util.ArrayList;
import java.util.List;

public class getSharingHistoryListResponse {
    private List<getSharingHistoryResponse> responses = new ArrayList<>();

    public getSharingHistoryListResponse(final List<getSharingHistoryResponse> responses) {
        this.responses = responses;
    }
}
