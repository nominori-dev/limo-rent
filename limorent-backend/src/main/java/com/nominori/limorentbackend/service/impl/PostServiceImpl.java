package com.nominori.limorentbackend.service.impl;

import com.nominori.limorentbackend.exception.ResourceNotFoundException;
import com.nominori.limorentbackend.model.dao.PostRepository;
import com.nominori.limorentbackend.model.entity.Post;
import com.nominori.limorentbackend.service.PostService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
@RequiredArgsConstructor
public class PostServiceImpl implements PostService {

    private final PostRepository postRepository;


    @Override
    public Post createPost(Post post) {
        return postRepository.save(post);
    }

    @Override
    public List<Post> getAllPosts() {
        return postRepository.findAll();
    }

    @Override
    public Post getPostById(Long id) {
        return postRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Post by provided ID is not found"));
    }

    @Override
    public Post updatePost(Long id, Post updatedPost) {
        Post post = getPostById(id);
        post.setTitle(updatedPost.getTitle());
        post.setContent(updatedPost.getContent());
        post.setSlug(updatedPost.getSlug());
        post.setMetaTitle(updatedPost.getMetaTitle());
        post.setMetaDescription(updatedPost.getMetaDescription());

        return postRepository.save(post);
    }

    @Override
    public void deletePost(Long id) {
        postRepository.deleteById(id);
    }

    @Override
    public Post getPostBySlug(String slug) {
        return postRepository.findBySlug(slug)
                .orElseThrow(() -> new ResourceNotFoundException("Post by provided ID is not found"));
    }
}
