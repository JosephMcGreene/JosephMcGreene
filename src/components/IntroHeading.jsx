export default function IntroHeading({ text }) {
  return (
    <hgroup>
      <h1 className="page-title">
        {text.map((letter) => {
          return <span className="title-letter">{letter}</span>;
        })}
      </h1>
      <p className="intro-span">Front-End Developer</p>
    </hgroup>
  );
}
