import { getMovieQuery } from 'API/APIThemoviedb';
import MovieList from 'components/MovieList/MovieList';
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';

const Movies  = () => {
  const [movies, setMovies] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
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
      // setIsLoading(true);
      try {
        const data = await getMovieQuery(searchQuery);

        setMovies(data.results);
      } catch (error) {
        setError('There is something wrong in your action');
        console.log(error);
      } finally {
        // setIsLoading(false);
      }
    };

    fetchMovie();
  }, [searchQuery]);

  useEffect(() => {
    if (!error) return;
    // toast.error(error);
  }, [error]);

  return (
    <section>
      <div>
        <h1>SEARCH MOVIE</h1>
        <form onSubmit={handleSubmit}>
            <label>
              <input type={'text'} name="query" />
              <button type="submit">SEARCH</button>
            </label>
        </form>
        {movies.length > 0 && <MovieList movies={movies} />}
      </div>
      {/* {isLoading && (
        <Audio
          height="80"
          width="80"
          radius="9"
          color="green"
          ariaLabel="loading"
        />
      )} */}
    </section>
  );
}

export default Movies 
