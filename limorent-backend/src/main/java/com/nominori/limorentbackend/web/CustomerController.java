package com.nominori.limorentbackend.web;


import com.nominori.limorentbackend.service.CustomerService;
import com.nominori.limorentbackend.web.dto.OfferRequest;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/customer")
@RequiredArgsConstructor
@Tag(name = "Customer API")
public class CustomerController {

    private final CustomerService customerService;

    @PostMapping("/offer")
    @ResponseStatus(HttpStatus.CREATED)
    public void generateOffer(@RequestBody OfferRequest request){
        customerService.generateOffer(request);
    }


}
