import EmailIcon from "../assets/img/envelope-solid.svg";
import PhoneIcon from "../assets/img/mobile-screen-solid.svg";
import LinkedInLogo from "../assets/img/LI-In-Bug.png";
import GitHubLogo from "../assets/img/github.svg";

export default function Contact() {
  return (
    <section>
      <article className="contact-card">
        <address className="contact-information">
          <p className="about-contact">
            This is paragraph about how to best get into contact with me,
            repeated many times. This is paragraph about how to best get into
            contact with me, repeated many times. This is paragraph about how to
            best get into contact with me, repeated many times. This is
            paragraph about how to best get into contact with me, repeated many
            times. This is paragraph about how to best get into contact with me,
            repeated many times.
          </p>
          <ul className="links-list contact-list">
            <li className="links-item">
              <a href="mailto:josephorianmcgreene@gmail.com" className="link">
                <img src={EmailIcon} alt="Email Icon" className="link-icon" />
              </a>
              <label className="link-label">Email</label>
            </li>

            <li className="links-item">
              <a href="tel:+34650069914" className="link">
                <img src={PhoneIcon} alt="Phone Icon" className="link-icon" />
              </a>
              <label className="link-label">Phone</label>
            </li>

            <li className="links-item">
              <a
                href="https://www.linkedin.com/in/joseph-mcgreene/"
                target="_blank"
                rel="noopener noreferrer"
                className="link"
              >
                <img
                  src={LinkedInLogo}
                  alt="LinkedIn Logo"
                  className="link-icon linkedin-logo"
                />
              </a>
              <label className="link-label">LinkedIn</label>
            </li>

            <li className="links-item">
              <a
                href="https://github.com/josephmcgreene"
                target="_blank"
                rel="noopener noreferrer"
                className="link"
              >
                <img src={GitHubLogo} alt="GitHub Logo" className="link-icon" />
              </a>
              <label className="link-label">GitHub</label>
            </li>
          </ul>
        </address>
      </article>
    </section>
  );
}
