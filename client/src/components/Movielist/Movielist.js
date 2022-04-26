import useFetch from "../../hooks/useFetch";
import ListAllMovies from "../ListAllMovies/ListAllMovies";

function Movielist() {
  const {
    data: movies,
    isPending,
    error,
  } = useFetch("http://localhost:8000/movies");

  return (
    <div>
      <h1>This is the list of movies!</h1>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {movies && <ListAllMovies movies={movies} />}
    </div>
  );
}
export default Movielist;
