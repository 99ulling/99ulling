package com.ggulling.auth.dto.request;

import com.ggulling.auth.UserType;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor(access = AccessLevel.PROTECTED)
public class SignUpRequest {
    private String nickname;
    private UserType userType;
    private String address;
    private double latitude;
    private double longitude;
}
