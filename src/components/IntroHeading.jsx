import DownloadIcon from "../assets/img/download-solid.svg";
import Resume from "../assets/Joseph-McGreene-Resume.pdf";

export default function IntroHeading({ text }) {
  return (
    <hgroup className="intro-info">
      <h1 className="page-title">
        {text.map((letter) => {
          return <span className="title-letter">{letter}</span>;
        })}
      </h1>
      <p className="intro-span">Full-Stack Developer</p>

      <a href={Resume} className="anchor" download>
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
