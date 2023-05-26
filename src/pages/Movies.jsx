import { getMovieQuery } from 'API/APIThemoviedb';
import Loader from 'components/Loader/Loader';
import MovieList from 'components/MovieList/MovieList';
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import s from './Movies.module.css'

const Movies  = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [searchParams] = useSearchParams();
  const [, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('q');

  const handleSubmit = e => {
    e.preventDefault();

    setSearchParams({ q: e.target.elements.query.value });
  };

  useEffect(() => {
    if (!searchQuery) return;

    const fetchMovie = async () => {
      setError('');
      setIsLoading(true);
      try {
        const data = await getMovieQuery(searchQuery);

        setMovies(data.results);
      } catch (error) {
        setError('There is something wrong in your action');
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovie();
  }, [searchQuery]);

  useEffect(() => {
    if (!error) return;
    toast.error(error);
  }, [error]);

  return (
    <section className={s.movies_container}>
      <div>
        <h1>SEARCH MOVIE</h1>
        <form onSubmit={handleSubmit}>
            <label>
              <input 
              type={'text'} 
              name="query" 
              autoFocus
              placeholder="Search movies"  />
              <button type="submit">SEARCH</button>
            </label>
        </form>
        {movies.length > 0 && <MovieList movies={movies} />}
      </div>
      {isLoading && <Loader/>}  
    </section>
  );
}

export default Movies 
