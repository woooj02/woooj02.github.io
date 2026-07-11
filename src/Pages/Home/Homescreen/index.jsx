import { Link } from "react-router-dom";
import HeroSection from "../HeroSection";
import Featured from "../Featured";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Featured />
      <section className="explore--section">
        <div className="explore--grid">
          <Link to="/projects" className="explore--card">
            <h3 className="explore--title">More projects</h3>
            <p className="explore--sub">
              Distributed systems, data platforms, embedded work, and the rest of what I've built.
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
