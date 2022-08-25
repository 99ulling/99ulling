package com.ggulling.post;

import com.ggulling.post.dto.request.PostCreateRequest;
import com.ggulling.post.dto.response.PostListResponse;
import com.ggulling.post.dto.response.PostResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
@RequiredArgsConstructor
public class PostService {
    private final PostRepository postRepository;

    public final void createPost(PostCreateRequest request) {
        Post post = Post.newInstance(request.getTitle(), request.getContent());
        postRepository.save(post);
    }

    public final PostResponse getPostById(final Long postId) {
        final Post post = postRepository.findById(postId)
                .orElseThrow(NotExistsPostException::new);
        return PostResponse.of(post);
    }

    public final PostListResponse getAllPosts() {
        List<Post> posts = postRepository.findAll();

        return new PostListResponse(posts.stream()
                .map(PostResponse::of)
                .collect(Collectors.toList()));
    }

}