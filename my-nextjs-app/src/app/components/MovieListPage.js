import MovieTitle from "./MovieTitle";

const MovieListPage = ({ movieList }) => {

console.log(movieList, "movieList");

    return (
        <div className="App">
            <MovieTitle moviesArray={movieList} ></MovieTitle>
        </div>
    );
};

export default MovieListPage;