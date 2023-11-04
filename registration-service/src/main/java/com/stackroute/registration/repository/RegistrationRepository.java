package com.stackroute.registration.repository;


import com.stackroute.registration.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RegistrationRepository extends MongoRepository<User, String> {
    User findByEmail(String email);
    User deleteByEmail(String email);
}

