package com.ggulling.sharing;

import lombok.Getter;

@Getter
public class ReserveSharingRequest {
    private Long userId;
    private Long farmId;
    private int ggulCount;
}
