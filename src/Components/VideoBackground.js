import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../Hooks/useMovieTrailer";

const VideoBackground = ({ movieId, mute = true}) => {
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);
  
  useMovieTrailer(movieId);
  return (
    <div className="w-screen flex">
      <iframe
        className="w-screen aspect-video bg-gradient-to-t from-black"
        src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?&autoplay=1&mute=" + (mute ? 1 : 0) + "&loop=1&playlist=" + trailerVideo?.key}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      ></iframe> 
    </div>
  );
};

export default VideoBackground;
