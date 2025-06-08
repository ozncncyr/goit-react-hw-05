import { useEffect, useState, Suspense, useRef } from "react";
import {
  useParams,
  Link,
  Outlet,
  useLocation,
  useMatch,
} from "react-router-dom";
import { fetchMovieDetails } from "../../services/api";
import styles from "./MovieDetailsPage.module.css";
import { MoonLoader } from "react-spinners";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from || "/movies");
  const [movie, setMovie] = useState(null);
  const isCastPage = useMatch("/movies/:movieId/cast");
  const isReviewsPage = useMatch("/movies/:movieId/reviews");

  useEffect(() => {
    fetchMovieDetails(movieId).then(setMovie).catch(console.error);
  }, [movieId]);

  if (!movie) return <MoonLoader color="white" />;

  return (
    <div className={styles.container}>
      {}
      <Link to={backLinkRef.current} className={styles.goBack}>
        ← Go back
      </Link>

      <div className={styles.details}>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <div className={styles.info}>
          <h2>{movie.title}</h2>
          <p>User Score: {Math.round(movie.vote_average * 10)}%</p>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          <p>{movie.genres.map((genre) => genre.name).join(", ")}</p>
          <h3>Producers</h3>
          <div className={styles.producers}>
            {movie.production_companies.map(({ logo_path }, index) => {
              return (
                logo_path && (
                  <img
                    className={styles.producerLogo}
                    key={index}
                    src={"https://image.tmdb.org/t/p/w500/" + logo_path}
                  />
                )
              );
            })}{" "}
          </div>
          <div className={styles.additionalInfo}>
            <Link
              to="cast"
              state={{ from: backLinkRef.current }}
              className={styles.link}
            >
              Cast
            </Link>
            <Link
              to="reviews"
              state={{ from: backLinkRef.current }}
              className={styles.link}
            >
              Reviews
            </Link>
          </div>
        </div>
        <div className={styles.castReviewsContainer}>
          {isReviewsPage && (
            <div className={styles.reviews}>
              <Suspense fallback={<MoonLoader color="white" />}>
                <Outlet />
              </Suspense>
            </div>
          )}

          {isCastPage && (
            <div className={styles.cast}>
              <Suspense fallback={<MoonLoader color="white" />}>
                <Outlet />
              </Suspense>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsPage;
