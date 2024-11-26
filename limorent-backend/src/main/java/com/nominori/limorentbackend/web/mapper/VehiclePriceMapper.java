package com.nominori.limorentbackend.web.mapper;

import com.nominori.limorentbackend.model.entity.VehiclePrice;
import com.nominori.limorentbackend.web.dto.VehiclePriceResponse;
import org.mapstruct.*;

@Mapper(unmappedTargetPolicy = ReportingPolicy.IGNORE, componentModel = MappingConstants.ComponentModel.SPRING)
public interface VehiclePriceMapper {
    VehiclePrice toEntity(VehiclePriceResponse vehiclePriceResponse);

    VehiclePriceResponse toDto(VehiclePrice vehiclePrice);

    @BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
    VehiclePrice partialUpdate(VehiclePriceResponse vehiclePriceResponse, @MappingTarget VehiclePrice vehiclePrice);
}