import logo from './logo.svg';
import './App.css';
import MovieListPage from "./components/MovieListPage";
import Counter from "./components/Counter";
import SearchBar from "./components/SearchBar";
import MovieTitle from "./components/MovieTitle";
import SortControl from "./components/SortControl";
import Dialog from "./components/Dialog"
import React from "react";
import MovieForm from "./components/MovieForm";

function App() {


    const handleSortSelectionChange = () => {
        console.log(`lol`);
    };
    //
    // const [showDialog, setShowDialog] = React.useState(false);
    //
    // const handleOpenDialog = () => {
    //     setShowDialog(true);
    // };
    //
    // const handleCloseDialog = () => {
    //     setShowDialog(false);
    // };

    const initialMovieInfo  =
        {
            imageUrl: "https://png.pngtree.com/template/20210914/ourmid/pngtree-stationery-student-back-to-school-day-cartoon-poster-image_669501.jpg",
            title: "The Shawshank Redemption",
            releaseDate: 1994,
            movieUrl: "https://png.pngtree.com/template/",
            rating: 9.3,
            genre: ["Drama"],
            runtime: "2h 22min",
            overview: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        };

    return (
        // <div className="App">
        //     <Counter></Counter>
        //     <Dialog buttonName={"add Movie"}>
        //         <MovieForm></MovieForm>
        //     </Dialog>
        //     <Dialog buttonName={"Edit movie"}>
        //         <MovieForm initialMovieInfo={initialMovieInfo}></MovieForm>
        //     </Dialog>
        //     <Dialog buttonName={"Delete movie"}>Are you sure?<button >Confirm</button></Dialog>
        //     <SearchBar onSearch={handleSearch}/>
        //     <SortControl currentSelection={'Title'} onSelectionChange={handleSortSelectionChange} />
        //     <MovieTitle moviesArray={moviesArray} onClick={handleSelect}></MovieTitle>
        //     <SelectGenre genresArray={genresArray} onSelect={handleSelect} />
        // </div>
        <MovieListPage></MovieListPage>
    );
}

export default App;
