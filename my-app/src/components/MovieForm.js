import React, { useState } from 'react';

const MovieForm = ({ initialMovieInfo = {}, onSubmit }) => {
    const [movieInfo, setMovieInfo] = useState(initialMovieInfo);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setMovieInfo((prevMovieInfo) => ({ ...prevMovieInfo, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(movieInfo);
    };

    return (
        <form onSubmit={handleSubmit} className="movie-form">
            <label>
                Title:
                <input type="text" name="title" value={movieInfo.title || ''} onChange={handleInputChange} />
            </label>
            <br />
            <label>
                Release date:
                <input type="text" name="releaseDate" value={movieInfo.releaseDate || ''} onChange={handleInputChange} />
            </label>
            <br />
            <label>
                Movie Url:
                <input type="text" name="movieUrl" value={movieInfo.movieUrl || ''} onChange={handleInputChange} />
            </label>
            <label>
                Rating:
                <input type="text" name="rating" value={movieInfo.rating || ''} onChange={handleInputChange} />
            </label>
            <label>
                Genre:
                <input type="text" name="genre" value={movieInfo.genre || ''} onChange={handleInputChange} />
            </label>
            <label>
                Runtime:
                <input type="text" name="runtime" value={movieInfo.runtime || ''} onChange={handleInputChange} />
            </label>
            <label>
                Overview:
                <input type="text" name="overview" value={movieInfo.overview || ''} onChange={handleInputChange} />
            </label>
            <br />
            <button>reset</button>
            <button type="submit">Submit</button>
        </form>
    );
};

export default MovieForm;