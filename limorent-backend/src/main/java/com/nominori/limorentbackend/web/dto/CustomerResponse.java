package com.nominori.limorentbackend.web.dto;

import lombok.Value;

import java.io.Serializable;

/**
 * DTO for {@link com.nominori.limorentbackend.model.entity.Customer}
 */
@Value
public class CustomerResponse implements Serializable {
    Long id;
    String firstName;
    String lastName;
    String email;
    String phoneNumber;
    String specialRequests;
    VehicleResponse selectedVehicle;
    String generatedOffer;
}