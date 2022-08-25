package com.ggulling.sharing;

import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/v1/sharing")
@RequiredArgsConstructor
public class SharingController {
    private final SharingService sharingService;

    @ApiOperation("농가의 하루 귤 나눔을 시작합니다.")
    @PostMapping("")
    public CreateSharingResponse createSharing(@Valid @RequestBody CreateSharingRequest request) {
        return sharingService.createSharing(request);
    }

    @ApiOperation("귤줍이 나눔을 예약합니다.")
    @PostMapping("/reservation")
    public ReserveSharingResponse reserveSharing(@Valid @RequestBody ReserveSharingRequest request) {
        return sharingService.reserveSharing(request);
    }
    @ApiOperation("귤줍이 나눔을 확인합니다.")
    @GetMapping("/reservation/{userId}")
    public SharingReservationResponse getSharingReservation(@PathVariable Long userId){
        return sharingService.getSharingReservation(userId);
    }
}
