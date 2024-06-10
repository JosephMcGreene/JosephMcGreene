import { useRef, useCallback } from "react";
//Assets
import resume from "../assets/Joseph-McGreene_Resume.pdf";
import newTabIcon from "../assets/img/up-right-from-square-solid.svg";
//External
import { useInView } from "react-intersection-observer";

export default function IntroHeading() {
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
        className={inView ? "h1 span-hidden span-shown" : "h1 span-hidden"}
        id="pageTitle"
      >
        JOSEPH M<sup>c</sup>GREENE
      </h1>

      <p className="subheading">Full Stack Developer</p>

      <a
        href={resume}
        ref={setRefs}
        className={
          inView
            ? "anchor download-hidden download-shown"
            : "anchor download-hidden"
        }
        target="_blank"
        rel="noreferrer"
      >
        <button className="download-button">
          <img src={newTabIcon} alt="link" className="download-icon" />
          <span className="btn-text">My Resume</span>
        </button>
      </a>
    </hgroup>
  );
}
