import React from 'react';
import MovieDetails from "./MovieDetails";

function MovieTitle(props) {
    const clickByMove = (movieId) => {
        props.onClickByMove(movieId, 'true')
    };

    const movies = props.moviesArray.data;

    if(movies && movies.length > 0) {
        return (
            <>
                <div className="movies-wrapper">
                    {movies.map((movie) => (
                        <div onClick={(e) => clickByMove(movie.id)} key={movie.title} data-testid="movieTile"
                             className="movie-tile">
                            <img src={movie.poster_path} alt={movie.title}/>
                            <h2>{movie.title}</h2>
                            <p>{movie.release_date}</p>
                            <p>{movie.genres}</p>
                        </div>
                    ))}
                </div>
            </>
        );
    } else {
        return <div>No movies available</div>;
    }
}

export default MovieTitle;