import EmailIcon from "../assets/img/envelope-solid.svg";
import PhoneIcon from "../assets/img/mobile-screen-solid.svg";
import LinkedInLogo from "../assets/img/LI-In-Bug.png";
import GitHubLogo from "../assets/img/github.svg";

export default function Contact() {
  return (
    <section id="contactSection">
      <h3 className="section-heading">Contact Me</h3>
      <article className="contact-card">
        <address className="contact-information">
          <p className="about-contact">
            If there is something amazing to be made, then let's do it! You can
            email or call me, which are the best ways to get into contact with
            me. Here are also links to what I'm up to around the internet. I'd
            love to chat, set up a project, and see where it can take us!
          </p>
          <ul className="links-list contact-list">
            <li className="links-item">
              <label htmlFor="emailLink" className="link-label">
                Email
              </label>
              <a
                href="mailto:josephorianmcgreene@gmail.com"
                className="link anchor"
                name="emailLink"
              >
                <img src={EmailIcon} alt="Email Icon" className="link-icon" />
              </a>
            </li>

            <li className="links-item">
              <label htmlFor="phoneLink" className="link-label">
                Phone
              </label>
              <a
                href="tel:+34650069914"
                className="link anchor"
                name="phoneLink"
              >
                <img src={PhoneIcon} alt="Phone Icon" className="link-icon" />
              </a>
            </li>

            <li className="links-item">
              <label htmlFor="linkedinLink" className="link-label">
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
                  src={LinkedInLogo}
                  alt="LinkedIn Logo"
                  className="link-icon linkedin-logo"
                />
              </a>
            </li>

            <li className="links-item">
              <label htmlFor="githubLink" className="link-label">
                GitHub
              </label>
              <a
                href="https://github.com/josephmcgreene"
                target="_blank"
                rel="noopener noreferrer"
                className="link anchor"
                name="githubLink"
              >
                <img src={GitHubLogo} alt="GitHub Logo" className="link-icon" />
              </a>
            </li>
          </ul>
        </address>
      </article>
    </section>
  );
}
