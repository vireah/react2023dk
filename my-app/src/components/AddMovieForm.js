import React, {useState} from 'react';
import Dialog from "./Dialog";
import MovieForm from "./MovieForm";
import {Outlet} from "react-router-dom";

function AddMovieForm() {
    const [showDialog, setShowDialog] = useState(false);

    const handleCloseDialog = () => {
        setShowDialog(false);
    };

    return (
        <>
             <Dialog buttonName={"add Movie"} onClose={showDialog} >
                 <MovieForm onCloseDialog={handleCloseDialog} isEditMode={false} ></MovieForm>
             </Dialog>
        </>
    );
}

export default AddMovieForm;