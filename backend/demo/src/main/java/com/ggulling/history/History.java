package com.ggulling.history;

import com.ggulling.common.BaseEntity;
import com.ggulling.farm.Farm;
import com.ggulling.sharing.Status;
import com.ggulling.user.User;
import com.ggulling.user.UserRepository;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotNull;

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
    @JoinColumn(name = "farm_id")
    private Farm farm;

    @NotNull
    @Enumerated(EnumType.STRING)
    private Status status;

    public void completeSharing() {
        this.status = Status.COMPLETED;
    }

    public void changeToAnonymous(User user) {
        this.user = user;
    }

    private History(final int reservationGGulCount, final int remainGgulCount, final User user, final Farm farm) {
        this.reservationGGulCount = reservationGGulCount;
        this.remainGgulCount = remainGgulCount;
        this.user = user;
        this.farm = farm;
        this.status = Status.INPROGRESS;
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
