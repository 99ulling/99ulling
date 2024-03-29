package com.ggulling.sharing;

import com.ggulling.auth.NotExistsUserException;
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
import java.util.List;
import java.util.Objects;
import java.util.Optional;
import java.util.stream.Collectors;

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
            farm.changeSentence(request.getSentence());
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

    public ReserveSharingResponse reserveSharingGgul(SharingGgulRequest request) {
        final Farm farm = farmRepository.findByIdAndShareTrue(request.getFarmId())
                .orElseThrow(NotExistsFarmException::new);

        final User user = userRepository.findByNickname(request.getNickname())
                .orElseThrow(NotExistsUserException::new);

        farm.minusRemainCount(request.getGgulCount());

        History newHistory = History.newInstance(request.getGgulCount(), 0, user, farm);
        historyRepository.save(newHistory);

        return new ReserveSharingResponse(newHistory.getId());
    }

    @Transactional(readOnly = true)
    public SharingReservationResponse getSharingReservation(Long userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(NotExistsUserException::new);

        List<History> histories = historyRepository.findAllByUserId(userId)
                .stream()
                .filter(history -> history.getCreatedAt().toLocalDate().equals(LocalDate.now()))
                .collect(Collectors.toList());

        if (histories.isEmpty()) throw new NotExistsReservationException();

        return SharingReservationResponse.of(histories.get(0));
    }

    public SharingByNicknameResponse findSharingByNickname(final String nickname) {
        final User user = userRepository.findByNickname(nickname)
                .orElseThrow(NotExistsUserException::new);

        final History history = historyRepository.findByUserIdAndStatus(user.getId(), Status.INPROGRESS)
                .orElseThrow(NotExistsReservationException::new);

        return SharingByNicknameResponse.of(history);
    }

    public CompleteSharingResponse completeSharing(String nickname) {
        final User user = userRepository.findByNickname(nickname)
                .orElseThrow(NotExistsUserException::new);

        final History history = historyRepository.findByUserIdAndStatus(user.getId(), Status.INPROGRESS)
                .orElseThrow(NotExistsReservationException::new);

        history.completeSharing();
        history.changeToAnonymous(userRepository.findById(-1L)
                .orElseGet(User::getAnonymous));

        userRepository.delete(user);

        return CompleteSharingResponse.of(history);
    }

    private int getRemains(Farm farm, Optional<History> history) {
        if (history.isEmpty()) {
            return farm.getSharingGgulCount();
        }
        return history.get().getRemainGgulCount();
    }
}
