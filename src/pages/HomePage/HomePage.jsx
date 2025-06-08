import { useEffect, useState } from "react";
import { fetchTrendingMovies } from "../../services/api";
import MovieList from "../../components/MovieList/MovieList";
import styles from "./HomePage.module.css";
import { MoonLoader } from "react-spinners";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getTrendingMovies = async () => {
      try {
        const trendingMovies = await fetchTrendingMovies();
        setMovies(trendingMovies);
        setLoading(false);
      } catch (error) {
        console.error("Error loading popular movies:", error);
        setLoading(false);
      }
    };

    getTrendingMovies();
  }, []);

  return (
    <div className={styles.titleWrap}>
      <h1 className={styles.mainTitle}>Popular Movies</h1>
      {loading ? <MoonLoader color="#a020f0" /> : <MovieList movies={movies} />}
    </div>
  );
};

export default HomePage;
