
import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import s from './Movie.module.css'

const MovieList = ({movies}) => {
  const location = useLocation();


  


  
  

  return (
    <ul className={s.movies_list}>
      {movies.map(({ original_title, id }) => (
        <li key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }} className={s.movies_link}>
            {original_title}
          </Link>
       
        </li>
      ))}
    </ul>
    )
}

export default MovieList
