import MovieListPage from "../app/components/MovieListPage";
import axios from 'axios';

export async function getServerSideProps(context) {
    let movieList = [];

    try {
        const response = await axios.get('http://localhost:4000/movies');
        movieList = response.data || [];
    } catch (error) {
        console.error('Error fetching movie list:', error);
    }

    return {
        props: {
            movieList
        }
    };
}

export default function Index({ movieList }) {
    return <MovieListPage movieList={movieList} />;
}
