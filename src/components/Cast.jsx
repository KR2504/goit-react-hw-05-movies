import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from "../services/fetchApi";
import defaultImage from "../images/no-avatar.jpg";

export default function Cast() {
    const [cast, setCast] = useState([]);
    const { movieId } = useParams();

    useEffect(() => {
        getMovieCredits(movieId).then(({cast}) => {
            setCast(cast)
        })
    }, [movieId]);
    return (
        <>
            {cast && (
                <ul>
                    {cast?.map(({ id, name, profile_path, character }) => (
                        <li key={id}>
                            <div><img src={profile_path ?
                                `https://image.tmdb.org/t/p/w500/${profile_path}`
                                : defaultImage} alt="" width={250} /></div>
                            <p>{name}</p>
                            <p>Character: {character}</p>
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
};