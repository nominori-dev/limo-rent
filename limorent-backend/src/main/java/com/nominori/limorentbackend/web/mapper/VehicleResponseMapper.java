package com.nominori.limorentbackend.web.mapper;

import com.nominori.limorentbackend.model.entity.Vehicle;
import com.nominori.limorentbackend.web.dto.VehicleResponse;
import org.mapstruct.*;

@Mapper(unmappedTargetPolicy = ReportingPolicy.IGNORE, componentModel = MappingConstants.ComponentModel.SPRING)
public interface VehicleResponseMapper {
    Vehicle toEntity(VehicleResponse vehicleResponse);

    VehicleResponse toDto(Vehicle vehicle);

    @BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
    Vehicle partialUpdate(VehicleResponse vehicleResponse, @MappingTarget Vehicle vehicle);
}