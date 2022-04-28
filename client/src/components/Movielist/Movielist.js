import useFetch from "../../hooks/useFetch";
import ListAllMovies from "../ListAllMovies/ListAllMovies";
import LoadingSkeleton from "../LoadingSkeleton/LoadingSkeleton";
import "./Movielist.scss";

function Movielist() {
  const {
    data: movies,
    isPending,
    error,
  } = useFetch("http://localhost:8000/movies");

  return (
    <div>
      {/* <h1>This is the list of movies!</h1> */}
      {error && <div>{error}</div>}
      {isPending && (
        <div className="loading">
          <LoadingSkeleton />
        </div>
      )}
      {movies && <ListAllMovies movies={movies} />}
    </div>
  );
}
export default Movielist;
