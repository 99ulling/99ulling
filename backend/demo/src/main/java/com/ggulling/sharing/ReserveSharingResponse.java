package com.ggulling.sharing;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.ToString;

@ToString
@Getter
@AllArgsConstructor(access = AccessLevel.PROTECTED)
public class ReserveSharingResponse {
    private Long id;
}
