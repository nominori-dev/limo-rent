package com.nominori.limorentbackend.model.entity;

import com.nominori.limorentbackend.model.ImageType;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@Entity
@Table(name = "vehicle_image")
@NoArgsConstructor
public class VehicleImage {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    @ManyToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name = "vehicle_id")
    private Vehicle vehicle;

    @Enumerated(EnumType.STRING)
    @Column(name = "image_type", nullable = false)
    private ImageType imageType;

    @Column(name = "image_url")
    private String imageUrl;

    @Column(name = "image_alt")
    private String imageAlt;

    public VehicleImage(Vehicle vehicle, ImageType imageType, String imageUrl, String imageAlt) {
        this.vehicle = vehicle;
        this.imageType = imageType;
        this.imageUrl = imageUrl;
        this.imageAlt = imageAlt;
    }
}
