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
import javax.websocket.server.PathParam;

@RestController
@RequestMapping("/api/")
@RequiredArgsConstructor
public class SharingController {
    private final SharingService sharingService;

    @ApiOperation("농가의 하루 귤 나눔을 시작합니다.")
    @PostMapping("v1/sharing")
    public CreateSharingResponse createSharing(@Valid @RequestBody CreateSharingRequest request) {
        return sharingService.createSharing(request);
    }

    @ApiOperation("v1 - 귤줍이 나눔을 예약합니다.")
    @PostMapping("v1/sharing/reservation")
    public ReserveSharingResponse reserveSharing(@Valid @RequestBody ReserveSharingRequest request) {
        return sharingService.reserveSharing(request);
    }

    @ApiOperation("v1 - 귤줍이 나눔을 확인합니다.")
    @GetMapping("v1/sharing/reservation/{userId}")
    public SharingReservationResponse getSharingReservation(@PathVariable Long userId) {
        return sharingService.getSharingReservation(userId);
    }

    @ApiOperation("v2 - 귤줍이 나눔을 예약합니다.")
    @PostMapping("v2/sharing/reservation")
    public ReserveSharingResponse reserveSharingGgul(@Valid @RequestBody SharingGgulRequest request) {
        return sharingService.reserveSharingGgul(request);
    }

    @ApiOperation(" v2 - 귤줍이 나눔을 확인합니다.")
    @GetMapping("v2/sharing/reservation")
    public SharingByNicknameResponse findSharingByNickname(@PathParam("nickname") String nickname) {
        return sharingService.findSharingByNickname(nickname);
    }

    @ApiOperation("v2 - 귤줍이 나눔을 완료합니다.")
    @PostMapping("v2/sharing/completion")
    public CompleteSharingResponse completeSharing(@PathParam("nickname") String nickname) {
        return sharingService.completeSharing(nickname);
    }
}


