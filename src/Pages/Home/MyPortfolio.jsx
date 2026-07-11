import data from "../../data/index.json";

export default function MyPortfolio() {
  return (
    <section id="projects" className="portfolio--section">
      <div className="section--header">
        <p className="section--eyebrow">More projects</p>
        <h2 className="section--heading">Built along the way</h2>
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
            {item.github && (
              <div className="card--links">
                <a href={item.github} target="_blank" rel="noopener noreferrer" className="card--link">
                  Source on GitHub ↗
                </a>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
