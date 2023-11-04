package com.stackroute.customerservice.exception;

public class ProductIsNotAvailableException extends Exception{
    public ProductIsNotAvailableException(String message){
        super(message);
    }
}
