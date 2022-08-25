package com.ggulling.post.dto.response;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Getter
@NoArgsConstructor(access = AccessLevel.PRIVATE)
public class PostListResponse {
    private List<PostResponse> posts = new ArrayList<>();

    public PostListResponse(List<PostResponse> posts) {
        this.posts.addAll(posts);
    }
}
