import { useState } from "react";
import "./Header.css";
import { FaSearch, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container nav">
        {/* Logo */}
        <div className="logo">MyLogo</div>

        {/* Desktop Menu */}
        <nav className={`menu ${menuOpen ? "open" : ""}`}>
          <a href="#">Home</a>
          <a href="#">Services</a>
          <a href="#">Portfolio</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>

        {/* Icons */}
        <div className="icons">
          <FaSearch className="icon" />
          <FaShoppingCart className="icon" />
          {/* Hamburger / Close */}
          <div
            className="hamburger"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
