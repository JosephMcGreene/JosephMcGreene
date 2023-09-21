import { useRef, useCallback } from "react";
//Assets
import gitHubLogo from "../assets/img/github.svg";
import linkIcon from "../assets/img/up-right-from-square-solid.svg";
//External
import { useInView } from "react-intersection-observer";
//Components
import Tooltip from "./Tooltip";

export default function Project(props) {
  const ref = useRef();
  const { ref: inViewRef, inView } = useInView({ threshold: 0.2 });

  const setRefs = useCallback(
    (node) => {
      ref.current = node;
      inViewRef(node);
    },
    [inViewRef]
  );

  return (
    <article
      className="project-card"
      // ref={setRefs}
      // className={
      //   inView
      //     ? "project-card project-hidden project-shown"
      //     : "project-card project-hidden"
      // }
    >
      <div className="project-content">
        <h3 className="project-title">{props.title}</h3>

        <p className="about-project">{props.projectExplanation}</p>

        <img
          src={props.projectPhoto}
          alt={props.altText}
          className="screenshot"
        />

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
              id="githubLink"
            >
              <img src={gitHubLogo} alt="GitHub Logo" className="link-icon" />
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
              className={
                props.isAdvizotMeetings
                  ? "link anchor tooltip-parent"
                  : "link anchor"
              }
              id="liveLink"
            >
              {props.isAdvizotMeetings && (
                <Tooltip text="This proprietary software is not currently available to the public." />
              )}
              <img src={linkIcon} alt="Link to App" className="link-icon" />
            </a>
          </li>
        </ul>
      </div>
    </article>
  );
}
