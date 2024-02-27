package qin.fei.movies;

import java.util.List;
import java.util.Optional;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
	

}
