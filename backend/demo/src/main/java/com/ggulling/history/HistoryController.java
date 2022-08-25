package com.ggulling.history;

import io.swagger.annotations.ApiOperation;
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

    @ApiOperation("과거의 내역들을 조회합니다.")
    @GetMapping("/past/{farmId}")
    public SharingHistoryListResponse getSharingHistory(@PathVariable Long farmId) {
        return historyService.getSharingHistory(farmId);
    }

    @ApiOperation("오늘의 내역을 조회합니다.")
    @GetMapping("/today/{farmId}")
    public SharingHistoryResponse getSharingTodayHistory(@PathVariable Long farmId) {
        return historyService.getSharingTodayHistory(farmId);
    }
}
