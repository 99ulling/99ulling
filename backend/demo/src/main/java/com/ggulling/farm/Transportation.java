package com.ggulling.farm;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;

@AllArgsConstructor(access = AccessLevel.PROTECTED)
public enum Transportation {
    WALK("도보"),
    BIKE("자전거"),
    CAR("차");

    private String name;
    }
