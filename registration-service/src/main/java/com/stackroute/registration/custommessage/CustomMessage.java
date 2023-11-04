package com.stackroute.registration.custommessage;

public class CustomMessage {
    private String email;
    private String password;
    private String userRole;

    public CustomMessage() {
    }

    public CustomMessage(String email, String password, String userRole) {
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
}
