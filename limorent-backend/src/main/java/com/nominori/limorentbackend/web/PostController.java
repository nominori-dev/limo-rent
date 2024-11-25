package com.nominori.limorentbackend.web;

import com.nominori.limorentbackend.model.entity.Post;
import com.nominori.limorentbackend.service.PostService;
import com.nominori.limorentbackend.web.dto.PostRequest;
import com.nominori.limorentbackend.web.dto.PostResponse;
import com.nominori.limorentbackend.web.mapper.PostRequestMapper;
import com.nominori.limorentbackend.web.mapper.PostResponseMapper;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/post/")
@RequiredArgsConstructor
@Tag(name = "Post API")
public class PostController {

    private final PostService postService;
    private final PostRequestMapper requestMapper;
    private final PostResponseMapper responseMapper;

    // #TODO Add authorization to post creation

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public PostResponse createPost(@RequestBody PostRequest request) {
        Post post = requestMapper.toEntity(request);
        return responseMapper.toDto(postService.createPost(post));
    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<PostResponse> getPosts() {
        return postService.getAllPosts()
                .stream()
                .map(responseMapper::toDto)
                .collect(Collectors.toList());
    }

    @GetMapping("/{slug}")
    @ResponseStatus(HttpStatus.OK)
    public PostResponse getPost(@PathVariable String slug) {
        return responseMapper.toDto(postService.getPostBySlug(slug));
    }

    @PutMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public PostResponse updatePost(@PathVariable Long id, @RequestBody PostRequest updatedPost) {
        return responseMapper.toDto(postService.updatePost(id, requestMapper.toEntity(updatedPost)));
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public void deletePost(@PathVariable Long id) {
        postService.deletePost(id);
    }


}
