import { Link } from "react-router-dom";

const proofPoints = [
  { value: "App Store", label: "Shayaak: full-stack app I built, shipped to iOS, and operate", href: "https://apps.apple.com/us/app/shayaak/id6790666246" },
  { value: "MLflow", label: "merged upstream fix to mlflow/mlflow (PR #26959)", href: "https://github.com/mlflow/mlflow/pull/26959" },
  { value: "8 builds", label: "solo hackathon entries in six weeks, all with public code and demos", to: "/projects" },
];

export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--content">
        <p className="hero--eyebrow">Aryan Neopane · Denver, CO</p>
        <h1 className="hero--title">
          I build software that runs
          <span className="hero--title-accent"> unattended in production.</span>
        </h1>
        <p className="hero--description">
          Software engineer building AI agent systems, computer vision, data platforms
          and full-stack apps. I ship them with the guardrails, evaluations and
          infrastructure that production needs. Founder of Keeps Running LLC, open-source
          contributor to MLflow. B.S. Computer Science, University of Colorado Denver.
        </p>

        <div className="hero--actions">
          <Link to="/projects" className="btn btn-primary">
            See the work
          </Link>
          <a
            href="https://github.com/woooj02"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost"
          >
            GitHub ↗
          </a>
        </div>

        <div className="hero--proof">
          {proofPoints.map((p) => (
            <div key={p.value} className="hero--proof-item">
              {p.to ? (
                <Link to={p.to} className="hero--proof-value hero--proof-link">{p.value}</Link>
              ) : p.href ? (
                <a href={p.href} target="_blank" rel="noopener noreferrer" className="hero--proof-value hero--proof-link">
                  {p.value}
                </a>
              ) : (
                <span className="hero--proof-value">{p.value}</span>
              )}
              <span className="hero--proof-label">{p.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
