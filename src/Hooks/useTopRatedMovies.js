import { useDispatch, useSelector } from "react-redux";
import { options } from "../Utils/Constants";
import { addTopRatedMovies } from "../Utils/moviesSlice";
import { useEffect } from "react";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const watchTopRatedMovies = useSelector((store) => store.movies.topRatedMovies)
  const topRatedMovies = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
        options
      );
      const response = await data.json();
      dispatch(addTopRatedMovies(response.results));
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    !watchTopRatedMovies && topRatedMovies();
  }, [watchTopRatedMovies]);
};

export default useTopRatedMovies;
