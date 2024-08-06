import React, {useState} from 'react';
import { useParams } from "react-router-dom";
import VideoBackground from './VideoBackground';

const MovieInfo = () => {
    const { id } = useParams();
  return (
    <div>
        <h1>Movie info: Movie ID: {id}</h1>
        <VideoBackground movieId={id} />
    </div>
  )
}

export default MovieInfo