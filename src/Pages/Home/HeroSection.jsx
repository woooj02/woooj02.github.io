import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <p className="hero--eyebrow">
        <span className="hero--dot" aria-hidden="true" />
        AI engineer · Denver, CO
      </p>
      <h1 className="hero--title">
        Software that
        <span className="hero--title-accent"> keeps running.</span>
      </h1>
      <p className="hero--description">
        I'm Aryan. I build AI agents, computer vision and full&#8209;stack apps, then run them
        in production.
      </p>
      <div className="hero--actions">
        <a href="#projects" className="btn btn-primary">See the work</a>
        <Link to="/contact" className="btn btn-ghost">Get in touch</Link>
      </div>
    </section>
  );
}
