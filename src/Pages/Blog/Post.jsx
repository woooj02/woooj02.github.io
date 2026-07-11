import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { marked } from "marked";

export default function BlogPost() {
  const { slug } = useParams();
  const [meta, setMeta] = useState(null);
  const [html, setHtml] = useState("");
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    window.scrollTo(0, 0);
    // Only render posts declared in the manifest; slug comes from the URL.
    fetch(`${process.env.PUBLIC_URL}/posts/index.json`)
      .then((res) => res.json())
      .then((list) => {
        const entry = list.find((p) => p.slug === slug);
        if (!entry) throw new Error("not found");
        setMeta(entry);
        return fetch(`${process.env.PUBLIC_URL}/posts/${entry.slug}.md`);
      })
      .then((res) => {
        if (!res.ok) throw new Error("not found");
        return res.text();
      })
      .then((md) => {
        setHtml(marked.parse(md));
        setStatus("ready");
      })
      .catch(() => setStatus("missing"));
  }, [slug]);

  if (status === "missing") {
    return (
      <main className="post--page">
        <p className="post--notfound">Post not found.</p>
        <Link to="/" className="card--link">← Back home</Link>
      </main>
    );
  }

  return (
    <main className="post--page">
      {meta && (
        <header className="post--header">
          <div className="blog--card--meta">
            <span className="tag">{meta.tag}</span>
            <span className="blog--date">{meta.date}</span>
          </div>
          <h1 className="post--title">{meta.title}</h1>
        </header>
      )}
      {status === "ready" && (
        <article className="post--body" dangerouslySetInnerHTML={{ __html: html }} />
      )}
      <footer className="post--footer">
        <Link to="/" className="card--link">← Back home</Link>
      </footer>
    </main>
  );
}
