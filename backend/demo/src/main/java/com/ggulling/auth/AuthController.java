package com.ggulling.auth;

import com.ggulling.auth.dto.request.SignInRequest;
import com.ggulling.auth.dto.request.SignUpRequest;
import com.ggulling.auth.dto.response.SignInResponse;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/auth")
public class AuthController {

    private final AuthService authService;

    @ApiOperation("회원가입")
    @PostMapping("/signup")
    @ResponseStatus(HttpStatus.CREATED)
    public SignInResponse signUp(@Valid @RequestBody SignUpRequest request) {
        SignInResponse signInResponse = authService.signUp(request);
        return signInResponse;
    }

    @ApiOperation("로그인")
    @PostMapping("/signIn")
    public SignInResponse signIn(@Valid @RequestBody SignInRequest request) {
        return authService.signIn(request);
    }
}