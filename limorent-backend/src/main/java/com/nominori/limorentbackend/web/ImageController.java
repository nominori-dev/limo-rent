package com.nominori.limorentbackend.web;

import com.nominori.limorentbackend.model.entity.Image;
import com.nominori.limorentbackend.service.ImageService;
import com.nominori.limorentbackend.web.dto.ImageDto;
import lombok.RequiredArgsConstructor;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/image")
public class ImageController {

    private final ImageService imageService;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ImageDto uploadImage(@RequestParam MultipartFile file) throws IOException {
        Image image = imageService.storeImage(ImageDto.toEntity(file));
        return ImageDto.toDto(image);
    }

    @GetMapping(value = "/{imageId}", produces = MediaType.IMAGE_JPEG_VALUE)
    public Resource downloadImage(@PathVariable Long imageId) throws IOException {
        byte[] image = imageService.getImageById(imageId).getContent();
        return new ByteArrayResource(image);
    }

}
