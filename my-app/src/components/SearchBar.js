import React, {useState} from 'react';
import Button from '../common/Button';
import Input from '../common/Input';

const SearchBar = ({ initialQuery, onSearch }) => {
    const [value, setValue] = useState(initialQuery);

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    const nothingFunction = (value) => {
        console.log("Lol");
    }

    const handleSearch = (event) => {
        nothingFunction(value);
    }

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            nothingFunction(value);
        }
    };

    return (
        <div>
            <h1>Search</h1>
            <Input
                onChange={(e)=> handleChange(e)}
                onKeyPress={(e)=> handleKeyPress(e)}
                type="text"
                placeholder={value}
                value={initialQuery}
                dataTestid="inputSearch"
            />
            <Button onClick={handleSearch} dataTestid="searchButton" title = 'Search' />
        </div>
    )
};

export default SearchBar;