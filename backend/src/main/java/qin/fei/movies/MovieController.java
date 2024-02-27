package qin.fei.movies;

import java.util.List;
import java.util.Optional;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/movies")
@CrossOrigin(origins = "*")
//set the base path for request mapping within this controller. 
//every request mapping path in this controller will be prefixed with 'api/v1/movies'
public class MovieController {
	
	@Autowired
	private MovieService movieService;
	

	
	@GetMapping
	//It's a composed annotation that acts as a shortcut for
	//@RequestMapping(method = RequestMethod.GET)
	public ResponseEntity<List<Movie>> getAllMovies() {
		return new ResponseEntity<List<Movie>>(movieService.allMovies(),HttpStatus.OK);
		//httpstatus.ok means 200
	}
	
	@GetMapping("/{imdbId}")
	//search a movie by its id
	public ResponseEntity<Optional<Movie>> getSingleMovie(@PathVariable String imdbId){
		return new ResponseEntity<Optional<Movie>>(movieService.singleMovie(imdbId),HttpStatus.OK);
	}
	

  
	
	
}
