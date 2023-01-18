import GitHubLogo from "../assets/img/github.svg";
import LinkIcon from "../assets/img/up-right-from-square-solid.svg";

export default function Project({
  title,
  projectPhoto,
  projectExplanation,
  techStack,
  githubLink,
  liveLink,
}) {
  return (
    <article className="project-card">
      <hgroup>
        <h3 className="project-title">{title}</h3>

        <img
          src={projectPhoto}
          alt="project screenshot"
          className="screenshot"
        />

        <p className="about-project">{projectExplanation}</p>
      </hgroup>

      <p className="about-project">
        <em>Tech Stack: {techStack}</em>
      </p>

      <ul className="links-list">
        <li className="links-item">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="link"
            name="githubLink"
          >
            <img src={GitHubLogo} alt="GitHub Logo" className="link-icon" />
          </a>
          <label htmlFor="githubLink" className="link-label">
            GitHub
          </label>
        </li>

        <li className="links-item">
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="link"
            name="liveLink"
          >
            <img src={LinkIcon} alt="Link to App" className="link-icon" />
          </a>
          <label htmlFor="liveLink" className="link-label">
            Live
          </label>
        </li>
      </ul>
    </article>
  );
}
