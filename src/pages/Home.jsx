import { useSelector } from "react-redux";
import useFetchTrendingMovies from "../hooks/useFetchTrendingMovies";
import MovieCard from "../components/MovieCard";
import Loader from "../components/Loader";

const Home = () => {
  useFetchTrendingMovies();
  let trendingMovies = useSelector((store) => store.movies.trendingMovies);

  if (!trendingMovies) {
    return <Loader />;
  }

  return (
    <>
      <section className="w-full flex flex-wrap items-start justify-start gap-3">
        {trendingMovies?.map((movie) => (
          <MovieCard key={movie.id} data={movie} />
        ))}
      </section>
    </>
  );
};

export default Home;
