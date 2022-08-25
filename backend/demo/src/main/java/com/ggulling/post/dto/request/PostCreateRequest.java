package com.ggulling.post.dto.request;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotBlank;

@Getter
@NoArgsConstructor(access = AccessLevel.PRIVATE)
public class PostCreateRequest {
    @NotBlank
    private String title;
    private String content;

    @Builder
    public PostCreateRequest(String title, String content) {
        this.title = title;
        this.content = content;
    }
}
