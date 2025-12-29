import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../constants";

const usePlayingMoviesData= () => {
  const dispatch = useDispatch();
  const fetchMoviesData = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
      API_OPTIONS
    );
    const response = await data.json();
    dispatch(addMovies(response.results));
  };

  useEffect(() => {
    fetchMoviesData();
  }, []);
};
export default usePlayingMoviesData;
