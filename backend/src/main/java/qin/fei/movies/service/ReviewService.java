package qin.fei.movies.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;

import qin.fei.movies.model.Movie;
import qin.fei.movies.model.Review;
import qin.fei.movies.repository.ReviewRepository;

@Service
public class ReviewService {
	@Autowired
	private ReviewRepository reviewRepository;
	
	@Autowired
	private MongoTemplate mongoTemplate;
	public Review createReview(String reviewBody, String imdbId) {
		//create a new review
		Review review = reviewRepository.insert(new Review(reviewBody));
		//associate it to one of the movies
		mongoTemplate.update(Movie.class)
		.matching(Criteria.where("imdbId").is(imdbId))
		.apply(new Update().push("reviewIds").value(review))
		.first();
		
		return review;
	}
}
