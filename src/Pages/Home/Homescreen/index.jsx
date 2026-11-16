import { Link } from "react-router-dom";
import HeroSection from "../HeroSection";
import Featured from "../Featured";
import OpenSource from "../OpenSource";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Featured />
      <OpenSource />
      <section className="explore--section">
        <div className="explore--grid">
          <Link to="/projects" className="explore--card">
            <h3 className="explore--title">Hackathons & all projects</h3>
            <p className="explore--sub">
              Eight hackathon builds from Oct–Nov 2026 with live demos and videos, plus data platforms, distributed systems and embedded work.
            </p>
            <span className="card--link">All projects ↗</span>
          </Link>
          <Link to="/blog" className="explore--card">
            <h3 className="explore--title">Writing</h3>
            <p className="explore--sub">
              Notes from building and running my own systems.
            </p>
            <span className="card--link">Read the blog ↗</span>
          </Link>
        </div>
      </section>
    </>
  );
}
