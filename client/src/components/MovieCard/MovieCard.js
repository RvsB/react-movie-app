import "./MovieCard.scss";

// function MovieCard({ movie }) {
//   return (
//     <div className="movie-card" key={movie.id}>
//       {/* <Link to={`movies/${movie.id}`}> */}
//       <img
//         className="movie-card__image"
//         src={movie.posterurl}
//         alt={movie.originalTitle}
//       />
//       <div className="movie-card__details">
//         <h2>{movie.title}</h2>
//         {/* <p>Release Date: {movie.releaseDate}</p> */}
//         {/* <p>IMDB Rating: {movie.imdbRating}</p> */}
//       </div>
//       {/* </Link> */}
//     </div>

//   );
// }
// export default MovieCard;

import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import MovieModal from "../MovieModal/MovieModal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  height: 600,
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function MovieCard({ movie }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <div className="movie-card" key={movie.id} onClick={handleOpen}>
        <img
          className="movie-card__image"
          src={movie.posterurl}
          alt={movie.originalTitle}
        />
        <div className="movie-card__details">
          <h2>{movie.title}</h2>
        </div>
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
            <Typography
              id="transition-modal-title"
              variant="h6"
              component={MovieModal}
            >
              Text in a modal
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
