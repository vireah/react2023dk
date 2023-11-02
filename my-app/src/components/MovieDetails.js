import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function MovieDetails(props) {
    const { movieId } = useParams();

    const [movie, setMovie] = useState();

    const fetchData = async (movieId, setMovie) => {
        try {
            const response = await axios.get(`http://localhost:4000/movies/` + movieId);
            setMovie(response.data);
        } catch (error) {
            if (axios.isCancel(error)) {
                console.log('Request canceled', error.message);
            } else {
                console.error(error);
            }
        }
    };

    useEffect(() => {
        fetchData(movieId, setMovie);
    }, [movieId]);

    if (movie) {
        const {
            imageUrl,
            release_date,
            genres,
            duration,
            description,
            rating
        } = movie;

        return (
            <div className="movies-wrapper">
                <div className="movie-tile" data-testid="movieTitleDetail" key={movie.title}>
                    <img src={imageUrl} alt={movie.title} />
                    <h2>{movie.title}</h2>
                    <p>{release_date}</p>
                    <p>{genres}</p>
                    <p>{duration}</p>
                    <p>{description}</p>
                    <p>{rating}</p>
                </div>
            </div>
        );
    } else {
        return null;
    }
}

export default MovieDetails;
