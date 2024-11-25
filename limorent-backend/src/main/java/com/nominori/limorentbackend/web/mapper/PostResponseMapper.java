package com.nominori.limorentbackend.web.mapper;

import com.nominori.limorentbackend.model.entity.Post;
import com.nominori.limorentbackend.web.dto.PostResponse;
import org.mapstruct.*;

@Mapper(unmappedTargetPolicy = ReportingPolicy.IGNORE, componentModel = MappingConstants.ComponentModel.SPRING)
public interface PostResponseMapper {
    Post toEntity(PostResponse postResponse);

    PostResponse toDto(Post post);

    @BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
    Post partialUpdate(PostResponse postResponse, @MappingTarget Post post);
}