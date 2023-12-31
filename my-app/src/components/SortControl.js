import React, {useState} from 'react';

const SortControl = (props) => {
    const optionArray = ['title', 'release_date'];

    const handleSelectionChange = (event) => {
        const newSelection = event.target.value;
        props.onSelectionChange(newSelection);
    };

    return (
        <div>
            <label htmlFor="sort-by">Sort by:</label>
            <select id="sort-by"  onChange={handleSelectionChange}  dataTestid="sortControl" defaultValue={props.currentSelection}>
                {optionArray.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default SortControl;