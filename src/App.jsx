import {lazy, Suspense } from "react";
import { Route, Routes, Navigate} from "react-router-dom";
import Navigation from "./components/Navigation";

const Home = lazy(() => import('./components/Home'));
const SearchMovies = lazy(() => import('./components/Movies'));
const MovieDetails = lazy(() => import('./components/MovieDetails'));
const Reviews = lazy(() => import('./components/Reviews'));
const Cast = lazy(() => import('./components/Cast'));

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        fontSize: 25,
        color: '#010101'
      }}
    >
      <Navigation />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/movies" element={<SearchMovies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </div>
  );
};
