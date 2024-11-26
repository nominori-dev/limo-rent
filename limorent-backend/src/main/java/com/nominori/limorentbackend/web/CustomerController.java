package com.nominori.limorentbackend.web;

import com.nominori.limorentbackend.service.CustomerService;
import com.nominori.limorentbackend.web.dto.OfferRequest;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/customer")
@RequiredArgsConstructor
@Tag(name = "Customer API", description = "API for handling customer-related operations, including generating offers.")
public class CustomerController {

    private final CustomerService customerService;

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
}
