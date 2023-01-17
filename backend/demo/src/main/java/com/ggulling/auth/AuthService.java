package com.ggulling.auth;

import com.ggulling.auth.dto.request.SignInRequest;
import com.ggulling.auth.dto.request.SignUpRequest;
import com.ggulling.auth.dto.response.SignInResponse;
import com.ggulling.auth.dto.response.SignUpByNicknameResponse;
import com.ggulling.farm.Farm;
import com.ggulling.farm.FarmRepository;
import com.ggulling.user.User;
import com.ggulling.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.PostConstruct;
import java.time.format.DateTimeFormatter;
import java.util.Optional;

@Service
@Transactional
@RequiredArgsConstructor
class AuthService {
    private final UserRepository userRepository;
    private final FarmRepository farmRepository;

    @PostConstruct
    void init() {
        System.out.println("");
    }

    public SignInResponse signUp(final SignUpRequest request) {
        Optional<User> user = userRepository.findByNickname(request.getNickname());
        Optional<Farm> farm = farmRepository.findByFarmName(request.getNickname());

        if (user.isPresent() || farm.isPresent()) throw new UserAlreadyExistsException();

        if (UserType.FARMER == request.getUserType()) {
            final Farm newFarm = Farm.newInstance(request.getNickname(), request.getLatitude(), request.getLongitude(), request.getAddress());
            farmRepository.save(newFarm);
            return SignInResponse.of(newFarm.getId(), newFarm.getFarmName(), request.getUserType(), newFarm.getFarmImage(), newFarm.getAvailableStartTime().format(DateTimeFormatter.ofPattern("HH:mm")) + " ~ " + newFarm.getAvailableEndTime().format(DateTimeFormatter.ofPattern("HH:mm")), newFarm.getAddress(), newFarm.getSentence());
        }

        final User newUser = User.newInstance(request.getNickname());
        userRepository.save(newUser);
        return SignInResponse.of(newUser.getId(), newUser.getNickname(), request.getUserType(), "", "", "", "");
    }

    public SignInResponse signIn(final SignInRequest request) {
        Optional<User> user = userRepository.findByNickname(request.getNickname());
        Optional<Farm> farm = farmRepository.findByFarmName(request.getNickname());

        if (user.isEmpty() && farm.isEmpty()) throw new NotExistsUserException();

        return user.map(value -> SignInResponse.of(value.getId(), value.getNickname(), UserType.USER, "", "", "", ""))
                .orElseGet(() -> SignInResponse.of(farm.get().getId(), farm.get().getFarmName(), UserType.FARMER, farm.get().getFarmImage(), farm.get().getAvailableStartTime().format(DateTimeFormatter.ofPattern("HH:mm")) + " ~ " + farm.get().getAvailableEndTime().format(DateTimeFormatter.ofPattern("HH:mm")), farm.get().getAddress(), farm.get().getSentence()));
    }

    public SignUpByNicknameResponse signUpByNickname(final String nickname) {
        if (userRepository.existsByNickname(nickname))
            throw new UserAlreadyExistsException();

        return SignUpByNicknameResponse.of(userRepository.save(User.newInstance(nickname)));
    }
}
