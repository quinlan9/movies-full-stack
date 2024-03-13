package qin.fei.movies.security;

import java.util.ArrayList;

import org.slf4j.LoggerFactory;
import org.slf4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import qin.fei.movies.repository.UserRepository;

@Service
public class CustomUserDetailsService implements UserDetailsService{
	
	private static final Logger log = LoggerFactory.getLogger(CustomUserDetailsService.class);
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException{
		log.info("Loading user by username: {}", username);
		qin.fei.movies.model.User user =userRepository.findByUsername(username)
				.orElseThrow(() -> new UsernameNotFoundException("User not found with username:" + username));
		
		log.info("User found: {}", user.getUsername());
		return User.builder()
				.username(user.getUsername())
				.password(user.getPassword())
				.authorities(new ArrayList<>())
				.build();
	}
	
}
