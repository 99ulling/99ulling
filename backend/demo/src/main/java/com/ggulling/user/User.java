package com.ggulling.user;

import com.ggulling.common.BaseEntity;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class User extends BaseEntity {
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Id
    private Long id;
    @Column(unique = true, nullable = false)
    private String nickname;

    private User(final String nickname) {
        this.nickname = nickname;
    }

    public static User newInstance(final String nickname) {
        return new User(nickname);
    }
}
