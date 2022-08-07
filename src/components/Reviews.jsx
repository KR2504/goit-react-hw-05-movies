import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from "../services/fetchApi";

export default function Cast() {
    const [reviews, setReviews] = useState([]);
    const { movieId } = useParams();

    useEffect(() => {
        getMovieReviews(movieId).then((reviews) => {
            setReviews(reviews.results)
        })
    }, [movieId]);
    return (
        <>
            {reviews.length ? (
                <div>
                    {reviews?.map(({ id, author, content }) => (
                        <div key={id}>
                            <h3>Author: {author}</h3>
                            <p>{content}</p>
                        </div>
                    ))}
                </div>
            ):(<p>Reviews not found</p>)}
        </>
    );
};