import "./MovieCard.scss";

function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <img
        className="movie-card__image"
        src={movie.posterurl}
        alt={movie.originalTitle}
      />
      <div className="movie-card__details">
        <h2>{movie.title}</h2>
        <p>Release Date: {movie.releaseDate}</p>
        <p>IMDB Rating: {movie.imdbRating}</p>
      </div>
    </div>
  );
}
export default MovieCard;
