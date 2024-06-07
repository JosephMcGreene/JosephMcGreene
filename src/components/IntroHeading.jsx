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
      <h1 ref={setRefs} className="visually-hidden" id="pageTitle">
        Joseph McGreene
      </h1>

      {/* <div className="main-heading">
        <div
          id="pageTitle"
          ref={setRefs}
          className={
            inView
              ? "name-container h1-hidden h1-shown"
              : "name-container h1-hideen"
          }
        >
          <div className="letter spacer spacer-left"></div>
          <div className="letter j"></div>
          <div className="letter o"></div>
          <div className="letter s"></div>
          <div className="letter e"></div>
          <div className="letter p"></div>
          <div className="letter h"></div>
          <div className="letter spacer spacer-right"></div>
          <div className="letter m"></div>
          <div className="letter c"></div>
          <div className="letter g"></div>
          <div className="letter r"></div>
          <div className="letter e2"></div>
          <div className="letter e3"></div>
          <div className="letter n"></div>
          <div className="letter e4"></div>
        </div>
      </div> */}

      <p
        ref={setRefs}
        className={
          inView
            ? "intro-span span-hidden span-shown"
            : "intro-span span-hidden"
        }
      >
        JOSEPH M<sup>c</sup>GREENE
      </p>

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
