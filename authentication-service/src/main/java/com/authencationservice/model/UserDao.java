package com.authencationservice.model;

//import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.lang.String;
@Entity
@Table(name = "user4")
public class UserDao {

	@Id
    
    @Column
    private String email;
    @Column
    private String password;
    private String userRole;

    public UserDao() {
    }

    public UserDao(String email, String password, String userRole) {
        this.email = email;
        this.password = password;
        this.userRole = userRole;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getUserRole() {
        return userRole;
    }

    public void setUserRole(String userRole) {
        this.userRole = userRole;
    }


    @Override
    public String toString() {
        return "UserDao{" +
                "email='" + email + '\'' +
                ", password='" + password + '\'' +
                ", userRole='" + userRole + '\'' +
                '}';
    }
}

