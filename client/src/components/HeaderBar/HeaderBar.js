import { Link } from "react-router-dom";
import "./HeaderBar.scss";

function HeaderBar({ setActive }) {
  return (
    <nav className="header-bar">
      <div className="header-bar__links">
        <Link
          className="header-bar__links-item"
          // to="/movielist"
          onClick={() => setActive("Movielist")}
        >
          Movies
        </Link>
        <Link
          className="header-bar__links-item"
          // to="/genres"
          onClick={() => setActive("Genres")}
        >
          Genres
        </Link>
      </div>
    </nav>
  );
}

export default HeaderBar;
