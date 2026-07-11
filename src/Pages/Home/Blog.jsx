import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Posts live in public/posts/ as markdown files, listed in public/posts/index.json.
// Publishing requires push access to this repo — see public/posts/HOW_TO_POST.md.
export default function Blog() {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/posts/index.json`)
      .then((res) => (res.ok ? res.json() : []))
      .then((list) => setPosts(Array.isArray(list) ? list : []))
      .catch(() => setPosts([]));
  }, []);

  return (
    <section id="blog" className="blog--section">
      <div className="section--header">
        <p className="section--eyebrow">Writing</p>
        <h2 className="section--heading">Blog</h2>
        <p className="section--sub">
          Notes from building and running my own systems.
        </p>
      </div>

      {posts && posts.length === 0 && (
        <p className="section--sub">Nothing here yet — first post coming soon.</p>
      )}

      <div className="blog--list">
        {(posts || []).map((post) => (
          <Link key={post.slug} to={`/blog/${post.slug}`} className="blog--card">
            <div className="blog--card--meta">
              <span className="tag">{post.tag}</span>
              <span className="blog--date">{post.date}</span>
            </div>
            <h3 className="blog--title">{post.title}</h3>
            <p className="blog--excerpt">{post.summary}</p>
            <span className="card--link">Read post ↗</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
