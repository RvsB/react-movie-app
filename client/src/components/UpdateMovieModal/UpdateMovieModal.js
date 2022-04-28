import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { MovieContext } from "../MovieCard/MovieCard";
import Button from "@mui/material/Button";
import "./UpdateMovieModal.scss";

const UpdateMovieModal = () => {
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
      // history.push('/');
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
          value={title} //when the value of title changes it gets reflected here, when we try to change value, onchange gets triggered and it records our input and setTitle to that recorded input and then when we set value={title}, it shows us what we entered in the input field.
          onChange={(e) => setTitle(e.target.value)} //e is event object
        />
        <label>Content Rating:</label>
        <input
          type="text"
          required
          value={contentRating} //when the value of title changes it gets reflected here, when we try to change value, onchange gets triggered and it records our input and setTitle to that recorded input and then when we set value={title}, it shows us what we entered in the input field.
          onChange={(e) => setContentRating(e.target.value)} //e is event object
        />
        <label>Year:</label>
        <input
          type="text"
          required
          value={year} //when the value of title changes it gets reflected here, when we try to change value, onchange gets triggered and it records our input and setTitle to that recorded input and then when we set value={title}, it shows us what we entered in the input field.
          onChange={(e) => setYear(e.target.value)} //e is event object
        />
        <label>Genres:</label>
        <input
          type="text"
          required
          value={genres} //when the value of title changes it gets reflected here, when we try to change value, onchange gets triggered and it records our input and setTitle to that recorded input and then when we set value={title}, it shows us what we entered in the input field.
          onChange={(e) => setGenres(e.target.value)} //e is event object
        />
        <label>IMDB Rating:</label>
        <input
          type="text"
          required
          value={imdbRating} //when the value of title changes it gets reflected here, when we try to change value, onchange gets triggered and it records our input and setTitle to that recorded input and then when we set value={title}, it shows us what we entered in the input field.
          onChange={(e) => setImdbRating(e.target.value)} //e is event object
        />
        <label>Actors:</label>
        <input
          type="text"
          required
          value={actors} //when the value of title changes it gets reflected here, when we try to change value, onchange gets triggered and it records our input and setTitle to that recorded input and then when we set value={title}, it shows us what we entered in the input field.
          onChange={(e) => setActors(e.target.value)} //e is event object
        />
        <label>Storyline:</label>
        <textarea
          required
          value={storyline}
          onChange={(e) => setStoryline(e.target.value)}
        ></textarea>
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
      </form>
    </div>
  );
};

export default UpdateMovieModal;
