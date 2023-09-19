import logo from './logo.svg';
import './App.css';
import SelectGenre from "./components/SelectGenre";
import Counter from "./components/Counter";
import SearchBar from "./components/SearchBar";

function App() {
    const genresArray = ['ALL', 'DOCUMENTARY', 'COMEDY']

    const handleSearch = () => {
        console.log(`lol`);
    }

    return (
        <div className="App">
            <Counter></Counter>
            <SearchBar onSearch={handleSearch}/>
            <SelectGenre genresArray={genresArray} onSelect={handleSelect} />
        </div>
    );
}

export default App;
