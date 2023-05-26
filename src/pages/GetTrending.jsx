import MovieList from 'components/MovieList/MovieList';
import React, { useEffect, useState } from 'react'
import { getTranding } from 'API/APIThemoviedb';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
// import Loader from 'components/Loader/Loader';
import s from './GetTrending.module.css'

const GetTrending = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');
  // const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    const fetchMovie = async () => {
      setError('');
      try {
        const data = await getTranding();
        setMovies(data.results);
      } catch (error) {
        setError('There is something wrong in your action');
      } finally {
        // setIsLoading(false);
      }
    };
    fetchMovie();
  }, []);
  useEffect(() => {
    if (!error) return;
    toast.error(error);
  }, [error]);





  return (
    <div className={s.trending_container}>
       <h1>Tranding today</h1>
       {movies.length > 0 && <MovieList movies={movies} />}
       {/* {isLoading && <Loader/>}   */}
    </div>
  )
}

GetTrending.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
};

export default GetTrending
