package com.ggulling.farm;

import com.ggulling.common.BaseEntity;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Farm extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @Column(unique = true, nullable = false)
    private String farmName;
    private String farmImage;
    private double latitude;
    private double longitude;
    private String address;
    private boolean share;
    private LocalTime availableStartTime;
    private LocalTime availableEndTime;
    private int sharingGgulCount;

    public void activeShare() {
        share = false;
    }

    public void changeTime(String availableTime) {
        String[] times = availableTime.replace(" ","")
                .split("~");
        LocalTime startTime = LocalTime.parse(times[0], DateTimeFormatter.ISO_LOCAL_TIME);
        LocalTime endTime = LocalTime.parse(times[1], DateTimeFormatter.ISO_LOCAL_TIME);

        availableStartTime = startTime;
        availableEndTime = endTime;
    }

    public void changeSharingCount(int sharingGgulCount) {
        this.sharingGgulCount = sharingGgulCount;
    }

    private Farm(final String farmName, final String farmImage, final double latitude, final double longitude, final String address, final boolean share, final LocalTime availableStartTime, final LocalTime availableEndTime, final int sharingGgulCount) {
        this.farmName = farmName;
        this.farmImage = farmImage;
        this.latitude = latitude;
        this.longitude = longitude;
        this.address = address;
        this.share = share;
        this.availableStartTime = availableStartTime;
        this.availableEndTime = availableEndTime;
        this.sharingGgulCount = sharingGgulCount;
    }

    public static Farm newInstance(final String farmName, final String farmImage, final double latitude, final double longitude, final String address) {
        return new Farm(farmName, farmImage, latitude, longitude, address, false, LocalTime.of(10, 00), LocalTime.of(18, 00), 100);
    }
}
