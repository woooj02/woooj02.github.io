import data from "../../data/index.json";

export default function Featured() {
  return (
    <section id="work" className="featured--section">
      <div className="section--header">
        <p className="section--eyebrow">Featured work</p>
        <h2 className="section--heading">Systems I run in production</h2>
        <p className="section--sub">
          Not demos — software that real users and real schedules depend on, with the
          deployment, monitoring, and failure handling that implies.
        </p>
      </div>

      <div className="featured--list">
        {data.featured.map((item) => (
          <article key={item.id} className="featured--card">
            <p className="featured--kicker">{item.kicker}</p>
            <h3 className="featured--title">{item.title}</h3>
            <p className="featured--description">{item.description}</p>
            <div className="card--tags">
              {item.tags.map((tag) => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
            <div className="card--links">
              {item.live && (
                <a href={item.live} target="_blank" rel="noopener noreferrer" className="card--link card--link-primary">
                  Visit live site ↗
                </a>
              )}
              {item.github && (
                <a href={item.github} target="_blank" rel="noopener noreferrer" className="card--link">
                  Source on GitHub ↗
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
