import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SortControl from './SortControl';

describe('SortControl', () => {
    const currentSelection = 'Title';
    const onSelectionChange = jest.fn();

    it('renders the component with the correct label and options', () => {
        const { getByLabelText, getByText } = render(
            <SortControl currentSelection={currentSelection} onSelectionChange={onSelectionChange} />
        );

        expect(getByLabelText('Sort by:')).toBeInTheDocument();
        expect(getByText('Title')).toBeInTheDocument();
        expect(getByText('Release Date')).toBeInTheDocument();
    });


    it('updates the selected option when a new option is selected', () => {
        const { getByLabelText } = render(
            <SortControl currentSelection={currentSelection} onSelectionChange={onSelectionChange} />
        );

        fireEvent.change(getByLabelText('Sort by:'), { target: { value: 'Release Date' } });

        expect(getByLabelText('Sort by:')).toHaveValue('Release Date');
    });
});