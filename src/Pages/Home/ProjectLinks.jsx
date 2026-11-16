const ORDER = [
  ["github", (i) => i.githubLabel || "GitHub"],
  ["live", (i) => i.liveLabel || "Live demo"],
  ["appstore", () => "App Store"],
  ["video", () => "Demo video"],
];

export default function ProjectLinks({ item }) {
  const links = ORDER.filter(([key]) => item[key]);
  if (!links.length) return null;
  return (
    <div className="card--links">
      {links.map(([key, label], idx) => (
        <a
          key={key}
          href={item[key]}
          target="_blank"
          rel="noopener noreferrer"
          className={`card--link ${idx === 0 ? "card--link-primary" : ""}`}
        >
          {label(item)} ↗
        </a>
      ))}
    </div>
  );
}
