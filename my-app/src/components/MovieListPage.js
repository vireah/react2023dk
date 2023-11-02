import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
// import { Outlet } from "react-router-dom";

import SearchBar from "./SearchBar";
import SortControl from "./SortControl";
import MovieTitle from "./MovieTitle";
import SelectGenre from "./SelectGenre";
import MovieDetails from "./MovieDetails";
import {Outlet, useParams, useSearchParams} from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import AddMovieForm from "./AddMovieForm";

const MovieListPage = () => {
    const genresArray = [ "Adventure", "Comedy", "Drama", "Romance" ]
    let [searchParams, setSearchParams] = useSearchParams();

    const query = searchParams.get("query");
    const sortBy = searchParams.get("sortBy");
    const searchBy = searchParams.get("searchBy");

    const location = useLocation();

    const [searchQuery, setSearchQuery] = useState(query || "");
    const [sortByState, setSortByState] = useState();
    const [sortCriterion, setSortCriterion] = useState(searchBy ||'title');
    const [movieList, setMovieList] = useState();
    const [showMovieDetails, setMovieDetails] = useState(false);

    let source = axios.CancelToken.source();

    useEffect(() => {
        const params = new URLSearchParams(location.search);

        const query = params.get("query");
        const sortBy = params.get("sortBy");
        const genre = params.get("genre");
        const searchBy = params.get("searchBy");

        axios.get('http://localhost:4000/movies', {
            params: {
                search: query,
                searchBy: searchBy || sortCriterion,
                sortBy: sortBy,
                sortOrder: 'asc'
            },
            cancelToken: source.token
        }).then(response => {
                setMovieList(response.data)
            })
            .catch(error => {
                if (axios.isCancel(error)) {
                    console.log('Request canceled', error.message);
                } else {
                    console.error(error);
                }
            });
    }, [query, searchBy, searchParams, location, sortBy]);

    const navigate = useNavigate();

    const handleSelect = (searchQuery) => {
        source.cancel()
        setSearchQuery(searchQuery);
        setSortCriterion("genres");
        setSearchParams({ query: searchQuery, sortBy: 'genres' });
    }

    //////// Movie details
    const handleClickByMove = (movieId, showMovieDetails) => {
        setMovieDetails(showMovieDetails);
        // setSelectedMovie(newMovieList);
        console.log(movieId)
        const moveId = movieId;
        // Update the URL with the new search query
        navigate(`/${movieId}`);
    }

    //////// Field to sort by
    const handleSelectionChange = (newSelection) => {
        source.cancel()
        setSortByState(newSelection);
        setSearchParams({ sortBy: newSelection });
    }

    if(movieList) {
        return (
            <div className="App">
                <Link to="/new">Add Movie</Link>
                {/*<AddMovieForm />*/}
                {/*<Dialog buttonName={"add Movie"}>*/}
                {/*    <MovieForm></MovieForm>*/}
                {/*</Dialog>*/}
                {/*<Dialog buttonName={"Edit movie"}>*/}
                {/*    <MovieForm initialMovieInfo={initialMovieInfo}></MovieForm>*/}
                {/*</Dialog>*/}
                {/*<Dialog buttonName={"Delete movie"}>Are you sure?<button >Confirm</button></Dialog>*/}
                {/*{showMovieDetails && <MovieDetails  movies={movieList} targetMovie={selectedMovie}/>}*/}
                {showMovieDetails && <MovieDetails/>}
                {/*{!showMovieDetails && <SearchBar onSearch={handleSearch} movieList={movieList}/>}*/}
                <SelectGenre genresArray={genresArray} onSelect={handleSelect}/>
                <SortControl currentSelection={sortCriterion} onSelectionChange={handleSelectionChange}/>
                <MovieTitle moviesArray={movieList} onClickByMove={handleClickByMove}></MovieTitle>
                {/*<MovieTitle moviesArray={movieList} onClickByMove={handleClickByMove}  onClick={handleSelect}></MovieTitle>*/}
                <Outlet />
            </div>
        );
    }
};

export default MovieListPage;