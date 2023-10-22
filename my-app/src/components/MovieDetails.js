import React, {useState} from 'react';
import Button from '../common/Button'

function MovieDetails(props) {

    return (
        <>
            <div className="movies-wrapper">
                {props.movies.map((movie) => (
                    movie.title === props.targetMovie && (
                    <div className="movie-tile" data-testid="movieTitleDetail" key={movie.title}>
                        <img src={movie.imageUrl} alt={movie.name} />
                        <h2>{movie.title}</h2>
                        <p>{movie.release_date}</p>
                        <p>{movie.genres}</p>
                        <p>{movie.duration}</p>
                        <p>{movie.description}</p>
                        <p>{movie.rating}</p>
                    </div>

                    )
                ))}
            </div>
        </>
    );
}

export default MovieDetails;