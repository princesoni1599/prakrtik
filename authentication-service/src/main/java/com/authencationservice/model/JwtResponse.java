package com.authencationservice.model;

import java.io.Serializable;
import java.lang.String;
public class JwtResponse implements Serializable {

	private static final long serialVersionUID = -8091879091924046844L;
	private final String jwt;
	public JwtResponse(String jwt) {
		super();
		this.jwt = jwt;
	}

	public String getJwt() {
		return jwt;
	}	
}


