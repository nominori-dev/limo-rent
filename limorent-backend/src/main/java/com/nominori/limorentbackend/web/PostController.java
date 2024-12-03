package com.nominori.limorentbackend.web;

import com.nominori.limorentbackend.model.entity.Post;
import com.nominori.limorentbackend.service.PostService;
import com.nominori.limorentbackend.web.dto.PostRequest;
import com.nominori.limorentbackend.web.dto.PostResponse;
import com.nominori.limorentbackend.web.mapper.PostRequestMapper;
import com.nominori.limorentbackend.web.mapper.PostResponseMapper;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/post")
@RequiredArgsConstructor
@Tag(name = "Post API", description = "API for managing blog posts.")
public class PostController {

    private final PostService postService;
    private final PostRequestMapper requestMapper;
    private final PostResponseMapper responseMapper;

    @Operation(
            summary = "Create a new post",
            description = "Create a new blog post by providing the necessary details."
    )
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public PostResponse createPost(
            @RequestBody
            @Parameter(description = "The details of the post to be created.", required = true) PostRequest request) {
        Post post = requestMapper.toEntity(request);
        return responseMapper.toDto(postService.createPost(post));
    }

    @Operation(
            summary = "Get all posts",
            description = "Retrieve a list of all available blog posts."
    )
    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<PostResponse> getPosts(@RequestParam(required = false) String category) {

        if(category == null) {
            return postService.getAllPosts()
                    .stream()
                    .map(responseMapper::toDto)
                    .toList();
        } else {
            return postService.getPostsByCategory(category)
                    .stream()
                    .map(responseMapper::toDto)
                    .toList();
        }

    }



    @Operation(
            summary = "Get a post by slug",
            description = "Retrieve the details of a specific blog post using its slug."
    )
    @Parameter(name = "slug", description = "The unique slug of the blog post.", required = true)
    @GetMapping("/{slug}")
    @ResponseStatus(HttpStatus.OK)
    public PostResponse getPost(@PathVariable String slug) {
        return responseMapper.toDto(postService.getPostBySlug(slug));
    }

    @Operation(
            summary = "Update a post",
            description = "Update the details of an existing blog post by providing its ID and updated details."
    )
    @Parameter(name = "id", description = "The ID of the blog post to update.", required = true)
    @PutMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public PostResponse updatePost(
            @PathVariable Long id,
            @RequestBody
            @Parameter(description = "The updated details of the blog post.", required = true) PostRequest updatedPost) {
        return responseMapper.toDto(postService.updatePost(id, requestMapper.toEntity(updatedPost)));
    }

    @Operation(
            summary = "Delete a post",
            description = "Delete a specific blog post by providing its ID."
    )
    @Parameter(name = "id", description = "The ID of the blog post to delete.", required = true)
    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public void deletePost(@PathVariable Long id) {
        postService.deletePost(id);
    }
}
