import React, {useState} from 'react';
import MovieDetails from "./MovieDetails";

function MovieTitle(props) {
    const clickByMove = (movie) => {
        props.onClickByMove(movie, 'true')
    };

    return (
        <>
            <div className="movies-wrapper">
                {props.moviesArray.map((movie) => (
                    <div onClick={(e)=> clickByMove(movie.title)} key={movie.title} data-testid="movieTile" className="movie-tile">
                        <img src={movie.poster_path} alt={movie.title} />
                        <h2>{movie.title}</h2>
                        <p>{movie.release_date}</p>
                        <p>{movie.genres}</p>
                    </div>
                ))}
            </div>
        </>
    );
}

export default MovieTitle;