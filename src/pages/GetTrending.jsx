import MovieList from 'components/MovieList/MovieList';
import React, { useEffect, useState } from 'react'
import { getTranding } from 'API/APIThemoviedb';
// import axios from 'axios';

const GetTrending = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');


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
    // toast.error(error);
  }, [error]);





  return (
    <div>
       <h1>Tranding today</h1>
       {movies.length > 0 && <MovieList movies={movies} />}

    </div>
  )
}

export default GetTrending
