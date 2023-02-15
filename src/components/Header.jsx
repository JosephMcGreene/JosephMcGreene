import projectsIcon from "../assets/img/laptop-code-solid.svg";
import aboutIcon from "../assets/img/address-card-solid.svg";
import contactIcon from "../assets/img/envelope-open-text-solid.svg";
import logo from "../assets/img/logo.png";

export default function Header() {
  return (
    <header className="header">
      <nav className="nav-bar">
        <ul className="nav-list">
          <li className="nav-item">
            <img src={logo} alt="JM Logo" className="logo" />
          </li>
          <li className="nav-item">
            <label htmlFor="projects" className="nav-label">
              Projects
            </label>
            <a href="#projectsSection" name="projects" tabIndex="0">
              <img src={projectsIcon} alt="Projects" className="nav-icon" />
            </a>
          </li>

          <li className="nav-item">
            <label htmlFor="about" className="nav-label">
              Contact
            </label>
            <a href="#aboutSection" name="about">
              <img src={contactIcon} alt="Contact" className="nav-icon" />
            </a>
          </li>

          <li className="nav-item">
            <label htmlFor="contact" className="nav-label">
              About Me
            </label>
            <a href="#contactSection" name="contact">
              <img src={aboutIcon} alt="About Me" className="nav-icon" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
