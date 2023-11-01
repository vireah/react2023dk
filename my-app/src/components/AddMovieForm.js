import React from 'react';
import Dialog from "./Dialog";
import MovieForm from "./MovieForm";

function AddMovieForm() {
    return (
        <>
             <Dialog buttonName={"add Movie"}>
                 <MovieForm></MovieForm>
             </Dialog>
        </>
    );
}

export default AddMovieForm;