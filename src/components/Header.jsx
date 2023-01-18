// import Logo from "../assets/img/McGreene_Bee_Dark_BG.png";
import Logo from "../assets/img/JMLogo.svg";
import ProjectsIcon from "../assets/img/laptop-code-solid.svg";
import AboutIcon from "../assets/img/address-card-solid.svg";
import ContactIcon from "../assets/img/envelope-open-text-solid.svg";

export default function Header() {
  return (
    <header className="header">
      <nav className="nav-bar">
        <h2 className="logo">JM</h2>
        <ul className="nav-list">
          <li className="nav-item">
            <a href="#projectsSection" name="projects">
              <img src={ProjectsIcon} alt="projects" />
            </a>
            <label htmlFor="projects" className="nav-text">
              Projects
            </label>
          </li>

          <li className="nav-item">
            <a href="#aboutSection" name="about">
              <img src={ContactIcon} alt="Contact" />
            </a>
            <label htmlFor="about" className="nav-text">
              Contact
            </label>
          </li>

          <li className="nav-item">
            <a href="#contactSection" name="contact">
              <img src={AboutIcon} alt="About Me" />
            </a>
            <label htmlFor="contact" className="nav-text">
              About Me
            </label>
          </li>
        </ul>
      </nav>
    </header>
  );
}
