import React, {useState} from 'react';
import { useNavigate, useParams } from "react-router-dom";
import VideoBackground from './VideoBackground';
import useMovieInfo from '../Hooks/useMovieInfo';
import { useSelector } from 'react-redux';
import { POSTER_CDN } from '../Utils/Constants';

const MovieInfo = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const movieInfo = useSelector((store) => store.movies.movieInfo);
    const handleBacktoHome = ()=> {
      navigate('/');
    }
    useMovieInfo(id);
    const[displayTrailer, setDisplayTrailer] = useState(false);
    const handlePlayButton = () => {
      setDisplayTrailer(true);
    }
  return (
    <div className=''>
      <div className="absolute pl-[80%] pt-4 md:pl-[90%]">
        <button className="text-sm md:text-2xl font-bold" onClick={handleBacktoHome}>⬅️Back</button>
      </div>
      <div className="w-full m-2 py-8">
        <div className="">
          <h1 className="text-lg md:text-4xl font-bold py-2 md:py-5 pl-8">
            {movieInfo?.title}🍿
          </h1>
          <div className='px-8 pt-2 md:pt-6 md:flex'>
            <div className='w-28 md:w-80'>
              <img src={POSTER_CDN+movieInfo?.poster_path } alt='Movie Card'/>
            </div>
            <div className='md:pl-6 pt-2 text-blue-950'>
              <p className='font-semibold md:font-bold'>Duration: ⏲️ {movieInfo?.runtime}min</p>
              <p className='pt-1 md:pt-3 font-semibold md:font-bold'>Genere: 🎬 {movieInfo?.genres.map(genre => genre.name).join(', ')}</p>
              <p className='pt-1 md:pt-3 font-semibold md:font-bold'>Release Date: 🗓️ {movieInfo?.release_date}</p>
              <p className='pt-1 md:pt-3 font-semibold md:font-bold'>Votes: {movieInfo?.vote_average*10}% </p>
              <p className='pt-1 md:pt-6 font-semibold md:font-bold'>Overview:</p>
              <p className='pt-1 md:pt-6 pb-4 md:pb-10'>{movieInfo?.overview}</p>
              <button className='border border-blue-950 bg-blue-950  w-32 md:w-36 h-10 text-white rounded-lg' onClick={handlePlayButton}>▶️ Play Trailer</button>
            </div>
          </div>
        </div>
      </div>
      {displayTrailer && <VideoBackground movieId={id} />}
    </div>
  );
}

export default MovieInfo