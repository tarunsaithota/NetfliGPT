import React from 'react'
import { POSTER_CDN } from '../Utils/Constants'
import { useNavigate } from 'react-router-dom'

const MovieCard = ({posterPath, name, id}) => {
  const navigate = useNavigate();
  const handleOverView = () => {
    navigate(`/${id}`);
  }
  if(!posterPath) return null;
  return (
    <div className='w-52 md:w-64 pr-5'>
        <img src={POSTER_CDN + posterPath } alt='Movie Card' onClick={handleOverView} className='cursor-pointer'/>
    </div>
  )
}

export default MovieCard;