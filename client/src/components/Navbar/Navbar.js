import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

function Navbar() {
  // const [active, setactive] = useState('');
  // const [home, setHome] = useState(true);

  return (
    <nav className="navbar">
      <div className="navbar__links">
        <Link className="navbar__links-item" to="/movielist">
          Movies
        </Link>
        <Link className="navbar__links-item" to="/genres">
          Genres
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
