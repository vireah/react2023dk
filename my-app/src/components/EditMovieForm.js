import React, {useEffect, useState} from 'react';
import Dialog from "./Dialog";
import MovieForm from "./MovieForm";
import {Outlet, useParams} from "react-router-dom";
import axios from "axios";

function EditMovieForm() {
    const [showDialog, setShowDialog] = useState(false);
    const [initialMovieInfo, setInitialMovieInfo] = useState();
    const { movieId } = useParams();

    const handleCloseDialog = () => {
        setShowDialog(false);
    };

    useEffect(() => {
        axios.get(`http://localhost:4000/movies/`+movieId, {
        }).then(response => {
            setInitialMovieInfo(response.data);
            console.log(response.data);
        })
            .catch(error => {
                if (axios.isCancel(error)) {
                    console.log('Request canceled', error.message);
                } else {
                    console.error(error);
                }
            });
    }, [movieId]);

    if(initialMovieInfo) {
        return (
            <>
                <Dialog buttonName={"Edit Movie"} onClose={showDialog}>
                    <MovieForm onCloseDialog={handleCloseDialog} isEditMode={true} movieId={movieId}
                               initialMovieInfo={initialMovieInfo}></MovieForm>
                </Dialog>
            </>
        );
    }
}

export default EditMovieForm;