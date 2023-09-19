import { render, screen, fireEvent } from '@testing-library/react';
import MovieDetails from './MovieDetails';

test('renders the correct movie details', () => {
    const moviesArray = [
        {
            imageUrl: "https://png.pngtree.com/template/20210914/ourmid/pngtree-stationery-student-back-to-school-day-cartoon-poster-image_669501.jpg",
            name: "The Shawshank Redemption",
            releaseYear: 1994,
            rating: 9.3,
            duration: "2h 22min",
            description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
            genres: ["lol"]
        }
    ];

    const { getByTestId } = render(<MovieDetails movies={moviesArray} targetMovie={"The Shawshank Redemption"} />);
    const movieTile = getByTestId('movieTitleDetail');

    expect(movieTile).toHaveTextContent(moviesArray[0].name);
    expect(movieTile).toHaveTextContent(moviesArray[0].releaseYear);
    expect(movieTile).toHaveTextContent(moviesArray[0].rating);
    expect(movieTile).toHaveTextContent(moviesArray[0].duration);
    expect(movieTile).toHaveTextContent(moviesArray[0].description);
});