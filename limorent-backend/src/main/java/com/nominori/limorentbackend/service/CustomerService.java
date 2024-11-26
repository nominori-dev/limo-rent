package com.nominori.limorentbackend.service;

import com.nominori.limorentbackend.model.entity.Customer;
import com.nominori.limorentbackend.web.dto.OfferRequest;

public interface CustomerService {
    Customer generateOffer(OfferRequest offerRequest);
}
