import { useEffect, useState, Suspense } from 'react';
import { useParams, useLocation, Link, Outlet } from 'react-router-dom';
import { getMovieDetails } from "../services/fetchApi";
import s from "./styles/styles.module.css";

export default function MovieDetails() {
    const [data, setData] = useState([]);
    const { movieId } = useParams();
    const location= useLocation();
    const backLinkHref = location.state?.from ?? "/movies";
    const movieName = location.state?.from.search;
    
    console.log(location.state?.from)

    useEffect(() => {
        getMovieDetails(movieId).then(movie => {
            setData(movie)
        });
    }, [movieId]);

    return data && (
        <div>
            <Link to={backLinkHref}>
                <button>Go back</button>
            </Link>
            
            <div className={s.filmImg}>
                <img src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`} alt="" width={250} />
                <div className={s.padding}>
                    <h2>{data.title}({new Date(data.release_date).getFullYear()})</h2>
                    <p>User score: <span>{(Math.round(data.vote_average * 10))} %</span></p>

                    <h3>Overview</h3>
                    <p>{data.overview}</p>
            
                    <h4>Genres</h4>
                    <ul>
                        {data.genres?.map(({ id, name }) =>
                            (<li key={id}>{name}</li>)
                        )}
                    </ul>
                </div>
            </div>
            <p>Adittional information</p>
            <ul>
                <li>
                    {location.state?.from.search === `${movieName}` ?
                        <Link to='cast' state={{ from: `/movies${movieName}` }}>Cast</Link>
                        :
                        <Link to='cast' state={{ from: `/` }}>Cast</Link>
                    }
                </li>
                <li>
                    {location.state?.from.search === `${movieName}` ?
                        <Link to='reviews' state={{ from: `/movies${movieName}` }}>Reviews</Link>
                        :
                        <Link to='reviews' state={{ from: `/` }}>Reviews</Link>
                    }
                </li>
            </ul>
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
            </Suspense>
        </div>
    );
}