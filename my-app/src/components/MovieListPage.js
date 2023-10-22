import React, { useState, useEffect } from "react";
import axios from 'axios';

import SearchBar from "./SearchBar";
import SortControl from "./SortControl";
import MovieTitle from "./MovieTitle";
import SelectGenre from "./SelectGenre";
import MovieDetails from "./MovieDetails";

const MovieListPage = () => {
    const genresArray = [ "Adventure", "Comedy", "Drama", "Romance" ]

    const [searchQuery, setSearchQuery] = useState("");
    const [searchBy, setSearchBy] = useState("");
    const [sortCriterion, setSortCriterion] = useState("title");
    const [activeGenre, setActiveGenre] = useState("");
    const [movieList, setMovieList] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);

    const [showMovieDetails, setMovieDetails] = useState(false);

    let source = axios.CancelToken.source();

    useEffect(() => {
        axios.get('http://localhost:4000/movies', {
            params: {
                search: searchQuery,
                searchBy: searchBy,
                sortBy: sortCriterion,
                sortOrder: 'asc'
            },
            cancelToken: source.token
        }).then(response => {
                console.log("lol works", movieList, sortCriterion);
                setMovieList(response.data.data)
            })
            .catch(error => {
                if (axios.isCancel(error)) {
                    console.log('Request canceled', error.message);
                } else {
                    console.error(error);
                }
            });
    }, [searchQuery, sortCriterion]);


    const handleSearch = (searchQuery) => {
        source.cancel()
        console.log("lol canseled")
        setSearchBy('title');
        setSearchQuery(searchQuery);
    }

    const handleSelect = (searchQuery) => {
        source.cancel()
        console.log("lol canseled")
        setSearchBy('genres');
        setSearchQuery(searchQuery);
    }


    const handleClickByMove = (newMovieList, showMovieDetails) => {
        setMovieDetails(showMovieDetails);
        setSelectedMovie(newMovieList);
    }

    const handleSelectionChange = (newSelection) => {
        source.cancel()
        setSortCriterion(newSelection);
    }

    return (
        <div className="App">
            {/*<Dialog buttonName={"add Movie"}>*/}
            {/*    <MovieForm></MovieForm>*/}
            {/*</Dialog>*/}
            {/*<Dialog buttonName={"Edit movie"}>*/}
            {/*    <MovieForm initialMovieInfo={initialMovieInfo}></MovieForm>*/}
            {/*</Dialog>*/}
            {/*<Dialog buttonName={"Delete movie"}>Are you sure?<button >Confirm</button></Dialog>*/}
            {showMovieDetails && <MovieDetails  movies={movieList} targetMovie={selectedMovie}/>}
            {!showMovieDetails && <SearchBar onSearch={handleSearch} movieList={movieList}/>}
            <SelectGenre genresArray={genresArray} onSelect={handleSelect} />
            <SortControl currentSelection={sortCriterion} onSelectionChange={handleSelectionChange} />
            <MovieTitle moviesArray={movieList} onClickByMove={handleClickByMove}  onClick={handleSelect}></MovieTitle>
        </div>
    );
};

export default MovieListPage;