package com.nominori.limorentbackend.web;

import com.nominori.limorentbackend.service.CustomerService;
import com.nominori.limorentbackend.web.dto.CustomerResponse;
import com.nominori.limorentbackend.web.dto.OfferRequest;
import com.nominori.limorentbackend.web.mapper.CustomerMapper;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/customer")
@RequiredArgsConstructor
@Tag(name = "Customer API", description = "API for handling customer-related operations, including generating offers.")
public class CustomerController {

    private final CustomerService customerService;
    private final CustomerMapper customerMapper;

    @Operation(
            summary = "Generate a rental offer",
            description = "Generates a rental offer for a customer based on the provided vehicle selection and customer details."
    )
    @PostMapping("/offer")
    @ResponseStatus(HttpStatus.CREATED)
    public void generateOffer(
            @RequestBody
            @Parameter(description = "The details required to generate an offer, including selected vehicle and customer contact information.", required = true)
            OfferRequest request) {
        customerService.generateOffer(request);
    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<CustomerResponse> getCustomers() {
        return customerService.getCustomers().stream().map(customerMapper::toDto).collect(Collectors.toList());
    }

    @GetMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public CustomerResponse getCustomerById(@PathVariable Long id) {
        return customerMapper.toDto(customerService.getCustomerById(id));
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public void deleteCustomer(@PathVariable Long id) {
        customerService.deleteById(id);
    }
}
