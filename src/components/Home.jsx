import { useState, useEffect } from 'react';
import { getTrending } from "../services/fetchApi";
import { Link, useLocation } from "react-router-dom";

export default function Home() {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getTrending().then(movie => {
            setMovies(movie.results)
        })
    }, []);

    const location = useLocation();
    
    return (
        <main>
            <h1>Trending today</h1>
            <ul>
                {movies.map(({ title, id }) => (
                    <li key={id}>
                        <Link to={`/movies/${id}`} state={{ from: location }}>{title}</Link>
                    </li>
                ))}
            </ul>
        </main>
    );
};

