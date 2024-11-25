package com.nominori.limorentbackend.web.mapper;

import com.nominori.limorentbackend.model.entity.Customer;
import com.nominori.limorentbackend.web.dto.CustomerResponse;
import org.mapstruct.*;

@Mapper(unmappedTargetPolicy = ReportingPolicy.IGNORE, componentModel = MappingConstants.ComponentModel.SPRING, uses = {VehicleResponseMapper.class})
public interface CustomerMapper {
    Customer toEntity(CustomerResponse customerResponse);

    CustomerResponse toDto(Customer customer);

    @BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
    Customer partialUpdate(CustomerResponse customerResponse, @MappingTarget Customer customer);
}