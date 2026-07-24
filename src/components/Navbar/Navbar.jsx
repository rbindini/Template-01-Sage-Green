import "./Navbar.css";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={scrolled ? "navbar scrolled" : "navbar"}>

      <div className="logo">
        R ❤️ P
      </div>

      <div
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <ul className={menuOpen ? "nav-links active" : "nav-links"}>

        <li>
          <a href="#hero" onClick={() => setMenuOpen(false)}>
            Home
          </a>
        </li>

        <li>
          <a href="#story" onClick={() => setMenuOpen(false)}>
            Story
          </a>
        </li>

        <li>
          <a href="#events" onClick={() => setMenuOpen(false)}>
            Events
          </a>
        </li>

        <li>
          <a href="#gallery" onClick={() => setMenuOpen(false)}>
            Gallery
          </a>
        </li>

        <li>
          <a href="#venue" onClick={() => setMenuOpen(false)}>
            Venue
          </a>
        </li>

        <li>
          <a href="#rsvp" onClick={() => setMenuOpen(false)}>
            RSVP
          </a>
        </li>

      </ul>

    </nav>
  );
}

export default Navbar;