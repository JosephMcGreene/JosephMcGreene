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
      ref={setRefs}
      className={
        inView
          ? "project-card project-hidden project-shown"
          : "project-card project-hidden"
      }
    >
      <h3
        ref={setRefs}
        className={
          inView
            ? "project-title project-title-hidden project-title-shown"
            : "project-title project-title-hidden"
        }
      >
        {props.title}
      </h3>

      <div
        ref={setRefs}
        className={
          inView
            ? "project-explain-container project-explain-hidden project-explain-shown"
            : "project-explain-container project-explain-hidden "
        }
      >
        <img
          src={props.projectPhoto}
          alt={props.altText}
          className="screenshot"
        />

        <p className="about-project">{props.projectExplanation}</p>
      </div>

      <p
        ref={setRefs}
        className={
          inView
            ? "about-project techstack-hidden techstack-shown"
            : "about-project techstack-hidden"
        }
      >
        <em>Tech Stack: {props.techStack}</em>
      </p>

      <ul className="links-list">
        <li
          ref={setRefs}
          className={
            inView
              ? "links-item github-link-hidden github-link-shown"
              : "links-item github-link-hidden"
          }
        >
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
            <img src={gitHubLogo} alt="GitHub Logo" className="link-icon" />
          </a>
        </li>

        <li
          ref={setRefs}
          className={
            inView
              ? "links-item livelink-hidden livelink-shown"
              : "links-item livelink-hidden"
          }
        >
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
            name="liveLink"
          >
            {props.isAdvizotMeetings && (
              <Tooltip text="This proprietary software is not currently available to the public." />
            )}
            <img src={linkIcon} alt="Link to App" className="link-icon" />
          </a>
        </li>
      </ul>
    </article>
  );
}
