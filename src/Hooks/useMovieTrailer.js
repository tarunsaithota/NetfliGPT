import { useEffect } from "react";
import { options } from "../Utils/Constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailer, clearTrailer } from "../Utils/moviesSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const trailerVideo = useSelector((store) => store.movies.trailerVideo)
  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      options
    );
    const response = await data.json();
    const filterVideos = response.results.filter(
      (result) => result.type === "Trailer"
    );
    const trailer = filterVideos.length ? filterVideos[0] : response.results[0];
    console.log(trailer, trailerVideo);
    dispatch(addTrailer(trailer));
  };
  useEffect(() => {
    dispatch(clearTrailer());
    getMovieVideos();
  }, []);
};

export default useMovieTrailer;
