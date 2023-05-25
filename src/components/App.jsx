import GetTrending from "pages/GetTrending";
import MovieDetails from "pages/MovieDetails";
import Movies from "pages/Movies";
import { Route, Routes } from "react-router-dom";
import Header from "./Header/Header";
import Cast from "./Cast/Cast";
import Review from "./Reviews/Review";
import s from './App.module.css'

export const App = () => {
  return (
    <div
      // style={{
      //   height: '100vh',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 40,
      //   color: '#010101'
      // }}
    >
      <Routes>

          <Route path="/" element={<Header/>}>
            <Route index element={<GetTrending />}/>
            <Route path="movies" element={<Movies />}/>
            <Route path="movies/:moviesId" element={<MovieDetails />}>
                <Route path="cast" element={<Cast />} />
                <Route path="reviews" element={<Review />} />
            </Route>
          </Route>

      </Routes>
    </div>
  );
};
