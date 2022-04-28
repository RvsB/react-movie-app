import MovieCard from "../MovieCard/MovieCard";
import "./ListAllMovies.scss";

function ListAllMovies({ movies }) {
  return (
    <div className="movie__list">
      {/* <h1>All Movies</h1> */}
      {movies.map((movie) => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </div>
  );
}
export default ListAllMovies;
