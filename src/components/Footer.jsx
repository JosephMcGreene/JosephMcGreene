import Tooltip from "./Tooltip";

export default function Footer() {
  return (
    <footer className="footer">
      <nav className="footer-nav">
        <ul className="footer-list">
          <li className="footer-li">
            <a href="#top">Back to Top</a>
          </li>
          <li className="footer-li">
            <a href="#projectsSection">Projects</a>
          </li>
          <li className="footer-li">
            <a href="#contactSection">Contact Me</a>
          </li>
          <li className="footer-li">
            <a href="#aboutSection">About Me</a>
          </li>
        </ul>

        <span className="copyright tooltip-parent">
          <Tooltip
            text="This site was built from the ground up with React, HTML, and CSS
        (specifically SCSS), bundled with Vite."
          />
          McGreene &copy;2023
        </span>
      </nav>
    </footer>
  );
}
