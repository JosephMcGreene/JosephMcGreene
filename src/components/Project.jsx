import { useState, useRef, useCallback } from "react";
//Assets
import gitHubLogo from "../assets/img/github.svg";
import linkIcon from "../assets/img/up-right-from-square-solid.svg";
//External
import { useInView } from "react-intersection-observer";
//Components
import Tooltip from "./Tooltip";

export default function Project(props) {
  const [projectShown, setprojectShown] = useState(false);
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
      ref={setRefs}
      className={
        inView
          ? "project-card project-card-hidden project-card-shown"
          : "project-card project-card-hidden"
      }
    >
      <header
        className="project-header"
        onClick={() => setprojectShown(!projectShown)}
      >
        <h3 className="project-title">{props.title}</h3>

        <div
          className={
            projectShown ? "project-arrow arrow-inverted" : "project-arrow"
          }
        ></div>
      </header>

      <div
        className={
          projectShown ? "content-container project-shown" : "content-container"
        }
      >
        <div className="project-content">
          <img
            src={props.projectPhoto}
            alt={props.altText}
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
                className={
                  props.isProprietary
                    ? "link anchor tooltip-parent"
                    : "link anchor"
                }
                id="githubLink"
              >
                {props.isProprietary && (
                  <Tooltip text="This software is not currently available to the public." />
                )}
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
                  props.isProprietary
                    ? "link anchor tooltip-parent"
                    : "link anchor"
                }
                id="liveLink"
              >
                {props.isProprietary && (
                  <Tooltip text="This software is not currently available to the public." />
                )}
                <img src={linkIcon} alt="Link to App" className="link-icon" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </article>
  );
}
