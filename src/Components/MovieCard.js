import React from 'react'
import { POSTER_CDN } from '../Utils/Constants'

const MovieCard = ({posterPath}) => {
  if(!posterPath) return null;
  return (
    <div className='w-52 md:w-64 pr-5'>
        <img src={POSTER_CDN + posterPath } alt='Movie Card' />
    </div>
  )
}

export default MovieCard;