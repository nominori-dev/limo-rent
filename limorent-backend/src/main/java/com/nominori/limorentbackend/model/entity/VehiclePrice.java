package com.nominori.limorentbackend.model.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "vehicle_price")
@NoArgsConstructor
public class VehiclePrice {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    @ManyToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name = "vehicle_id")
    private Vehicle vehicle;

    @Column(name = "price_title", nullable = false)
    private String priceTitle;

    @Column(name = "price", nullable = false)
    private Long price;

    public VehiclePrice(Vehicle vehicle, String priceTitle, Long price) {
        this.vehicle = vehicle;
        this.priceTitle = priceTitle;
        this.price = price;
    }
}