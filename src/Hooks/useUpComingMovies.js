import { useDispatch } from "react-redux";
import { options } from "../Utils/Constants";
import { addUpcComingMovies } from "../Utils/moviesSlice";
import { useEffect } from "react";

const useUpComingMovies = () => {
  const dispatch = useDispatch();
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
    upComingMovies();
  }, []);
};

export default useUpComingMovies;
