package com.nominori.limorentbackend.web.mapper;

import com.nominori.limorentbackend.model.entity.Post;
import com.nominori.limorentbackend.web.dto.PostRequest;
import org.mapstruct.*;

@Mapper(unmappedTargetPolicy = ReportingPolicy.IGNORE, componentModel = MappingConstants.ComponentModel.SPRING)
public interface PostRequestMapper {
    Post toEntity(PostRequest postRequest);

    PostRequest toDto(Post post);

    @BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
    Post partialUpdate(PostRequest postRequest, @MappingTarget Post post);
}