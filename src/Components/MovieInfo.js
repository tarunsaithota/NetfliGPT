import React, {useRef, useState} from 'react';
import { useNavigate, useParams } from "react-router-dom";
import VideoBackground from './VideoBackground';
import useMovieInfo from '../Hooks/useMovieInfo';
import { useSelector } from 'react-redux';
import { POSTER_CDN } from '../Utils/Constants';

const MovieInfo = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const movieInfo = useSelector((store) => store.movies.movieInfo);
    const videoFocus = useRef(null);
    const topOfDetails = useRef(null);
    const handleBacktoHome = ()=> {
      navigate('/');
    }
    useMovieInfo(id);
    const[displayTrailer, setDisplayTrailer] = useState(false);
    const handlePlayButton = () => {
      setDisplayTrailer(true);
      setTimeout(() => {
        videoFocus.current &&
          videoFocus.current.scrollIntoView({ behavior: "smooth" });
          videoFocus.current.focus();
      }, 0);
    }
    const handleScrollToTop = () => {
      topOfDetails.current.scrollIntoView({ behavior: "smooth" });
      topOfDetails.current.focus();
    };
  return (
    <div ref={topOfDetails} tabIndex="-1">
      <div className="absolute pl-[80%] pt-4 md:pl-[90%]">
        <button
          className="text-sm md:text-2xl font-bold"
          onClick={handleBacktoHome}
        >
          ⬅️ Back
        </button>
      </div>
      <div className="w-full p-2 py-8 md:pt-16">
        <div className="px-8 md:pt-6 md:flex md:w-full">
          <div className="w-28 md:w-[25%] mr-8 mb-4 md:mb-0 pt-16 md:pt-0">
            <img
              src={POSTER_CDN + movieInfo?.poster_path}
              alt="Movie Card"
              className="rounded-xl w-full h-full object-cover"
            />
          </div>
          <div className="md:px-8 pt-3 text-blue-950 md:w-[70%] md:ml-8 md:shadow-inner">
            <p className="text-lg md:text-4xl font-extrabold md:py-5  md:text-blue-950">
              {movieInfo?.title}🍿
            </p>
            <p className="font-semibold md:font-bold shadow-sm text-ls md:text-xl ">
              Duration:{" "}
              <span className="font-semibold md:text-lg">
                ⏲️ {movieInfo?.runtime} min
              </span>
            </p>
            <p className="pt-1 md:pt-3 font-semibold md:font-bold shadow-sm text-ls md:text-xl ">
              Genere:{" "}
              <span className="font-semibold md:text-lg">
                🎬 {movieInfo?.genres.map((genre) => genre.name).join(", ")}
              </span>
            </p>
            <p className="pt-1 md:pt-3 font-semibold md:font-bold shadow-sm text-ls md:text-xl ">
              Release Date:
              <span className="font-semibold md:text-lg">
                {" "}
                🗓️ {movieInfo?.release_date}
              </span>
            </p>
            <p className="pt-1 md:pt-3 font-semibold md:font-bold shadow-sm text-ls md:text-xl ">
              Votes:{" "}
              <span className="font-semibold md:text-lg">
                {Math.round(movieInfo?.vote_average * 10)}%
              </span>{" "}
            </p>
            <p className="pt-1 md:pt-6 font-semibold md:font-bold shadow-sm text-ls md:text-xl ">
              Overview:
            </p>
            <p className="pt-2 md:pt-6 pb-4 md:pb-10 shadow-xs font-semibold">
              {movieInfo?.overview}
            </p>
            <button
              className=" bg-blue-950 hover:bg-blue-800 w-32 md:w-36 h-10 text-white rounded-lg"
              onClick={handlePlayButton}
            >
              ▶️ Play Trailer
            </button>
          </div>
        </div>
      </div>
      {displayTrailer && (
        <div ref={videoFocus}>
          <VideoBackground movieId={id} />
        </div>
      )}
      <div className="hidden md:inline-block fixed bottom-4 right-4">
        <button
          className="border border-blue-950 bg-white w-10 h-10 text-white rounded-full"
          onClick={handleScrollToTop}
        >
          ⬆️
        </button>
      </div>
    </div>
  );
}

export default MovieInfo