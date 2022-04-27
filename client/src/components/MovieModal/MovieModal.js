import { useContext } from "react";
import "./MovieModal.scss";
import { MovieContext } from "../MovieCard/MovieCard";

function MovieModal() {
  const movie = useContext(MovieContext);

  return (
    <div className="movie-modal">
      <img
        className="movie-modal__image"
        src={movie.posterurl}
        alt={movie.originalTitle}
      />
      <div className="movie-details">
        <h1>{movie.title}</h1>
        <p>{movie.contentRating}</p>
        <p>{movie.year}</p>
        <p>
          Genres:{" "}
          {movie.genres.map((genre) => (
            <span>{genre}</span>
          ))}
        </p>
        <p>{movie.imdbRating}</p>
        <p>
          Genres:{" "}
          {movie.actors.map((actor) => (
            <span>{actor}</span>
          ))}
        </p>
        <p>{movie.storyline}</p>
      </div>

      <button>Update</button>
    </div>
  );
}
export default MovieModal;
