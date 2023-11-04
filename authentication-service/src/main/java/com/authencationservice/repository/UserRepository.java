package com.authencationservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import java.lang.String;
import com.authencationservice.model.UserDao;

public interface UserRepository extends JpaRepository<UserDao, String> {
    UserDao findByEmail(String email);
}

