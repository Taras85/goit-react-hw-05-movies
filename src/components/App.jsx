
import { Navigate, Route, Routes } from "react-router-dom";
import { lazy } from 'react';
import Header from "./Header/Header";
// import GetTrending from "pages/GetTrending";
// import MovieDetails from "pages/MovieDetails";
// import Movies from "pages/Movies";
// import Cast from "./Cast/Cast";
// import Review from "./Reviews/Review";


const GetTrending = lazy(() => import('../pages/GetTrending'));
const Movies = lazy(() => import('../pages/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Review = lazy(() => import('./Reviews/Review'));



export const App = () => {
  return (
    <div >
      <Routes>
          <Route path="/" element={<Header/>}>
            <Route index element={<GetTrending />}/>
            <Route path="movies" element={<Movies />}/>
            <Route path="movies/:moviesId" element={<MovieDetails />}>
                <Route path="cast" element={<Cast />} />
                <Route path="reviews" element={<Review />} />
            </Route>
            <Route path="*" element={<Navigate to="/" />} />
          </Route>

      </Routes>
    </div>
  );
};
