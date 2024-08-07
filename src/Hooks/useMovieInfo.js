import { useEffect } from "react";
import { options } from "../Utils/Constants";
import { useDispatch, useSelector } from "react-redux";
import { addMovieInfo } from "../Utils/moviesSlice";

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
    console.log(response);
    dispatch(addMovieInfo(response));
  };
  useEffect(() => {
    !movieInfo && getMovieVideos();
  }, []);
};

export default useMovieInfo;