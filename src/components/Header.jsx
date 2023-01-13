import ProjectsIcon from "../assets/img/laptop-code-solid.svg";
import AboutIcon from "../assets/img/address-card-solid.svg";
import ContactIcon from "../assets/img/envelope-open-text-solid.svg";

export default function Header() {
  return (
    <header className="header">
      <nav className="nav-bar">
        <h2 className="logo">[LOGO]</h2>
        <ul className="nav-list">
          {/* <li className="nav-item">Projects</li>
          <li className="nav-item">About</li>
          <li className="nav-item">Contact</li> */}
          <li className="nav-item">
            <img src={ProjectsIcon} alt="projects" />
            <h5 className="nav-text">Projects</h5>
          </li>
          <li className="nav-item">
            <img src={AboutIcon} alt="About Me" />
            <h5 className="nav-text">About Me</h5>
          </li>
          <li className="nav-item">
            <img src={ContactIcon} alt="Contact" />
            <h5 className="nav-text">Contact</h5>
          </li>
        </ul>
      </nav>
    </header>
  );
}
