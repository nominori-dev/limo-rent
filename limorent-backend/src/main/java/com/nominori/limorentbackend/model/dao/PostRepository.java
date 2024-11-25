package com.nominori.limorentbackend.model.dao;

import com.nominori.limorentbackend.model.entity.Post;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PostRepository extends JpaRepository<Post, Long> {
}