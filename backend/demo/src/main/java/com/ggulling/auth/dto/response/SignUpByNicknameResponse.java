package com.ggulling.auth.dto.response;

import com.ggulling.user.User;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@ToString
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
public class SignUpByNicknameResponse {
    private Long id;

    public static SignUpByNicknameResponse of(final User user) {
        return new SignUpByNicknameResponse(user.getId());
    }
}
