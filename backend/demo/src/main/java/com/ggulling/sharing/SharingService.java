package com.ggulling.sharing;

import com.ggulling.farm.Farm;
import com.ggulling.farm.FarmRepository;
import com.ggulling.history.History;
import com.ggulling.history.HistoryRepository;
import com.ggulling.user.User;
import com.ggulling.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.Objects;

@Service
@Transactional
@RequiredArgsConstructor
public class SharingService {
    private final UserRepository userRepository;
    private final FarmRepository farmRepository;
    private final HistoryRepository historyRepository;

    public CreateSharingResponse createSharing(CreateSharingRequest request) {
        Farm farm = farmRepository.findById(request.getFarmId())
                .orElseThrow(NotExistsFarmException::new);
        // 마지막 수정일 != 오늘
        if (!Objects.equals(LocalDate.from(farm.getUpdateAt()), LocalDate.now())) {
            farm.activeShare();
        }
        return CreateSharingResponse.of(farm.getId(), farm.getFarmImage(), farm.getSharingGgulCount(), farm.getAvailableStartTime(), farm.getAvailableEndTime());
    }

    public ReserveSharingResponse reserveSharing(ReserveSharingRequest request) {
        final Farm farm = farmRepository.findByIdAndIsActiveTrue(request.getFarmId())
                .orElseThrow(NotExistsFarmException::new);

        final User user = userRepository.findById(request.getUserId())
                .orElseThrow(NotExistsFarmException::new);

        final History history = historyRepository.findFirstByFarmIdAndCreatedAtDesc(request.getFarmId())
                .orElse(
                        History.newInstance(0, farm.getSharingGgulCount(), user, farm)
                );

        if (request.getGgulCount() > history.getRemainGgulCount()) throw new InvalidGgulCountException();
        final History newHistory = History.newInstance(request.getGgulCount(), history.getRemainGgulCount() - request.getGgulCount(), user, farm);

        historyRepository.save(newHistory);

        return new ReserveSharingResponse(newHistory.getId());
    }
}
