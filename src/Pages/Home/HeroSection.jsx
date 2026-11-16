import { Link } from "react-router-dom";

const proofPoints = [
  { value: "Live on the App Store", detail: "Shayaak, built and operated solo", href: "https://apps.apple.com/us/app/shayaak/id6790666246" },
  { value: "Merged into MLflow", detail: "PR #26959", href: "https://github.com/mlflow/mlflow/pull/26959" },
  { value: "9 hackathon builds", detail: "Oct–Nov 2026, public code", to: "/projects?c=Hackathons" },
];

export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <p className="hero--eyebrow">
        <span className="hero--dot" aria-hidden="true" />
        Software engineer · Denver, CO
      </p>
      <h1 className="hero--title">
        I build software that runs
        <span className="hero--title-accent"> unattended in production.</span>
      </h1>
      <p className="hero--description">
        AI agent systems, computer vision, data platforms and full-stack apps, shipped with
        the guardrails, evaluations and infrastructure that production needs. Founder of
        Keeps Running LLC. B.S. Computer Science, University of Colorado Denver.
      </p>

      <div className="hero--actions">
        <Link to="/contact" className="btn btn-primary">Get in touch</Link>
        <a href="https://github.com/woooj02" target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
          GitHub ↗
        </a>
      </div>

      <div className="hero--proof">
        {proofPoints.map((p) => {
          const inner = (
            <>
              <span className="hero--proof-value">{p.value}</span>
              <span className="hero--proof-label">{p.detail}</span>
            </>
          );
          return p.to ? (
            <Link key={p.value} to={p.to} className="hero--proof-item">{inner}</Link>
          ) : (
            <a key={p.value} href={p.href} target="_blank" rel="noopener noreferrer" className="hero--proof-item">{inner}</a>
          );
        })}
      </div>
    </section>
  );
}
