import data from "../../data/index.json";
import ProjectLinks from "./ProjectLinks";

export default function MyPortfolio() {
  return (
    <section id="projects" className="portfolio--section">
      <div className="section--header">
        <p className="section--eyebrow">More projects</p>
        <h2 className="section--heading">Production systems, data platforms and earlier work</h2>
      </div>

      <div className="portfolio--grid">
        {data.portfolio.map((item) => (
          <article key={item.id} className="portfolio--card">
            <h3 className="portfolio--title">{item.title}</h3>
            <p className="portfolio--description">{item.description}</p>
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
