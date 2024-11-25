package com.nominori.limorentbackend.exception.dto;

public record ErrorResponse(String message, int httpStatus) {
}
