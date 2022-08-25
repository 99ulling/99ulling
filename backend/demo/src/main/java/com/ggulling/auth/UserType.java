package com.ggulling.auth;

import lombok.Getter;

@Getter
public enum UserType {
    FARMER("농부"),
    USER("사용자");

    private String name;

    UserType(final String name) {
        this.name = name;
    }
}
