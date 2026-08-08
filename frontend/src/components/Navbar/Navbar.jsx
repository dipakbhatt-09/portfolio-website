import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">

      <div className="nav-container">

        <a href="#home" className="logo">
          Dipak<span>.</span>
        </a>

        <ul className="nav-links">

          <li><a href="#home">Home</a></li>

          <li><a href="#about">About</a></li>

          <li><a href="#skills">Skills</a></li>

          <li><a href="#education">Education</a></li>

          <li><a href="#experience">Experience</a></li>

          <li><a href="#projects">Projects</a></li>

          <li><a href="#contact">Contact</a></li>

        </ul>

      </div>

    </header>
  );
}

export default Navbar;