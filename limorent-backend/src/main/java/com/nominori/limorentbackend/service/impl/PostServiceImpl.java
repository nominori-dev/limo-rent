package com.nominori.limorentbackend.service.impl;

import com.nominori.limorentbackend.model.dao.PostRepository;
import com.nominori.limorentbackend.model.entity.Post;
import com.nominori.limorentbackend.service.PostService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
@RequiredArgsConstructor
public class PostServiceImpl implements PostService {

    private final PostRepository postRepository;


    @Override
    public Post createPost(Post post) {



        return null;
    }

    @Override
    public List<Post> getAllPosts() {
        return List.of();
    }

    @Override
    public Optional<Post> getPostById(Long id) {
        return Optional.empty();
    }

    @Override
    public Post updatePost(Long id, Post updatedPost) {
        return null;
    }

    @Override
    public void deletePost(Long id) {

    }
}
