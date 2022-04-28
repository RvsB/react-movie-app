import { useContext } from "react";
import "./MovieModal.scss";
import { MovieContext } from "../MovieCard/MovieCard";
import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import UpdateMovieModal from "../UpdateMovieModal/UpdateMovieModal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  height: "80vh",
  width: "60vw",
  padding: 0,
  margin: 0,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function MovieModal() {
  const movie = useContext(MovieContext);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="movie-modal">
      <div className="movie-modal__content">
        <img
          className="movie-modal__image"
          src={movie.posterurl}
          alt={movie.originalTitle}
        />
        <div className="movie-modal__details">
          <h1 className="movie-modal__details--title">{movie.title}</h1>
          <h4>{`Content Rating: ${movie.contentRating}`}</h4>
          <h4>{`Year: ${movie.year}`}</h4>
          <h4>
            Genres:{" "}
            {movie.genres.map((genre) => (
              <span>{`${genre} `}</span>
            ))}
          </h4>
          <h4>{`IMDB Rating: ${movie.imdbRating}`}</h4>
          <h4>
            Actors:{" "}
            {movie.actors.map((actor) => (
              <span>
                {`${actor} `}
                <br></br>
              </span>
            ))}
          </h4>
          <h4>{`Plot: ${movie.storyline}`}</h4>
        </div>
      </div>

      <div className="btn-container">
        <button onClick={handleOpen}>Update</button>
      </div>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            {/* <Typography id="transition-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography> */}
            <UpdateMovieModal />
            {/* <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography> */}
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
export default MovieModal;
