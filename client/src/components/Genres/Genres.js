import { useState } from "react";
import useFetch from "../../hooks/useFetch";
import ListAllGenres from "../ListAllGenres/ListAllGenres";
import LoadingSkeleton from "../LoadingSkeleton/LoadingSkeleton";
import MovieCard from "../MovieCard/MovieCard";
import "./Genres.scss";

function Genres() {
  const [activeGenre, setActiveGenre] = useState("");

  const {
    data: genreList,
    isPending,
    error,
  } = useFetch("http://localhost:8000/genresList");

  const {
    data: movies,
    isPending1,
    error1,
  } = useFetch("http://localhost:8000/movies");

  // console.log(activeGenre);

  return (
    <div className="genre-container">
      {/* <h1>This is the list of genres!</h1> */}
      {error && <div>{error}</div>}
      {isPending && (
        <div className="loading">
          <LoadingSkeleton />
        </div>
      )}
      {genreList && (
        <ListAllGenres
          genreList={genreList}
          activeGenre={activeGenre}
          setActiveGenre={setActiveGenre}
        />
      )}

      {/* {activeGenre} */}
      <div className="movie-container">
        {error1 && <div>{error}</div>}
        {isPending1 && <div className="loading-content">Loading...</div>}
        {movies && (
          <div className="movie__list">
            {movies.map(
              (movie) =>
                movie.genres.includes(activeGenre) && (
                  <MovieCard movie={movie} />
                )
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Genres;
