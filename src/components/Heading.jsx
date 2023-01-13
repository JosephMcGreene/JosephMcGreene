export default function Heading({ text }) {
  return (
    <h1 className="page-title">
      {text.map((letter) => {
        return <span className="title-letter">{letter}</span>;
      })}
    </h1>
  );
}
