package com.stackroute.registration.exception;

public class UserAlreadyExistException extends Exception{

    public UserAlreadyExistException(String message) {
        super(message);
    }
    public UserAlreadyExistException(String message, Throwable throwable) {
        super(message, throwable);
    }
}
