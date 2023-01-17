export default function IntroHeading({ text }) {
  return (
    <>
      <h1 className="page-title">
        {text.map((letter) => {
          return <span className="title-letter">{letter}</span>;
        })}
      </h1>
      <span className="intro-span">Front-End Developer</span>
    </>
  );
}
