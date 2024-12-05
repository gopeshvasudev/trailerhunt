import { useDispatch, useSelector } from "react-redux";
import { setTrendingMovies } from "../store/reducers/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useFetchTrendingMovies = () => {
  const dispatch = useDispatch();
  const trendingMovies = useSelector((store) => store.movies.trendingMovies);

  const fetchTrendingMovies = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/trending/movie/day?language=en-IN",
      API_OPTIONS
    );
    const data = await res.json();

    dispatch(setTrendingMovies(data?.results));
  };

  useEffect(() => {
    !trendingMovies && fetchTrendingMovies();
  }, []);
};

export default useFetchTrendingMovies;
