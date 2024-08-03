import React from 'react'
import MovieList from './MovieList';
import { useSelector } from 'react-redux';
import Shimmer from './Shimmer';

const GPTMovieSuggestions = () => {
    const {showMovieNames, showMovies} = useSelector(store=> store.GPT);

    if(!showMovieNames) return null;
    
    return (
    <>
      <div className='bg-gray-900 m-4'>
          {showMovieNames.map((movie, index)=><MovieList key={movie} title={movie} movies={showMovies[index]}/>)}
      </div>
    </>
  )
}

export default GPTMovieSuggestions;