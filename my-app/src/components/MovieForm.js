// import React, { useState } from 'react';
//
// const MovieForm = ({ initialMovieInfo = {}, onSubmit }) => {
//     const [movieInfo, setMovieInfo] = useState(initialMovieInfo);
//     console.log("inf", movieInfo);
//
//     const handleInputChange = (event) => {
//         const { name, value } = event.target;
//         setMovieInfo((prevMovieInfo) => ({ ...prevMovieInfo, [name]: value }));
//     };
//
//     const handleSubmit = (event) => {
//         event.preventDefault();
//         onSubmit(movieInfo);
//     };
//
//     return (
//         <form onSubmit={handleSubmit} className="movie-form">
//             <label>
//                 Title:
//                 <input type="text" name="title" value={movieInfo.title || ''} onChange={handleInputChange} />
//             </label>
//             <br />
//             <label>
//                 Release date:
//                 <input type="text" name="releaseDate" value={movieInfo.releaseDate || ''} onChange={handleInputChange} />
//             </label>
//             <br />
//             <label>
//                 Movie Url:
//                 <input type="text" name="movieUrl" value={movieInfo.movieUrl || ''} onChange={handleInputChange} />
//             </label>
//             <label>
//                 Rating:
//                 <input type="text" name="rating" value={movieInfo.rating || ''} onChange={handleInputChange} />
//             </label>
//             <label>
//                 Genre:
//                 <input type="text" name="genre" value={movieInfo.genre || ''} onChange={handleInputChange} />
//             </label>
//             <label>
//                 Runtime:
//                 <input type="text" name="runtime" value={movieInfo.runtime || ''} onChange={handleInputChange} />
//             </label>
//             <label>
//                 Overview:
//                 <input type="text" name="overview" value={movieInfo.overview || ''} onChange={handleInputChange} />
//             </label>
//             <br />
//             <button>reset</button>
//             <button type="submit">Submit</button>
//         </form>
//     );
// };
//
// export default MovieForm;

import React from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import InputMask from 'react-input-mask';

const MovieForm = ({ onSubmit }) => {
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            title: '',
            release_date: '',
            poster_path: '',
            vote_average: '',
            genres: '',
            runtime: '',
            overview: '',
            vote_count: '',
            revenue: '',
            tagline: '',
        },
        validate: (values) => {
            const errors = {};
            if (!values.title) {
                errors.title = 'Title is required';
            }
            if (!values.release_date || !/^(\d{4}-\d{2}-\d{2})$/.test(values.release_date)) {
                errors.release_date = 'Release date must be in yyyy-mm-dd format';
            }
            if (!values.poster_path || !/^http(s)?:\/\/[^\s$.?#].[^\s]*$/.test(values.poster_path)) {
                errors.poster_path = 'Poster path must be a valid URL';
            }
            if (!values.vote_average || isNaN(values.vote_average)) {
                errors.vote_average = 'Vote average must be a number';
            }
            if (!values.genres) {
                errors.genres = 'Genres must be provided';
            }
            if (!values.runtime || isNaN(values.runtime)) {
                errors.runtime = 'Runtime must be a number';
            }
            if (!values.overview) {
                errors.overview = 'Overview is required';
            }
            if (!values.vote_count || isNaN(values.vote_count)) {
                errors.vote_count = 'Vote count must be a number';
            }
            if (!values.revenue || isNaN(values.revenue)) {
                errors.revenue = 'Revenue must be a number';
            }
            if (!values.tagline) {
                errors.tagline = 'Tagline is required';
            }
            return errors;
        },
        onSubmit: (values) => {
            // Convert genres to an array
            const genresArray = values.genres.split(',').map((genre) => genre.trim());

            // Update the values object with the genres array
            const updatedValues = { ...values, genres: genresArray };

            fetch('http://localhost:4000/movies', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedValues),
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                    const movieId = data.id;
                    navigate(`/${movieId}`);
                    // onSubmit(newMovieId);
                })
                .catch((error) => {
                    console.error('Error adding the movie:', error);
                });
        },
    });

    return (
        <form onSubmit={formik.handleSubmit} className="movie-form">
            <label>
                Title:
                <input type="text" name="title" {...formik.getFieldProps('title')} />
                {formik.touched.title && formik.errors.title && (
                    <div className="error">{formik.errors.title}</div>
                )}
            </label>
            <label>
                Release Date:
                <InputMask
                    type="text"
                    name="release_date"
                    mask="9999-99-99"
                    maskChar="_"
                    value={formik.values.release_date}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.release_date && formik.errors.release_date && (
                    <div className="error">{formik.errors.release_date}</div>
                )}
            </label>
            <label>
                Poster Path:
                <input type="text" name="poster_path" {...formik.getFieldProps('poster_path')} />
                {formik.touched.poster_path && formik.errors.poster_path && (
                    <div className="error">{formik.errors.poster_path}</div>
                )}
            </label>
            <label>
                Rating:
                <input type="number" name="vote_average" {...formik.getFieldProps('vote_average')} />
                {formik.touched.vote_average && formik.errors.vote_average && (
                    <div className="error">{formik.errors.vote_average}</div>
                )}
            </label>
            <label>
                Genres:
                <input type="text" name="genres" {...formik.getFieldProps('genres')} />
                {formik.touched.genres && formik.errors.genres && (
                    <div className="error">{formik.errors.genres}</div>
                )}
            </label>
            <label>
                Runtime:
                <input type="number" name="runtime" {...formik.getFieldProps('runtime')} />
                {formik.touched.runtime && formik.errors.runtime && (
                    <div className="error">{formik.errors.runtime}</div>
                )}
            </label>
            <label>
                Overview:
                <input type="text" name="overview" {...formik.getFieldProps('overview')} />
                {formik.touched.overview && formik.errors.overview && (
                    <div className="error">{formik.errors.overview}</div>
                )}
            </label>
            <label>
                Vote Count:
                <input type="number" name="vote_count" {...formik.getFieldProps('vote_count')} />
                {formik.touched.vote_count && formik.errors.vote_count && (
                    <div className="error">{formik.errors.vote_count}</div>
                )}
            </label>
            <label>
                Revenue:
                <input type="number" name="revenue" {...formik.getFieldProps('revenue')} />
                {formik.touched.revenue && formik.errors.revenue && (
                    <div className="error">{formik.errors.revenue}</div>
                )}
            </label>
            <label>
                Tagline:
                <input type="text" name="tagline" {...formik.getFieldProps('tagline')} />
                {formik.touched.tagline && formik.errors.tagline && (
                    <div className="error">{formik.errors.tagline}</div>
                )}
            </label>
            <button type="reset" onClick={formik.handleReset}>
                Reset
            </button>
            <button type="submit">Submit</button>
        </form>
    );
};

export default MovieForm;