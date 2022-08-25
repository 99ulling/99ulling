package com.ggulling.farm;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor(access = AccessLevel.PROTECTED)
public enum Transportation {
    WALK("도보", 3),
    BIKE("자전거", 6),
    CAR("차", 12);

    private String name;
    private int km;
}
