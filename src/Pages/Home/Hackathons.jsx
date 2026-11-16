import data from "../../data/index.json";
import ProjectLinks from "./ProjectLinks";

export default function Hackathons() {
  return (
    <section id="hackathons" className="portfolio--section">
      <div className="section--header">
        <p className="section--eyebrow">Hackathons · Oct–Nov 2026</p>
        <h2 className="section--heading">{data.hackathons.length} builds in six weeks</h2>
        <p className="section--sub">
          Solo entries, each shipped with public code, a live demo or video, and tests or
          evaluations behind every number it claims.
        </p>
      </div>

      <div className="portfolio--grid">
        {data.hackathons.map((item) => (
          <article key={item.id} className="portfolio--card">
            <p className="featured--kicker">{item.event} · {item.date}</p>
            <h3 className="portfolio--title">{item.title}</h3>
            <p className="portfolio--description">{item.tagline}</p>
            <div className="card--tags">
              {item.tags.map((tag) => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
            <ProjectLinks item={item} />
          </article>
        ))}
      </div>
    </section>
  );
}
