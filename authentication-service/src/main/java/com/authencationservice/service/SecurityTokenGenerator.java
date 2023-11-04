package com.authencationservice.service;

import java.util.Map;
import java.lang.String;
import com.authencationservice.model.UserDao;

public interface SecurityTokenGenerator {
	
	public Map<String, String> generateToken(UserDao userDao);

}
