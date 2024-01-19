import { getMoviesById } from 'API/APIThemoviedb';
import Loader from 'components/Loader/Loader';
import React, { Suspense, useEffect, useState } from 'react'
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import s from './MovieDetails.module.css'
import PropTypes from 'prop-types';

const MovieDetails = () => {
  const [movieData, setMovieData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const { moviesId } = useParams();
  const location = useLocation();



  const backLink = location.state?.from ?? '/';

  
  
 
 
  
  useEffect(() => {
    if (!moviesId) return;
    const fetchMovie = async () => {
      setError('');
      try {
        const data = await getMoviesById(moviesId);

        setMovieData(data);
      } catch (error) {
        setError('There is something wrong in your action');
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovie();
  }, [moviesId]);
  useEffect(() => {
    if (!error) return;
    toast.error(error);
  }, [error]);

  return (
    <section className={s.movie_container}>
      {movieData && (
        <>
          <Link  to={backLink} className={s.goback}>
            GO BACK
          </Link>
          <div className={s.movie_details}>
            <img

              src={`https://image.tmdb.org/t/p/w200${movieData.poster_path}`}
              alt="movie poster"
            />

            <div>
              <ul>
                <li >
                  <h1>{`${
                    movieData.original_title
                  }(${movieData.release_date?.slice(0, 4)})`}</h1>
                  <div>{`User score: ${
                    movieData.vote_average?.toFixed() * 10
                  }%`}</div>
                </li>
                <li >
                  <h2> Overview</h2>
                  <div>{movieData.overview}</div>
                </li>
                <li >
                  <h2> Genres</h2>
                  {movieData.genres?.map(g => g.name).join(', ')}
                </li>
              </ul>
            </div>
          </div>
          <h3>Additional information</h3>
          <ul className={s.inform_link_list}>
            <li>
              <Link to="cast" state={{ from: backLink }} className={s.inform_link}>
              
                Cast
              </Link>
            </li>
            <li>
              <Link to="reviews" state={{ from: backLink }} className={s.inform_link}>
                Reviews
              </Link>
            </li>
          </ul>
          <Suspense fallback={<Loader/>}>
          <Outlet />
          </Suspense>
        </>
      )}
        {isLoading && <Loader/>}  
    </section>
  );
}

export default MovieDetails


MovieDetails.propTypes = {
  to: PropTypes.object,
}