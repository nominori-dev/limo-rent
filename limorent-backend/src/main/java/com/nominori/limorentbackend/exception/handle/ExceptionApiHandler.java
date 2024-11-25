package com.nominori.limorentbackend.exception.handle;

import com.nominori.limorentbackend.exception.IncorrectPasswordException;
import com.nominori.limorentbackend.exception.ResourceNotFoundException;
import com.nominori.limorentbackend.exception.UnsupportedStatusException;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import com.nominori.limorentbackend.exception.dto.ErrorResponse;


@RestControllerAdvice
public class ExceptionApiHandler {

    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(IncorrectPasswordException.class)
    public ErrorResponse handleIncorrectPasswordException(IncorrectPasswordException ex) {
        return new ErrorResponse(ex.getMessage(), HttpStatus.BAD_REQUEST.value());
    }

    @ResponseStatus(HttpStatus.NOT_FOUND)
    @ExceptionHandler(ResourceNotFoundException.class)
    public ErrorResponse handleResourceNotFoundException(ResourceNotFoundException ex) {
        return new ErrorResponse(ex.getMessage(), HttpStatus.NOT_FOUND.value());
    }

    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(UnsupportedStatusException.class)
    public ErrorResponse handleUnsupportedStatusException(UnsupportedStatusException ex) {
        return new ErrorResponse(ex.getMessage(), HttpStatus.BAD_REQUEST.value());
    }

}
