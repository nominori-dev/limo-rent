package com.nominori.limorentbackend.web.dto;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class OfferRequest {

    private String firstName;
    private String lastName;
    private String email;
    private String phoneNumber;
    private String specialRequests;
    private Long vehicleId;

}
