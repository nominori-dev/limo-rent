package com.nominori.limorentbackend.web.mapper;

import com.nominori.limorentbackend.model.entity.VehiclePrice;
import com.nominori.limorentbackend.web.dto.VehiclePriceRequest;
import org.mapstruct.*;

@Mapper(unmappedTargetPolicy = ReportingPolicy.IGNORE, componentModel = MappingConstants.ComponentModel.SPRING)
public interface VehiclePriceRequestMapper {
    VehiclePrice toEntity(VehiclePriceRequest vehiclePriceRequest);

    VehiclePriceRequest toDto(VehiclePrice vehiclePrice);

    @BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
    VehiclePrice partialUpdate(VehiclePriceRequest vehiclePriceRequest, @MappingTarget VehiclePrice vehiclePrice);
}