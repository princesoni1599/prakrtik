package com.stackroute.registration.service;

import com.stackroute.registration.model.User;

import com.stackroute.registration.custommessage.CustomMessage;
import com.stackroute.registration.exception.UserAlreadyExistException;
//import com.stackroute.registration.rabbitmq.MessagePublisher;
import com.stackroute.registration.repository.RegistrationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RegistrationServiceImpl implements RegistrationService {

    @Autowired
    private RegistrationRepository registrationRepository;

//    @Autowired
//    MessagePublisher messagePublisher;

    @Autowired
    public RegistrationServiceImpl(RegistrationRepository registrationRepository) {
        this.registrationRepository = registrationRepository;
    }

    @Override
    public User registerUser(User user) throws UserAlreadyExistException {
        Optional<User> userDb = this.registrationRepository.findById(user.getEmail());
        if (userDb.isPresent()){
            throw new UserAlreadyExistException("Record already exists with id : " + user.getEmail());
        }
        else {
//            CustomMessage customMessage=new CustomMessage();
//            customMessage.setEmail(user.getEmail());
//            customMessage.setPassword(user.getPassword());
//            customMessage.setUserRole(user.getUserRole());
//            messagePublisher.sendMessageToRabbitMq(customMessage);
            return registrationRepository.save(user);
        }
    }

    @Override
    public User updateregisterUser(User user, String email) {
        User save=this.registrationRepository.findByEmail(email);
        save.setName(user.getName());
        save.setFirstName(user.getFirstName());
        save.setLastName(user.getLastName());
        save.setDob(user.getDob());
        save.setGender(user.getGender());
        save.setContactNumber(user.getContactNumber());
        save.setUserRole(user.getUserRole());
        save.setAddress(user.getAddress());
        User updated=this.registrationRepository.save(save);
        return updated;
    }

    @Override
    public User deleteregisterUser(String email) {
        return registrationRepository.deleteByEmail(email);
    }

    @Override
    public User getregisterUser(String email) {
        User user=registrationRepository.findByEmail(email);
        return user;
    }

    @Override
    public List<User> getAllUser() {
        List<User> user = this.registrationRepository.findAll();
        return user;
    }

    @Override
    public boolean isUserPresent(String email) {
        User userfound = this.registrationRepository.findByEmail(email);
            if(userfound==null)
            {
                return false;
            }
            return true;
    }

}

