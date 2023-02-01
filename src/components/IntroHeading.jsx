import { useRef, useCallback } from "react";
import { useInView } from "react-intersection-observer";

import DownloadIcon from "../assets/img/download-solid.svg";
import Resume from "../assets/Joseph-McGreene-Resume.pdf";

export default function IntroHeading({ text }) {
  const ref = useRef();
  const { ref: inViewRef, inView } = useInView();

  const setRefs = useCallback(
    (node) => {
      ref.current = node;
      inViewRef(node);
    },
    [inViewRef]
  );

  return (
    <hgroup className="intro-info">
      <h1
        ref={setRefs}
        className={
          inView ? "page-title h1-hidden h1-shown" : "page-title h1-hidden"
        }
        id="pageTitle"
      >
        {text.map((letter, index) => {
          return (
            <span className="title-letter" key={index}>
              {letter}
            </span>
          );
        })}
      </h1>
      <p
        ref={setRefs}
        className={
          inView
            ? "intro-span span-hidden span-shown"
            : "intro-span span-hidden"
        }
      >
        Full-Stack Developer
      </p>
      <a
        href={Resume}
        ref={setRefs}
        className={
          inView ? "anchor anchor-hidden anchor-shown" : "anchor anchor-hidden"
        }
        download
      >
        <button className="download-button">
          <img
            src={DownloadIcon}
            alt="Download Icon"
            className="download-icon"
          />
          <span className="btn-text">My Resume</span>
        </button>
      </a>
    </hgroup>
  );
}
