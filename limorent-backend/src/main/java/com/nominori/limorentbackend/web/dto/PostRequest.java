package com.nominori.limorentbackend.web.dto;

import com.nominori.limorentbackend.model.entity.Post;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;
import lombok.Value;

import java.io.Serializable;

/**
 * DTO for {@link Post}
 */
@Value
public class PostRequest implements Serializable {

    @Size(message = "Title must be between 1 and 255", min = 1, max = 255)
    @NotEmpty(message = "Title can't be empty")
    @NotBlank(message = "Title can't be blank")
    String title;
    String content;
    @NotEmpty
    @NotBlank
    String slug;
    @NotEmpty
    @NotBlank
    String metaTitle;
    @NotEmpty
    @NotBlank
    String metaDescription;
}