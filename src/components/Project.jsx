import GitHubLogo from "../assets/img/github.svg";
import LinkIcon from "../assets/img/up-right-from-square-solid.svg";

export default function Project({
  title,
  projectPhoto,
  projectExplanation,
  githubLink,
  liveLink,
}) {
  return (
    <article className="project-card">
      <h3 className="project-title">{title}</h3>

      <img src={projectPhoto} alt="project screenshot" className="screenshot" />

      <p className="about-project">{projectExplanation}</p>

      <ul className="project-list">
        <li className="projects-li">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            <img
              src={GitHubLogo}
              alt="GitHub Logo"
              className="project-link-icon"
            />
          </a>
        </li>

        <li className="projects-li">
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            <img
              src={LinkIcon}
              alt="Link to App"
              className="project-link-icon"
            />
          </a>
        </li>
      </ul>
    </article>
  );
}
