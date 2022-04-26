import { useState } from "react";
import "./Navbar.scss";

function Navbar() {
  // const [active, setactive] = useState('');
  // const [home, setHome] = useState(true);

  return (
    <nav className="navbar">
      <div className="navbar__links">
        <a className="navbar__links-item" href="#">
          Movies
        </a>
        <a className="navbar__links-item" href="#">
          Genres
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
