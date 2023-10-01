import React, {useState} from 'react';
import Button from '../common/Button'

function MovieDetails(props) {
    // const genresArray = props.genresArray;

    // const [movies, setGenres] = useState(moviesArray);


    return (
        <>
            <div className="movies-wrapper">
                {props.movies.map((movie) => (
                    movie.name === props.targetMovie && (
                    <div className="movie-tile" data-testid="movieTitleDetail" key={movie.name}>
                        <img src={movie.imageUrl} alt={movie.name} />
                        <h2>{movie.name}</h2>
                        <p>{movie.releaseYear}</p>
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