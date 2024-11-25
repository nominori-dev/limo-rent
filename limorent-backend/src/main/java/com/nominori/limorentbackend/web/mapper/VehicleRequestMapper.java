package com.nominori.limorentbackend.web.mapper;

import com.nominori.limorentbackend.model.entity.Vehicle;
import com.nominori.limorentbackend.web.dto.VehicleRequest;
import org.mapstruct.*;

@Mapper(unmappedTargetPolicy = ReportingPolicy.IGNORE, componentModel = MappingConstants.ComponentModel.SPRING)
public interface VehicleRequestMapper {

    Vehicle toEntity(VehicleRequest vehicleRequest);

    VehicleRequest toDto(Vehicle vehicle);

    @BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
    Vehicle partialUpdate(VehicleRequest vehicleRequest, @MappingTarget Vehicle vehicle);
}