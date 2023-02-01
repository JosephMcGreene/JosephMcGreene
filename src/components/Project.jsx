import { useInView } from "react-intersection-observer";

import GitHubLogo from "../assets/img/github.svg";
import LinkIcon from "../assets/img/up-right-from-square-solid.svg";

export default function Project(props) {
  const { ref, inView, entry } = useInView();

  return (
    <article
      ref={ref}
      className={
        inView
          ? "project-card project-hidden project-shown"
          : "project-card project-hidden"
      }
    >
      <h3 className="project-title">{props.title}</h3>

      <img
        src={props.projectPhoto}
        alt="project screenshot"
        className="screenshot"
      />

      <p className="about-project">{props.projectExplanation}</p>

      <p className="about-project">
        <em>Tech Stack: {props.techStack}</em>
      </p>

      <ul className="links-list">
        <li className="links-item">
          <label htmlFor="githubLink" className="link-label">
            GitHub
          </label>
          <a
            href={props.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="link anchor"
            name="githubLink"
          >
            <img src={GitHubLogo} alt="GitHub Logo" className="link-icon" />
          </a>
        </li>

        <li className="links-item">
          <label htmlFor="liveLink" className="link-label">
            Live
          </label>
          <a
            href={props.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="link anchor"
            name="liveLink"
          >
            <img src={LinkIcon} alt="Link to App" className="link-icon" />
          </a>
        </li>
      </ul>
    </article>
  );
}
