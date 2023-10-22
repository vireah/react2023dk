import logo from './logo.svg';
import './App.css';
import MovieListPage from "./components/MovieListPage";
import Counter from "./components/Counter";
import SearchBar from "./components/SearchBar";
import MovieTitle from "./components/MovieTitle";
import SortControl from "./components/SortControl";
import Dialog from "./components/Dialog"
import React from "react";
import MovieDetailsPage from "./components/MovieDetails";
import {BrowserRouter, Routes, Route} from "react-router-dom";

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


    return (
        <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MovieListPage />} >
                    <Route path="/" element={<SearchBar/>} />
                    <Route path="/:movieId" element={<MovieDetailsPage/>} />
                </Route>
            </Routes>
        </BrowserRouter>
        </div>
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
        // <MovieListPage></MovieListPage>
    );
}

export default App;
