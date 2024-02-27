package qin.fei.movies;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class MoviesApplication {

	public static void main(String[] args) {
		SpringApplication.run(MoviesApplication.class, args);
	}

	//this annotation lets map HTTP GET requests onto specific handler methods. 
	//this methods will  handle all GET requests that are sent to the root URL("/")   here it is http://localhost:8080
	@GetMapping("/")
	//if it is GetMapping("/root")
	//"/" indicate the root or base path of the application.
	public String apiRoot() {
		return "hello ,world" ;
	}
}
