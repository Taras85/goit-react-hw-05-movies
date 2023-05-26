
import React from 'react'
import { Link, useLocation } from 'react-router-dom';

const MovieList = ({movies}) => {
  const location = useLocation();

  


  
  

  return (
    <ul>
      {movies.map(({ original_title, id }) => (
        <li key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            {original_title}
          </Link>
       
        </li>
      ))}
    </ul>
    )
}

export default MovieList
