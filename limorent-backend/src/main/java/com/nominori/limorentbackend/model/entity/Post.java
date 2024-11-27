package com.nominori.limorentbackend.model.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@Entity
@Table(name = "post")
public class Post {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name = "post_title")
    private String title;

    @Column(name = "post_category")
    private String category;

    @Column(name = "post_content", columnDefinition = "TEXT")
    private String content; // MDX content stored here

    @Column(name = "post_slug")
    private String slug;

    @Column(name = "post_meta_title")
    private String metaTitle;

    @Column(name = "post_meta_description")
    private String metaDescription;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "post_created_at")
    private Date createdAt = new Date();

}

