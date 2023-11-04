package com.stackroute.registration.service;

import com.stackroute.registration.exception.UserAlreadyExistException;
import com.stackroute.registration.model.User;

import java.util.List;


public interface RegistrationService {
    User registerUser(User user) throws UserAlreadyExistException;
    User updateregisterUser(User user, String email);
    User deleteregisterUser(String email);
    User getregisterUser(String email) throws Exception;
    List<User> getAllUser();
    boolean isUserPresent(String email);

}
