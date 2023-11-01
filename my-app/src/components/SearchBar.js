import React, {useState} from 'react';
import Button from '../common/Button';
import Input from '../common/Input';
import { useNavigate } from "react-router-dom";

const SearchBar = (props) => {
    const navigate = useNavigate();
    const [value, setValue] = useState("")

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    const handleButton = () => {
        navigate(`/?movies=&query=${value}&searchBy=title`);
    }

    return (
        <div>
            <h1>Search</h1>
            <Input
                onChange={(e)=> handleChange(e)}
                type="text"
                placeholder={"value"}
                dataTestid="inputSearch"
            />
            <Button onClick={handleButton} dataTestid="searchButton" title = 'Search' />
        </div>
    )
};

export default SearchBar;