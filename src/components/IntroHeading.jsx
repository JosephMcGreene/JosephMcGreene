export default function IntroHeading({ text }) {
  return (
    <>
      <h1 className="page-title">
        {text.map((letter) => {
          return <span className="title-letter">{letter}</span>;
        })}
      </h1>
      <h2 className="intro-span">Front-End Developer</h2>
    </>
  );
}
