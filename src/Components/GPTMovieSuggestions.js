import React from 'react'
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const GPTMovieSuggestions = () => {
    const {showMovies, showMovienames} = useSelector((store) => store.GPT);
    if(!showMovienames) return null;
  return (
    <div>
        {showMovienames.map((movie, index)=><MovieList key={movie} title={movie} movies={showMovies[index]}/>)}
    </div>
  )
}

export default GPTMovieSuggestions;