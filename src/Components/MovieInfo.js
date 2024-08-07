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
      navigate('/browse');
    }
    useMovieInfo(id);
    const[displayTrailer, setDisplayTrailer] = useState(false);
    const handlePlayButton = () => {
      setDisplayTrailer(true);
    }
  return (
    <div className=''>
      <div className="absolute px-[90%]">
        <button className="text-2xl m-4 px-8 font-bold" onClick={handleBacktoHome}>⬅️Back</button>
      </div>
      <div className="w-full pb-4">
        <div className="mt-0">
          <h1 className="text-lg md:text-4xl font-bold py-5 px-8">
            {movieInfo?.original_title}🍿
          </h1>
          <div className='px-5 flex'>
            <div className='w-52 md:w-96'>
              <img src={POSTER_CDN+movieInfo?.poster_path } alt='Movie Card'/>
            </div>
            <div className='px-6 pt-2'>
              <p className='font-bold'>Duration: ⏲️ {movieInfo?.runtime}min</p>
              <p className='pt-3 font-bold'>Genere: 🎬 {movieInfo?.genres.map(genre => genre.name).join(', ')}</p>
              <p className='pt-3 font-bold'>Release Date: 🗓️ {movieInfo?.release_date}</p>
              <p className='pt-3 font-bold'>Votes: {movieInfo?.vote_average*10}% </p>
              <p className='pt-6 font-bold'>Overview:</p>
              <p className='line-clamp-2 pt-6 pb-10'>{movieInfo?.overview}</p>
              <button className='border border-blue-950 bg-blue-950  w-36 h-10 text-white' onClick={handlePlayButton}>▶️ Play Trailer</button>
            </div>
          </div>
        </div>
      </div>

      {displayTrailer && <VideoBackground movieId={id} />}
    </div>
  );
}

export default MovieInfo