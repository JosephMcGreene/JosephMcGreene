import { useRef, useCallback } from "react";
//Assets
import resume from "../assets/Joseph-McGreene-Resume.pdf";
import downloadIcon from "../assets/img/download-solid.svg";
//External
import { useInView } from "react-intersection-observer";

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
        href={resume}
        ref={setRefs}
        className={
          inView
            ? "anchor download-hidden download-shown"
            : "anchor download-hidden"
        }
        download
      >
        <button className="download-button">
          <img
            src={downloadIcon}
            alt="Download Icon"
            className="download-icon"
          />
          <span className="btn-text">My Resume</span>
        </button>
      </a>
    </hgroup>
  );
}
