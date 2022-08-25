package com.ggulling.sharing;

import com.ggulling.auth.NotExistsUserException;
import com.ggulling.farm.Farm;
import com.ggulling.farm.FarmRepository;
import com.ggulling.farm.NoFarmAvailableException;
import com.ggulling.farm.SearchFarmRequest;
import com.ggulling.farm.SearchFarmResponse;
import com.ggulling.history.History;
import com.ggulling.history.HistoryRepository;
import com.ggulling.user.User;
import com.ggulling.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.Collections;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

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

        if (!Objects.equals(farm.getUpdateAt().toLocalDate(), LocalDate.now())) {
            farm.activeShare();
            farm.changeTime(request.getAvailableTime());
            farm.changeSharingCount(request.getSharingCount());
        }
        return CreateSharingResponse.of(farm.getId(), farm.getFarmImage(), farm.getSharingGgulCount(), farm.getAvailableStartTime(), farm.getAvailableEndTime());
    }

    public ReserveSharingResponse reserveSharing(ReserveSharingRequest request) {
        final Farm farm = farmRepository.findByIdAndShareTrue(request.getFarmId())
                .orElseThrow(NotExistsFarmException::new);

        final User user = userRepository.findById(request.getUserId())
                .orElseThrow(NotExistsUserException::new);

        final Optional<History> history = historyRepository.findFirstByFarmIdOrderByCreatedAtDesc(request.getFarmId());
        final int remains = getRemains(farm, history);
        if (request.getGgulCount() > remains) throw new InvalidGgulCountException();

        final History newHistory = History.newInstance(request.getGgulCount(), remains - request.getGgulCount(), user, farm);
        historyRepository.save(newHistory);

        return new ReserveSharingResponse(newHistory.getId());
    }

    @Transactional(readOnly = true)
    public SearchFarmResponse searchFarm(SearchFarmRequest request) {

        final List<Farm> farmList = farmRepository.findFarmByRadius(request.getLatitude(), request.getLongitude(), request.getTransportation().getKm());
        if (farmList.isEmpty()) throw new NoFarmAvailableException();

        Collections.shuffle(farmList);

        final Farm targetFarm = farmList.get(0);

        final History history = historyRepository.findFirstByFarmIdOrderByCreatedAtDesc(targetFarm.getId())
                .orElse(
                        History.newInstance(0, targetFarm.getSharingGgulCount(), null, targetFarm)
                );

        return SearchFarmResponse.of(targetFarm, history.getRemainGgulCount());
    }

    private int getRemains(Farm farm, Optional<History> history) {
        if (history.isEmpty()) {
            return farm.getSharingGgulCount();
        }
        return history.get().getRemainGgulCount();
    }
}
