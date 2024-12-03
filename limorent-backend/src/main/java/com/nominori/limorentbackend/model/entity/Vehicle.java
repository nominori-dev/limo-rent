package com.nominori.limorentbackend.model.entity;

import com.nominori.limorentbackend.model.VehicleClass;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "vehicle")
@NoArgsConstructor
public class Vehicle {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name = "vehicle_name")
    private String vehicleName;

    @Column(name = "vehicle_class")
    @Enumerated(EnumType.STRING)
    private VehicleClass vehicleClass;

    @Column(name = "vehicle_description", columnDefinition = "CLOB")
    private String vehicleDescription;

    @Column(name = "vehicle_luggage")
    private Long vehicleLuggage;

    @Column(name = "vehicle_passenger")
    private Long vehiclePassenger;

    public Vehicle(String vehicleName, VehicleClass vehicleClass, String vehicleDescription, Long vehicleLuggage, Long vehiclePassenger) {
        this.vehicleName = vehicleName;
        this.vehicleClass = vehicleClass;
        this.vehicleDescription = vehicleDescription;
        this.vehicleLuggage = vehicleLuggage;
        this.vehiclePassenger = vehiclePassenger;
    }
}