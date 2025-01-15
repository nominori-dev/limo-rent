package com.nominori.limorentbackend.web.dto;

import com.nominori.limorentbackend.model.entity.Image;
import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@Data
public class ImageDto {

    private Long id;
    String name;

    public static ImageDto toDto(Image image) {
        ImageDto dto = new ImageDto();
        dto.setId(image.getId());
        dto.setName(image.getName());
        return dto;
    }

    public static Image toEntity(MultipartFile file) throws IOException {
        Image image = new Image();
        image.setName(file.getName());
        image.setContent(file.getBytes());
        return image;
    }
}
