package com.nominori.limorentbackend.service;

import com.nominori.limorentbackend.model.entity.Customer;
import com.nominori.limorentbackend.web.dto.OfferRequest;

import java.util.List;

public interface CustomerService {
    Customer generateOffer(OfferRequest offerRequest);
    List<Customer> getCustomers();
    Customer getCustomerById(long id);
    List<Customer> getCustomerByEmail(String email);
    void deleteById(Long id);
}
