import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMoviesRequest } from "./movies.slice";

const Movies = () => {
  const moviesState = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMoviesRequest());
  }, [dispatch]);

  console.log("MoviesState: ", moviesState);

  const onRefreshMovie = () => {
    dispatch(getMoviesRequest());
  };
  const _renderMovies = () => {
    if (
      moviesState.loadingState === "idle" ||
      moviesState.loadingState === "loading"
    ) {
      return <p style={{ color: "red" }}>Please wait.</p>;
    }
    if (moviesState.loadingState === "error") {
      return <p>Issue while fetching the movies.</p>;
    }
    if (moviesState.loadingState === "completed") {
      return moviesState.results.map((item) => {
        return (
          <p style={{ color: "tomato" }} key={item.Title}>
            {item.Title}
          </p>
        );
      });
    }

    return null;
  };
  return (
    <div>
      <h1>My Movies</h1>
      <button onClick={onRefreshMovie}>Refresh</button>
      {_renderMovies()}
    </div>
  );
};

export default Movies;
