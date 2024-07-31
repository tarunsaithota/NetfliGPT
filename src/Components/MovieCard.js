import React from 'react'
import { POSTER_CDN } from '../Utils/Constants'

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-64 pr-5 hover: translate-x-5'>
        <img src={POSTER_CDN + posterPath } alt='Movie Card' />
    </div>
  )
}

export default MovieCard