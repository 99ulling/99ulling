package com.ggulling.auth.dto.response;

import com.ggulling.auth.UserType;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@ToString
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
public class SignInResponse {
    private Long id;
    private String nickname;
    private UserType userType;

    public static SignInResponse of(Long id, String nickname, UserType userType) {
        return new SignInResponse(id, nickname, userType);
    }
}
