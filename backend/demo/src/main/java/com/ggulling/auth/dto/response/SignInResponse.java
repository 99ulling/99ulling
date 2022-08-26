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
    private String farmImage;
    private String availableTime;
    private String address;
    private String sentence;

    public static SignInResponse of(Long id, String nickname, UserType userType, final String farmImage, final String availableTime, final String address, final String sentence) {
        return new SignInResponse(id, nickname, userType, farmImage, availableTime, address, sentence);
    }
}
