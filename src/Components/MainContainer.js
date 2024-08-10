import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'

const MainContainer = () => {
  const[mute, setMute] = useState(true);
  const handleSound = (e) => {
    e.preventDefault();
    setMute(!mute);
  }
    const movies = useSelector((store)=>store.movies?.upComingMovies);
    if (!movies) return;
    const mainMovie = movies[0];
    const {original_title, overview, id} = mainMovie;
  return (
    <div className='pt-[13%] md:pt-0 bg-black'>
        <VideoTitle title={original_title} overview={overview} mute={mute} handleSound= {handleSound} />
        <VideoBackground movieId ={id} mute={mute} />
    </div>
  )
}

export default MainContainer;