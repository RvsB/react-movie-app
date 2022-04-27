import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

function Navbar({ active, setActive }) {
  // const [active, setactive] = useState('');
  // const [home, setHome] = useState(true);

  return (
    <nav className="navbar">
      <div className="navbar__links">
        <Link
          className="navbar__links-item"
          onClick={() => setActive("Movielist")}
        >
          Movies
        </Link>
        <Link
          className="navbar__links-item"
          onClick={() => setActive("Genres")}
        >
          Genres
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
