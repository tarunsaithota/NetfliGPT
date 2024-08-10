import { useEffect } from "react";
import { options } from "../Utils/Constants";
import { useDispatch, useSelector } from "react-redux";
import { addMovieInfo, removeMovieInfo } from "../Utils/moviesSlice";

const useMovieInfo = (movieId) => {
  const dispatch = useDispatch();
  const movieInfo = useSelector((store) => store.movies.movieInfo);
  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "?language=en-US",
      options
    );
    const response = await data.json();
    dispatch(addMovieInfo(response));
  };
  useEffect(() => {
    dispatch(removeMovieInfo());
    getMovieVideos();
  }, []);
};

export default useMovieInfo;