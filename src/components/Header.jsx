// import Logo from "../assets/img/McGreene_Bee_Dark_BG.png";
import Logo from "../assets/img/JMLogo.svg";
import ProjectsIcon from "../assets/img/laptop-code-solid.svg";
import AboutIcon from "../assets/img/address-card-solid.svg";
import ContactIcon from "../assets/img/envelope-open-text-solid.svg";

export default function Header() {
  return (
    <header className="header">
      <nav className="nav-bar">
        <ul className="nav-list">
          <li className="nav-item">
            <h2 className="logo">JM</h2>
          </li>
          <li className="nav-item">
            <label htmlFor="projects" className="nav-label">
              Projects
            </label>
            <a href="#projectsSection" name="projects">
              <img src={ProjectsIcon} alt="Projects" className="nav-icon" />
            </a>
          </li>

          <li className="nav-item">
            <label htmlFor="about" className="nav-label">
              Contact
            </label>
            <a href="#aboutSection" name="about">
              <img src={ContactIcon} alt="Contact" className="nav-icon" />
            </a>
          </li>

          <li className="nav-item">
            <label htmlFor="contact" className="nav-label">
              About Me
            </label>
            <a href="#contactSection" name="contact">
              <img src={AboutIcon} alt="About Me" className="nav-icon" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
