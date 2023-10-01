import logo from './logo.svg';
import './App.css';
import SelectGenre from "./components/SelectGenre";
import Counter from "./components/Counter";
import SearchBar from "./components/SearchBar";
import MovieTitle from "./components/MovieTitle";
import SortControl from "./components/SortControl";

function App() {
    const genresArray = ['ALL', 'DOCUMENTARY', 'COMEDY']

    const handleSelect = () => {
        console.log(`lol`);
    }

    const moviesArray = [
        {
            imageUrl: "https://png.pngtree.com/template/20210914/ourmid/pngtree-stationery-student-back-to-school-day-cartoon-poster-image_669501.jpg",
            name: "The Shawshank Redemption",
            releaseYear: 1994,
            rating: 9.3,
            duration: "2h 22min",
            description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
            genres: ["Drama"]
        },
        {
            imageUrl: "https://png.pngtree.com/template/20210914/ourmid/pngtree-stationery-student-back-to-school-day-cartoon-poster-image_669501.jpg",
            name: "The Godfather",
            releaseYear: 1972,
            rating: 9.2,
            duration: "2h 55min",
            description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
            genres: ["Crime", "Drama"]
        },
        {
            imageUrl: "https://png.pngtree.com/template/20210914/ourmid/pngtree-stationery-student-back-to-school-day-cartoon-poster-image_669501.jpg",
            name: "The Dark Knight",
            releaseYear: 2008,
            rating: 9.0,
            duration: "2h 32min",
            description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
            genres: ["Action", "Crime", "Drama"]
        },
        {
            imageUrl: "https://png.pngtree.com/template/20210914/ourmid/pngtree-stationery-student-back-to-school-day-cartoon-poster-image_669501.jpg",
            name: "12 Angry Men",
            releaseYear: 1957,
            rating: 8.9,
            duration: "1h 36min",
            description: "A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence.",
            genres: ["Drama"]
        },
        {
            imageUrl: "https://png.pngtree.com/template/20210914/ourmid/pngtree-stationery-student-back-to-school-day-cartoon-poster-image_669501.jpg",
            name: "Schindler's List",
            releaseYear: 1993,
            rating: 8.9,
            duration: "3h 15min",
            description: "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
            genres: ["Biography", "Drama", "History"]
        },
        {
            imageUrl: "https://png.pngtree.com/template/20210914/ourmid/pngtree-stationery-student-back-to-school-day-cartoon-poster-image_669501.jpg",
            name: "The Lord of the Rings: The Return of the King",
            releaseYear: 2003,
            rating: 8.9,
            duration: "3h 21min",
            description: "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
            genres: ["Action", "Adventure", "Drama"]
        },
        {
            imageUrl: "https://png.pngtree.com/template/20210914/ourmid/pngtree-stationery-student-back-to-school-day-cartoon-poster-image_669501.jpg",
            name: "Pulp Fiction",
            releaseYear: 1994,
            rating: 8.9,
            duration: "2h 34min",
            description: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
            genres: ["Crime", "Drama"]
        },
        {
            imageUrl: "https://png.pngtree.com/template/20210914/ourmid/pngtree-stationery-student-back-to-school-day-cartoon-poster-image_669501.jpg",
            name: "Forrest Gump",
            releaseYear: 1994,
            rating: 8.8,
            duration: "2h 22min",
            description: "The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate, and other historical events unfold through the perspective of an Alabama man with an IQ of 75.",
            genres: ["Comedy", "Drama", "Romance"]
        }
    ];

    const handleSearch = () => {
        console.log(`lol`);
    }

    const handleSortSelectionChange = () => {
        console.log(`lol`);
    };
    return (
        <div className="App">
            <Counter></Counter>
            <SearchBar onSearch={handleSearch}/>
            <SortControl currentSelection={'Title'} onSelectionChange={handleSortSelectionChange} />
            <MovieTitle moviesArray={moviesArray} onClick={handleSelect}></MovieTitle>
            <SelectGenre genresArray={genresArray} onSelect={handleSelect} />
        </div>
    );
}

export default App;
