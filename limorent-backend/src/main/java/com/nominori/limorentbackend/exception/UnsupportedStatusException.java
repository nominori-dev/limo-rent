package com.nominori.limorentbackend.exception;

public class UnsupportedStatusException extends RuntimeException{
    public UnsupportedStatusException(String message) {
        super(message);
    }
}
