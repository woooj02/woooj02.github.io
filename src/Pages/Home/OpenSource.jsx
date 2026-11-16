import data from "../../data/index.json";

export default function OpenSource() {
  return (
    <section id="open-source" className="portfolio--section">
      <div className="section--header">
        <p className="section--eyebrow">Open source</p>
        <h2 className="section--heading">Upstream contributions</h2>
      </div>

      <div className="portfolio--grid">
        {data.openSource.map((item) => (
          <article key={item.id} className="portfolio--card">
            <p className="featured--kicker">
              {item.repo} <span className={`status-pill status-pill--${item.status === "Merged" ? "merged" : "open"}`}>{item.status}</span>
            </p>
            <h3 className="portfolio--title">{item.title}</h3>
            <p className="portfolio--description">{item.description}</p>
            <div className="card--links">
              <a href={item.href} target="_blank" rel="noopener noreferrer" className="card--link">
                View on GitHub ↗
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
