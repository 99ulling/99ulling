package com.ggulling.history;

import com.ggulling.common.BaseEntity;
import com.ggulling.farm.Farm;
import com.ggulling.user.User;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class History extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private int reservationGGulCount; //예약한 귤 개수

    private int remainGgulCount; //남은 귤 개수

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "farm_id")w
    private Farm farm;

    private History(final int reservationGGulCount, final int remainGgulCount, final User user, final Farm farm) {
        this.reservationGGulCount = reservationGGulCount;
        this.remainGgulCount = remainGgulCount;
        this.user = user;
        this.farm = farm;
    }

    public static History newInstance(final int reservationGGulCount, final int remainGgulCount, final User user, final Farm farm) {
        return new History(
                reservationGGulCount,
                remainGgulCount,
                user,
                farm
        );
    }
}
