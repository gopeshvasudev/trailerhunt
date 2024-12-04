import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { setPopularMovies } from "../store/reducers/moviesSlice";

const Home = () => {
  const dispatch = useDispatch();

  const fetchPopularMovies = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/trending/movie/day?language=hi",
      API_OPTIONS
    );
    const data = await res.json();

    dispatch(setPopularMovies(data?.results));
  };

  useEffect(() => {
    fetchPopularMovies();
  }, []);

  return (
    <>
      <section className="w-full h-[88vh]">
        <h1>This is Homepage</h1>
      </section>
    </>
  );
};

export default Home;
