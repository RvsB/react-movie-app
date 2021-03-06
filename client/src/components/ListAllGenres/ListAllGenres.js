import "./ListAllGenres.scss";

function ListAllGenres({ genreList, activeGenre, setActiveGenre }) {
  return (
    <div className="genre-list">
      {genreList.map((genre) => (
        <a
          key={genre.id}
          className="genre-list__item"
          href="#"
          onClick={() => setActiveGenre(genre)}
        >
          {genre}
        </a>
      ))}
    </div>
  );
}
export default ListAllGenres;
