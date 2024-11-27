package com.nominori.limorentbackend.web.mapper;

import com.nominori.limorentbackend.model.entity.VehicleImage;
import com.nominori.limorentbackend.web.dto.VehicleImageResponse;
import org.mapstruct.*;

@Mapper(unmappedTargetPolicy = ReportingPolicy.IGNORE, componentModel = MappingConstants.ComponentModel.SPRING)
public interface VehicleImageMapper {
    VehicleImage toEntity(VehicleImageResponse vehicleImageResponse);

    VehicleImageResponse toDto(VehicleImage vehicleImage);

    @BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
    VehicleImage partialUpdate(VehicleImageResponse vehicleImageResponse, @MappingTarget VehicleImage vehicleImage);
}