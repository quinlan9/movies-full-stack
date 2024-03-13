package qin.fei.movies.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import qin.fei.movies.model.User;

public interface UserRepository extends MongoRepository <User,String>{
	Optional<User> findByUsername(String username);
}


