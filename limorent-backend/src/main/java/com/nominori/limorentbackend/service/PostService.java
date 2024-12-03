package com.nominori.limorentbackend.service;

import com.nominori.limorentbackend.model.entity.Post;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

public interface PostService {

    Post createPost(Post post);

    List<Post> getAllPosts();

    Post getPostById(Long id);

    Post updatePost(Long id, Post updatedPost);

    void deletePost(Long id);

    Post getPostBySlug(String slug);

    List<Post> getPostsByCategory(String category);
}
