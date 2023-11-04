package com.authencationservice.service;
import java.lang.String;
import com.authencationservice.controller.UserAlreadyExistException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.authencationservice.exception.UsernameNotFoundException;
import com.authencationservice.model.UserDao;
import com.authencationservice.repository.UserRepository;



@Service
public class JwtUserDetailsService{
	@Autowired
	private UserRepository userDao;

//	@Autowired
//	private PasswordEncoder bcryptEncoder;
//
	public UserDao loadUserByUsername(String email) throws UsernameNotFoundException {
		UserDao user = userDao.findById(email).get();
		if (user == null) {
			throw new UsernameNotFoundException(" UsernameNotFoundException: " + email);
		}
		return user;
				
	}

	public UserDao save(UserDao user) throws UserAlreadyExistException {
		UserDao newUser = new UserDao();
		newUser.setEmail(user.getEmail());
		newUser.setPassword(user.getPassword());
		newUser.setUserRole(user.getUserRole());
		return userDao.save(newUser);

	}


}


