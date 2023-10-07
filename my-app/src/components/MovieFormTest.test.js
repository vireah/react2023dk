import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import MovieForm from './MovieForm';

describe('MovieForm', () => {
    it('should update movieInfo state when input values change', () => {
        const onSubmit = jest.fn();
        const { getByLabelText } = render(<MovieForm onSubmit={onSubmit} />);
        const titleInput = getByLabelText('Title:');
        const releaseDateInput = getByLabelText('Release date:');

        fireEvent.change(titleInput, { target: { value: 'Test Movie' } });
        fireEvent.change(releaseDateInput, { target: { value: '2022-01-01' } });

        expect(titleInput.value).toBe('Test Movie');
        expect(releaseDateInput.value).toBe('2022-01-01');
    });

    it('should call onSubmit with movieInfo when form is submitted', () => {
        const onSubmit = jest.fn();
        const { getByLabelText, getByRole } = render(<MovieForm onSubmit={onSubmit} />);
        const titleInput = getByLabelText('Title:');
        const releaseDateInput = getByLabelText('Release date:');
        const submitButton = getByRole('button', { name: 'Submit' });

        fireEvent.change(titleInput, { target: { value: 'Test Movie' } });
        fireEvent.change(releaseDateInput, { target: { value: '2022-01-01' } });
        fireEvent.click(submitButton);

        expect(onSubmit).toHaveBeenCalledWith({ title: 'Test Movie', releaseDate: '2022-01-01' });
    });
});