package com.nominori.limorentbackend.web.dto;

import lombok.Value;

import java.io.Serializable;
import java.util.Date;

/**
 * DTO for {@link com.nominori.limorentbackend.model.entity.Post}
 */
@Value
public class PostResponse implements Serializable {
    Long id;
    String title;
    String category;
    String content;
    String slug;
    String metaTitle;
    String metaDescription;
    Date createdAt;
}