package qin.fei.movies;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Document(collection="movies")
//This annotation maps the class to the MongoDB collection named "movies".
//When you save an instance of this class to MongoDB,
//it will be stored in the "movies" collection.
@Data
//Automatically generates getter and setter methods for all fields in the class
//Generates an implementation of the toString() method that prints the class name along with each field name and its value.
@AllArgsConstructor
//automatically generate a constructor takes all this private fields as argument in your class
@NoArgsConstructor
//generate a constructor takes no argument
public class Movie {
	
	@Id
	private ObjectId id;
	
	private String imdbId;
	
	private String title;
	
	private String releaseDate;
	
	private String  trailerLink;
	
	private String poster;
	
	private List<String> genres;
	
	private List<String> backdrops;
	
	@DocumentReference
	//Each Movie document in the movies collection can refer to multiple Review documents.
	//The reviewIds field stores references (usually the IDs) to these Review documents./
	//When you load a Movie object, you have the option to also load its related Review objects, either lazily or eagerly.
	private List<Review> reviewIds;
}
