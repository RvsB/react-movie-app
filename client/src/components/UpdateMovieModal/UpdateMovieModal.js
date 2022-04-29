import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { MovieContext } from "../MovieCard/MovieCard";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import "./UpdateMovieModal.scss";

const UpdateMovieModal = ({ saveHandleClose }) => {
  const movie = useContext(MovieContext);

  const [title, setTitle] = useState(movie.title);
  const [contentRating, setContentRating] = useState(movie.contentRating);
  const [year, setYear] = useState(movie.year);
  const [genres, setGenres] = useState(movie.genres);
  const [imdbRating, setImdbRating] = useState(movie.imdbRating);
  const [actors, setActors] = useState(movie.actors);
  const [storyline, setStoryline] = useState(movie.storyline);
  const [isPending, setIsPending] = useState(false);
  const id = movie.id;
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault(); // prevents the page from refreshing when we hit the submit button
    const updatedMovie = {
      ...movie,
      title,
      contentRating,
      year,
      genres,
      imdbRating,
      actors,
      storyline,
    };

    setIsPending(true);

    fetch("http://localhost:8000/movies/" + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedMovie), //to convert it from an js object to json, also the json server will add the id property automatically
    }).then(() => {
      console.log("new movie added");
      setIsPending(false);
      // history.go(-1); this goes back or forward respective to the number we mention, either negative or positive
      // history.push('/'); commented this out since react router is not working
    });
  };

  return (
    <div className="update-modal">
      <h2>Update {title}</h2>
      <form>
        <label>Movie title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Content Rating:</label>
        <input
          type="text"
          required
          value={contentRating}
          onChange={(e) => setContentRating(e.target.value)}
        />
        <label>Year:</label>
        <input
          type="text"
          required
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
        <label>Genres:</label>
        <input
          type="text"
          required
          value={genres}
          onChange={(e) => setGenres(e.target.value)}
        />
        <label>IMDB Rating:</label>
        <input
          type="text"
          required
          value={imdbRating}
          onChange={(e) => setImdbRating(e.target.value)}
        />
        <label>Actors:</label>
        <input
          type="text"
          required
          value={actors}
          onChange={(e) => setActors(e.target.value)}
        />
        <label>Storyline:</label>
        <textarea
          required
          value={storyline}
          onChange={(e) => setStoryline(e.target.value)}
        ></textarea>
        <Stack direction="row" spacing={2}>
          {!isPending && (
            <Button onClick={handleSubmit} variant="contained" color="error">
              Save
            </Button>
          )}
          {isPending && (
            <Button variant="outlined" color="error" disabled>
              Saving Movie...
            </Button>
          )}
          <Button onClick={saveHandleClose} variant="contained" color="error">
            Close
          </Button>
        </Stack>
      </form>
    </div>
  );
};

export default UpdateMovieModal;
