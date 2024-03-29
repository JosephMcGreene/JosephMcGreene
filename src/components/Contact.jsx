import { useRef, useCallback } from "react";
//Assets
import emailIcon from "../assets/img/envelope-solid.svg";
import phoneIcon from "../assets/img/mobile-screen-solid.svg";
import linkedInLogo from "../assets/img/LI-In-Bug.png";
import gitHubLogo from "../assets/img/github.svg";
//External
import { useInView } from "react-intersection-observer";

export default function Contact() {
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
    <section id="contactSection">
      <h3
        ref={setRefs}
        className={
          inView
            ? "section-heading heading-hidden heading-shown"
            : "section-heading heading-hidden"
        }
      >
        Contact Me
      </h3>

      <article
        ref={setRefs}
        className={
          inView
            ? "contact-card contact-hidden contact-shown"
            : "contact-card contact-hidden"
        }
      >
        <address className="contact-information">
          <p className="contact-content">
            If there is something amazing to be made, then let's do it! You can
            email or call me, which are the best ways to get into contact with
            me. Here are also links to what I'm up to around the internet. I'd
            love to chat, set up a project, and see where it can take us!
          </p>

          <ul className="contact-list">
            <li className="contact-item">
              <label htmlFor="emailLink" className="contact-label">
                Email
              </label>
              <a
                href="mailto:josephorianmcgreene@gmail.com"
                className="link anchor"
                name="emailLink"
              >
                <img
                  src={emailIcon}
                  alt="Email Icon"
                  className="contact-icon"
                />
              </a>
            </li>

            <li className="contact-item">
              <label htmlFor="phoneLink" className="contact-label">
                Phone
              </label>
              <a
                href="tel:+12086066137"
                className="link anchor"
                name="phoneLink"
              >
                <img
                  src={phoneIcon}
                  alt="Phone Icon"
                  className="contact-icon"
                />
              </a>
            </li>

            <li className="contact-item">
              <label htmlFor="linkedinLink" className="contact-label">
                LinkedIn
              </label>
              <a
                href="https://www.linkedin.com/in/joseph-mcgreene/"
                target="_blank"
                rel="noopener noreferrer"
                className="link anchor"
                name="linkedinLink"
              >
                <img
                  src={linkedInLogo}
                  alt="LinkedIn Logo"
                  className="contact-icon linkedin-logo"
                />
              </a>
            </li>

            <li className="contact-item">
              <label htmlFor="githubLink" className="contact-label">
                GitHub
              </label>
              <a
                href="https://github.com/josephmcgreene"
                target="_blank"
                rel="noopener noreferrer"
                className="link anchor"
                name="githubLink"
              >
                <img
                  src={gitHubLogo}
                  alt="GitHub Logo"
                  className="contact-icon"
                />
              </a>
            </li>
          </ul>
        </address>
      </article>
    </section>
  );
}
