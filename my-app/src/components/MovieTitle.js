import React, {useState} from 'react';
import MovieDetails from "./MovieDetails";

function MovieTitle({moviesArray, onClick}) {
    // const genresArray = props.genresArray;

    const [movies, setGenres] = useState(moviesArray);
    const [targetMovie, setTargetMovie] = useState();
    const [showMovieDetails, setMovieDetails] = useState(false);

    const handleClick = (movie) => {
        setMovieDetails(true);
        setTargetMovie(movie)
        console.log(movie)
    };

    return (
        <>
            {showMovieDetails && <MovieDetails  movies={movies} targetMovie={targetMovie}/>}
            <div className="movies-wrapper">
                {movies.map((movie) => (
                    <div onClick={(e)=> handleClick(movie.name)} key={movie.name} data-testid="movieTile" className="movie-tile">
                        <img src={movie.imageUrl} alt={movie.name} />
                        <h2>{movie.name}</h2>
                        <p>{movie.releaseYear}</p>
                        <p>{movie.genres}</p>
                    </div>
                ))}
            </div>
        </>
    );
}

export default MovieTitle;