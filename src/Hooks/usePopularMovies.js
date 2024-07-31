import { useDispatch } from "react-redux";
import { options } from "../Utils/Constants";
import { addPopularMovies } from "../Utils/moviesSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const popularMovies = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
        options
      );
      const response = await data.json();
      dispatch(addPopularMovies(response.results));
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    popularMovies();
  }, []);
};

export default usePopularMovies;
