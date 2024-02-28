package com.stackroute.registration.controller;

import com.stackroute.registration.exception.UserAlreadyExistException;
import com.stackroute.registration.exception.UserNotFoundException;
import com.stackroute.registration.model.User;
import com.stackroute.registration.service.RegistrationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1")

public class RegistrationController {
    private RegistrationService registrationService;
    private ResponseEntity responseEntity;

    @Autowired
    public RegistrationController (RegistrationService registrationService) {
        this.registrationService = registrationService;
    }

    @PostMapping("/registeruser")
    public ResponseEntity<User> registerUser(@RequestBody User user) throws UserAlreadyExistException {
    return new ResponseEntity<>(registrationService.registerUser(user), HttpStatus.CREATED);

    }

    @PutMapping("/update/{email}")
    public ResponseEntity<?> updateregisterUser(@RequestBody User user,@PathVariable String email) {

        User updateRTP=this.registrationService.updateregisterUser(user,email);
        return ResponseEntity.ok(updateRTP);
    }

    @DeleteMapping("/delete/{email}")
    public ResponseEntity <?> deleteregisterUser(@PathVariable("email") String email){
        this.registrationService.deleteregisterUser(email);
        return ResponseEntity.ok("Profile deleted successfully");
    }

    @GetMapping("/get/{email}")
    public ResponseEntity<?> getregisterUser(@PathVariable("email") String email) throws Exception {

        User getRTP = this.registrationService.getregisterUser(email);
        if (getRTP == null) {
            throw new UserNotFoundException("User not available !!");
        }
        return new ResponseEntity<>(registrationService.getregisterUser(email), HttpStatus.OK);
    }

    // for get all register
    @GetMapping("/ListofAllUser")
    public ResponseEntity<List<User>> getAll() {
        return new ResponseEntity<>(registrationService.getAllUser(), HttpStatus.OK);
    }
}
