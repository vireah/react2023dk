import React, {useState} from 'react';

const SortControl = ({ currentSelection, onSelectionChange }) => {
    const optionArray = ['Title', 'Release Date'];

    const [sortSelection, setSortSelection] = useState(currentSelection);

    const handleSelectionChange = (event) => {
        const newSelection = event.target.value;
        setSortSelection(newSelection);
    };

    return (
        <div>
            <label htmlFor="sort-by">Sort by:</label>
            <select id="sort-by"  onChange={handleSelectionChange} defaultValue={currentSelection}>
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