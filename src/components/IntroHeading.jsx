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
        className={
          inView
            ? "page-title h1-hidden visually-hidden h1-shown"
            : "page-title h1-hidden visually-hidden"
        }
        id="pageTitle"
      >
        Joseph McGreene
      </h1>

      <div class="main-heading">
        <div class="name-container">
          <div class="letter spacer spacer-left"></div>
          <div class="letter j"></div>
          <div class="letter o"></div>
          <div class="letter s"></div>
          <div class="letter e"></div>
          <div class="letter p"></div>
          <div class="letter h"></div>
          <div class="letter spacer spacer-right"></div>
          <div class="letter m"></div>
          <div class="letter c"></div>
          <div class="letter g"></div>
          <div class="letter r"></div>
          <div class="letter e2"></div>
          <div class="letter e3"></div>
          <div class="letter n"></div>
          <div class="letter e4"></div>
        </div>
      </div>

      <p
        ref={setRefs}
        className={
          inView
            ? "intro-span span-hidden span-shown"
            : "intro-span span-hidden"
        }
      >
        Full Stack Developer
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
