package com.nominori.limorentbackend.service.impl;

import com.nominori.limorentbackend.exception.ResourceNotFoundException;
import com.nominori.limorentbackend.model.dao.ImageDbRepository;
import com.nominori.limorentbackend.model.entity.Image;
import com.nominori.limorentbackend.service.ImageService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ImageServiceImpl implements ImageService {

    private final ImageDbRepository imageDbRepository;

    @Override
    public Image storeImage(Image image) {
        return imageDbRepository.save(image);
    }

    @Override
    public Image getImageById(Long id) {
        return imageDbRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Image with provided ID is not found."));
    }

}
