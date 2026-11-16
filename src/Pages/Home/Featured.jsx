import data from "../../data/index.json";
import ProjectLinks from "./ProjectLinks";

export default function Featured() {
  return (
    <section id="work" className="featured--section">
      <div className="section--header">
        <p className="section--eyebrow">Featured work</p>
        <h2 className="section--heading">Shipped, live, and mine to run</h2>
        <p className="section--sub">
          Each one is deployed and can be clicked. Behind them is the
          infrastructure, testing and failure handling that a real deployment needs.
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
            <ProjectLinks item={item} />
            {item.note && <p className="card--note">{item.note}</p>}
          </article>
        ))}
      </div>
    </section>
  );
}
