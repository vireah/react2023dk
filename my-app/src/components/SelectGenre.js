import React, {useState} from 'react';
import Button from '../common/Button'

function SelectGenre({genresArray, onSelect}) {
    // const genresArray = props.genresArray;

    const [genres, setGenres] = useState(genresArray);
    const [selectedGenre, setSelectedGenre] = useState("ALL");

    const handleSelect = (event) => {
        setSelectedGenre(event.target.innerText);
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
                    onClick={(e) => onSelect(genre)}
                />)}
            </div>
        </>
    );
}

export default SelectGenre;