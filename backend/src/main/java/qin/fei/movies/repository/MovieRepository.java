package qin.fei.movies.repository;

import java.util.List;
import java.util.Optional;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import qin.fei.movies.model.Movie;

@Repository
public interface MovieRepository extends MongoRepository<Movie,ObjectId>{
	Optional<Movie> findMovieByImdbId(String imdbId);
	
	//查找标题中包含查询词的电影
	List<Movie> findByTitleContainingIgnoreCase(String title);

}
