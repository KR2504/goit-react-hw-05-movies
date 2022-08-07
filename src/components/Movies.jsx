import { useState, useEffect } from 'react';
import { useSearchParams, Link, useLocation } from 'react-router-dom';
import { searchMovie } from "../services/fetchApi";

export default function SearchMovies() {
    const [movies, setMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const movieName = searchParams.get("movieName") ?? '';

    const location = useLocation();

    useEffect(() => {
        if (movieName === '') {
            return;
        }
        searchMovie(movieName).then(movie => {
            setMovies(movie.results)
        })
    }, [movieName]);

    const handleSubmit = e => {
        e.preventDefault();
        const query = e.target.elements.movieName.value;

        if (query.trim() === '') {
            return;
        }

        setSearchParams({ movieName: query });
        e.target.reset();
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name='movieName'
                    placeholder="Search movies" />
                <button type="submit">Search</button>
            </form>
            <ul>
                {movies.map(({ title, id }) =>
                    <li key={id}>
                        <Link to={`${id}`} state={{ from: location }}>
                            {title}
                        </Link>
                    </li>)}
            </ul>
        </>
    );
};