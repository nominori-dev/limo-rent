package com.nominori.limorentbackend.service.impl;

import com.nominori.limorentbackend.exception.ResourceNotFoundException;
import com.nominori.limorentbackend.model.dao.CustomerRepository;
import com.nominori.limorentbackend.model.entity.Customer;
import com.nominori.limorentbackend.model.entity.Vehicle;
import com.nominori.limorentbackend.model.entity.VehiclePrice;
import com.nominori.limorentbackend.service.CustomerService;
import com.nominori.limorentbackend.service.VehiclePriceService;
import com.nominori.limorentbackend.service.VehicleService;
import com.nominori.limorentbackend.web.dto.OfferRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CustomerServiceImpl implements CustomerService {

    private final CustomerRepository customerRepository;
    private final VehicleService vehicleService;
    private final VehiclePriceService vehiclePriceService;

    @Override
    public Customer generateOffer(OfferRequest offerRequest) {
        Vehicle vehicle = vehicleService.getById(offerRequest.getVehicleId());
        List<VehiclePrice> priceTable = vehiclePriceService.getByVehicle(vehicle);
        List<String> priceOffer = priceTable
                .stream()
                .map((price) -> price.getPriceTitle() + " " + price.getPrice())
                .toList();

        String offer = buildOfferDetails(offerRequest, vehicle, priceOffer);

        Customer customer = new Customer();
        customer.setGeneratedOffer(offer);
        customer.setFirstName(offerRequest.getFirstName());
        customer.setLastName(offerRequest.getLastName());
        customer.setEmail(offerRequest.getEmail());
        customer.setPhoneNumber(offerRequest.getPhoneNumber());
        customer.setSpecialRequests(offerRequest.getSpecialRequests());
        customer.setSelectedVehicle(vehicle);

        return customerRepository.save(customer);
    }

    @Override
    public List<Customer> getCustomers() {
        return customerRepository.findAll();
    }

    @Override
    public Customer getCustomerById(long id) {
        return customerRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Customer with provided ID not found."));
    }

    @Override
    public List<Customer> getCustomerByEmail(String email) {
        return customerRepository.findByEmail(email);
    }

    @Override
    public void deleteById(Long id) {
        customerRepository.deleteById(id);
    }


    private String buildOfferDetails(OfferRequest request, Vehicle vehicle, List<String> priceTable) {
        return "Dear " + request.getFirstName() + ",\n\n"
                + "Thank you for your interest in renting our vehicle. Below are the details:\n\n"
                + "Vehicle: " + vehicle.getVehicleName() + "\n"
                + "Class: " + vehicle.getVehicleClass() + "\n"
                + "Passengers: " + vehicle.getVehiclePassenger() + "\n"
                + "Luggage Capacity: " + vehicle.getVehicleLuggage() + "\n\n"
                + "Price Table: $" + priceTable.stream().toList() + "\n\n"
                + "We look forward to serving you!\n";
    }
}
