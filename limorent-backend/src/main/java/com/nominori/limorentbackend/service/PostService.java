package com.nominori.limorentbackend.service;

import com.nominori.limorentbackend.model.entity.Post;

import java.util.List;
import java.util.Optional;

public interface PostService {

    Post createPost(Post post);

    List<Post> getAllPosts();

    Optional<Post> getPostById(Long id);

    Post updatePost(Long id, Post updatedPost);

    void deletePost(Long id);
}
