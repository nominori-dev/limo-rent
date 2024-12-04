package com.nominori.limorentbackend.model.entity;

import com.nominori.limorentbackend.model.VehicleClass;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

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

    @OneToMany(mappedBy = "vehicle", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<VehicleImage> images = new ArrayList<>();

    @OneToMany(mappedBy = "vehicle", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<VehiclePrice> prices = new ArrayList<>();

    public Vehicle(String vehicleName, VehicleClass vehicleClass, String vehicleDescription, Long vehicleLuggage, Long vehiclePassenger) {
        this.vehicleName = vehicleName;
        this.vehicleClass = vehicleClass;
        this.vehicleDescription = vehicleDescription;
        this.vehicleLuggage = vehicleLuggage;
        this.vehiclePassenger = vehiclePassenger;
    }
}