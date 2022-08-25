package com.ggulling.common;

import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.util.ArrayList;
import java.util.List;

@Configuration
@RequiredArgsConstructor
public class WebConfig implements WebMvcConfigurer {
    private List<String> whiteList = new ArrayList<>();

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        whiteList.addAll(List.of("/css/**", "/*.ico", "/error", "/refresh", "/docs/**", "/signIn",
                "/api/v1/auth/all",
                "/api/v1/farm/**",
                "/api/v1/history/**",
                "/api/v1/sharing/**",
                "/api/v1/user/**"));
    }

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("http://localhost:3000", "https://g9ulling.run.goorm.io")
                .allowedMethods("GET", "POST", "PATCH", "DELETE", "OPTIONS")
                .allowCredentials(true);
    }
}
