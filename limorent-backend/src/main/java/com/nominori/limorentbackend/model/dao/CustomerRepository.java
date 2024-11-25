package com.nominori.limorentbackend.model.dao;

import com.nominori.limorentbackend.model.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepository extends JpaRepository<Customer, Long> {
}