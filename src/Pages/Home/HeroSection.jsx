import { Link } from "react-router-dom";

const proofPoints = [
  { value: "12+ months", label: "LLM agent running unattended in production" },
  { value: "shayaak.com", label: "full-stack product I built, deployed, and operate", href: "https://shayaak.com" },
  { value: "4 channels", label: "automated content pipeline publishing weekly" },
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
          Software engineer working across LLM agent systems, data platforms, and
          full-stack web apps — from multi-stage agent pipelines on my own Linux
          infrastructure to a live wellness product with a self-hosted AI companion.
          B.S. Computer Science, University of Colorado Denver.
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
              {p.href ? (
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
