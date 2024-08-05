import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../Utils/moviesSlice";
import { options } from '../Utils/Constants';

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector((store) => store.movies.nowPlayingMovies)
  const moviesNowPlaying = async () => {
    try{
      const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
      const response = await data.json();
      dispatch(addNowPlayingMovies(response.results));
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(()=> {
    !nowPlayingMovies && moviesNowPlaying();
  }, [nowPlayingMovies]);
}

export default useNowPlayingMovies;