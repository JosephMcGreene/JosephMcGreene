export default function Tooltip({ text }) {
  return (
    <aside className="tooltip">
      <div className="tooltip-arrow"></div>
      <p className="tooltip-content">{text}</p>
    </aside>
  );
}
