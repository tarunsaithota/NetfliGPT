import { useDispatch, useSelector } from "react-redux";
import { options } from "../Utils/Constants";
import { addUpcComingMovies } from "../Utils/moviesSlice";
import { useEffect } from "react";

const useUpComingMovies = () => {
  const dispatch = useDispatch();
  const watchUpComingMovies = useSelector((store) => store.movies.upComingMovies)
  const upComingMovies = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
        options
      );
      const response = await data.json();
      dispatch(addUpcComingMovies(response.results));
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    !watchUpComingMovies && upComingMovies();
  }, []);
};

export default useUpComingMovies;
