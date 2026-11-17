import { Link } from "react-router-dom";

const highlights = [
  { value: "265 videos, unattended", detail: "My content pipeline since May 2026, 97% of runs succeed", to: "/projects?p=youtube-agent" },
  { value: "Live on the App Store", detail: "Shayaak, built and operated solo", href: "https://apps.apple.com/us/app/shayaak/id6790666246" },
  { value: "Merged into MLflow", detail: "Upstream fix, PR #26959", href: "https://github.com/mlflow/mlflow/pull/26959" },
  { value: "9 hackathon builds", detail: "Oct–Nov 2026, all with public code", to: "/projects?c=Hackathons" },
];

export default function Highlights() {
  return (
    <div className="highlights">
      {highlights.map((h) => {
        const inner = (
          <>
            <span className="highlights--value">{h.value}</span>
            <span className="highlights--detail">{h.detail}</span>
          </>
        );
        return h.to ? (
          <Link key={h.value} to={h.to} className="highlights--item">{inner}</Link>
        ) : (
          <a key={h.value} href={h.href} target="_blank" rel="noopener noreferrer" className="highlights--item">{inner}</a>
        );
      })}
    </div>
  );
}
