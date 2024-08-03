import React from 'react'
import MovieCard from './MovieCard';

const MovieList = ({title, movies}) => {
  return (
    <div className='pl-6 pr-2'>
        <h1 className='text-lg md:text-xl font-bold py-5 text-white'>{title}</h1>
        <div className='flex overflow-x-scroll'> 
        <div className='flex'>
            {movies?.map(movie => <MovieCard key={movie.id} posterPath={movie.poster_path}/>)} 
        </div>
        </div>
    </div>
  )
}

export default MovieList;