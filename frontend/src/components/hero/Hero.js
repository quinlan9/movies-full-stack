import './Hero.css';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import {Link, useNavigate} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { useEffect } from 'react';

const Hero = ({movies}) => {
  console.log("Hero 组件渲染");

  const navigate = useNavigate();

    function reviews(movieId)
    {
        navigate(`/Reviews/${movieId}`);
    }

    useEffect(() => {
      console.log('Hero组件接收到的movies状态:', movies);
    }, [movies]);

  return (
    <div className='movie-carousel-contanier' >
      <Carousel>
        {
          movies && movies.map((movie) =>{
            // 打印出图片的 URL
            console.log(movie.backdrops[0]); 
              return (
                <Paper key={movie.imdbId}>
                  <div className='movie-card-contanier'>
                    <div className="movie-card" style={{backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,1)), url(${movie.backdrops[0]})`}}>  
                      <div className="movie-detail">
                          <div className="movie-poster">
                            <img src={movie.poster} alt="" />
                          </div>
                          <div className="movie-title">
                              <h4>{movie.title}</h4>
                          </div>
                         <div className="movie-buttons-container">
                                        <Link to={`/Trailer/${movie.trailerLink.substring(movie.trailerLink.length - 11)}`}>
                                            <div className="play-button-icon-container">
                                                <FontAwesomeIcon className="play-button-icon"
                                                    icon = {faCirclePlay}
                                                />
                                            </div>
                                        </Link>

                                        <div className="movie-review-button-container">
                                            <Button variant ="info" onClick={() => reviews(movie.imdbId)} >Reviews</Button>
                                        </div>
              </div>
                      </div>
                    </div>
                  </div>
                </Paper>
              )
          })
        }
      </Carousel>
    </div>
  )
}

export default Hero
