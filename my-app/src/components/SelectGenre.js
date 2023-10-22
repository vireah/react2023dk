import React, {useState} from 'react';
import Button from '../common/Button'

function SelectGenre(props) {
    const [genres, setGenres] = useState(props.genresArray);
    const [selectedGenre, setSelectedGenre] = useState("Adventure");

    const handleButton = (event) => {
        setSelectedGenre(event.target.innerText);
        props.onSelect(event.target.innerText);
        console.log(event.target.innerText);
    }

    const isActive = (genre) => {
        return ((genre===selectedGenre) ?'active':'');
    }

    return (
        <>
            <h1>Select</h1>
            <div className="genre-wrapper">
                {genres.map((genre) => <Button
                    key={genre}
                    title={genre}
                    className={isActive(genre)}
                    dataTestid="selectGenre"
                    onClick={(event) => handleButton(event)}
                />)}
            </div>
        </>
    );
}

export default SelectGenre;