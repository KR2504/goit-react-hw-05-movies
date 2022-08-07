import axios from 'axios';

const API_KEY = '0eaaf2516690b5ff52877c678f040000';

export async function getTrending() {
    return await axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`)
        .then(res => res.data)
}

export async function searchMovie(searchQuery) {
    return await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${searchQuery}`)
        .then(res => res.data)
}

export async function getMovieDetails(ID) {
    return await axios.get(`https://api.themoviedb.org/3/movie/${ID}?api_key=${API_KEY}&language=en-US`)
        .then(res => res.data)
}

export async function getMovieCredits(ID) {
    return await axios.get(`https://api.themoviedb.org/3/movie/${ID}/credits?api_key=${API_KEY}&language=en-US`)
        .then(res => res.data)
}

export async function getMovieReviews(ID) {
    return await axios.get(`https://api.themoviedb.org/3/movie/${ID}/reviews?api_key=${API_KEY}&language=en-US&page=1`)
        .then(res => res.data)
}