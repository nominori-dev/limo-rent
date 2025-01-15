package com.nominori.limorentbackend.service;

import com.nominori.limorentbackend.model.entity.Image;

public interface ImageService {
    Image storeImage(Image image);

    Image getImageById(Long id);
}
