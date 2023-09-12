import logo from "../assets/img/JM-Logo.svg";
import projectsIcon from "../assets/img/laptop-code-solid.svg";
import aboutIcon from "../assets/img/address-card-solid.svg";
import contactIcon from "../assets/img/envelope-open-text-solid.svg";

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
            <a href="#contactSection" name="about">
              <img src={contactIcon} alt="Contact" className="nav-icon" />
            </a>
          </li>

          <li className="nav-item">
            <label htmlFor="contact" className="nav-label">
              About Me
            </label>
            <a href="#aboutSection" name="about">
              <img src={aboutIcon} alt="About Me" className="nav-icon" />
            </a>
          </li>
        </ul>
      </nav>
      {/* <aside className="carbon-info">
        Not-so-fun-fact: the carbon content in the atmosphere as of {todaysData.month}/
        {todaysData.day}/{todaysData.year} is {todaysData.cycle} parts per
        million. On {yesterdaysData.month}/{yesterdaysData.day}, it was {yesterdaysData.cycle}.
        <button className="carbon-btn">Expand</button>
      </aside> */}
    </header>
  );
}
