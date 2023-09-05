import logo from './logo.svg';
import './App.css';
import SelectGenre from "./components/SelectGenre";
import Counter from "./components/Counter";
import SearchBar from "./components/SearchBar";

function App() {
    const handleSearch = () => {
        console.log(`lol`);
    }

    return (
        <div className="App">
            <Counter></Counter>
            <SearchBar initialQuery="Lol" onSearch={handleSearch}/>
            <SelectGenre></SelectGenre>
        </div>
    );
}

export default App;