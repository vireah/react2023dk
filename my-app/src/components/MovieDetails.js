import React, {useEffect, useState} from 'react';
import Button from '../common/Button'
import { useParams } from "react-router-dom";
import axios from "axios";

function MovieDetails(props) {
    const { movieId } = useParams();

    console.log('movieId', movieId);

    const [movie, setMovie] =useState();

    useEffect(() => {
        axios.get(`http://localhost:4000/movies/`+movieId, {
        }).then(response => {
            setMovie(response.data);
            console.log(response.data);
        })
            .catch(error => {
                if (axios.isCancel(error)) {
                    console.log('Request canceled', error.message);
                } else {
                    console.error(error);
                }
            });
    }, []);

    if(movie) {
        return (
            <>
                <div className="movies-wrapper">
                    <div className="movie-tile" data-testid="movieTitleDetail" key={movie.title}>
                        <img src={movie.imageUrl} alt={movie.name}/>
                        <h2>{movie.title}</h2>
                        <p>{movie.release_date}</p>
                        <p>{movie.genres}</p>
                        <p>{movie.duration}</p>
                        <p>{movie.description}</p>
                        <p>{movie.rating}</p>
                    </div>
                </div>
            </>
        );
    }
}

export default MovieDetails;