package com.ggulling.history;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/history")
public class HistoryController {
    final private HistoryService historyService;

    @GetMapping("/past")
    public getSharingHistoryListResponse getSharingHistory(@PathVariable Long farmId) {
        return historyService.getSharingHistory(farmId);

    }
}
