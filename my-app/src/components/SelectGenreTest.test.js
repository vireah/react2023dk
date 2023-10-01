import { render, screen, fireEvent } from '@testing-library/react';
import SelectGenre from './SelectGenre';

test("Test that component renders all genres passed in props", () => {
    const genresArray = ['lol1', 'lol2', 'lol3']
    const { getByText } = render(<SelectGenre genresArray={genresArray}/>)
    genresArray.forEach((genre) => {
        expect(getByText(genre)).toBeInTheDocument();
    });
});

describe('Test that component highlights a selected genre passed in props', () => {
    const genresArray = ['ALL', 'DOCUMENTARY', 'lol3'];
    const selectedGenre = 'ALL';
    const handleSelect = jest.fn();

    it('should highlight the selected genre', () => {
        const { getByText } = render(<SelectGenre genresArray={genresArray} onSelect={handleSelect}/>);

        const genreElement = getByText(selectedGenre);
        fireEvent.click(genreElement);
        const genreElements = getByText(selectedGenre);

        expect(genreElements).toHaveClass('active');
    });
});


describe('GenreList component', () => {
    const genresArray = ['ALL', 'DOCUMENTARY', 'COMEDY']
    const selectedGenre = 'DOCUMENTARY';
    const handleSelect = jest.fn();

    it('Test that after a click event on a genre button component calls "onChange" callback and passes correct genre in arguments', () => {
        render(<SelectGenre genresArray={genresArray} onSelect={handleSelect} />);

        const genreButton = screen.getByText(selectedGenre);
        fireEvent.click(genreButton);
        expect(handleSelect).toHaveBeenCalledWith(selectedGenre);
    });
});