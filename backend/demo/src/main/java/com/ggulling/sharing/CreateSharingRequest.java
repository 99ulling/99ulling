package com.ggulling.sharing;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor(access = AccessLevel.PRIVATE)
public class CreateSharingRequest {
    private Long farmId;
    private String availableTime;
    private int sharingCount;
    private String sentence;
}
