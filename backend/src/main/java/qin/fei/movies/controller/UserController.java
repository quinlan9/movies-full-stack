package qin.fei.movies.controller;



import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import qin.fei.movies.model.User;
import qin.fei.movies.repository.UserRepository;


@RestController
@RequestMapping("api/v1/users")
public class UserController {

	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@PostMapping("/register")
	public ResponseEntity<?> register(@RequestBody User user){
		Optional<User> existingUser = userRepository.findByUsername(user.getUsername());
		if(existingUser.isPresent()) {
			return ResponseEntity.badRequest().body("Error:username is already taken");
		}
		
		//if username not exist. continue register
		user.setPassword(passwordEncoder.encode(user.getPassword()));
		userRepository.save(user);
		return ResponseEntity.ok("User register successfully");
	}		
}

