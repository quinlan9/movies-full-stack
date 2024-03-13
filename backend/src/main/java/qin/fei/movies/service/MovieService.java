package qin.fei.movies.service;

import java.util.List;
import java.util.Optional;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import qin.fei.movies.model.Movie;
import qin.fei.movies.repository.MovieRepository;

@Service
public class MovieService {
 
	@Autowired
	//like the signal to Spring"plz provide movierepository here"
	private MovieRepository movieRepository;
		
	
	public List<Movie> allMovies(){
		return movieRepository.findAll();
	}
	
	public Optional<Movie> singleMovie(String imdbId) {
		return movieRepository.findMovieByImdbId(imdbId);
	}
	
	public List<Movie> searchMovies(String query){
		return movieRepository.findByTitleContainingIgnoreCase(query);
	}
}
