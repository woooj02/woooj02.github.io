import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import data from "../../data/index.json";
import ProjectModal from "./ProjectModal";

export const shortTitle = (title) => title.split(" — ")[0];
export const tileTitle = (item) => item.short || shortTitle(item.title);

// Coloured tiles cycle through three heights so the grid has rhythm.
const TYPE_HEIGHTS = [270, 330, 240];

function useColumnCount() {
  const pick = () => (window.innerWidth >= 1040 ? 3 : window.innerWidth >= 660 ? 2 : 1);
  const [n, setN] = useState(pick);
  useEffect(() => {
    const onResize = () => setN(pick());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  return n;
}

// Place each tile in the currently shortest column, so the reading order stays
// roughly row by row (most important first) while the columns stay balanced.
function layout(items, n) {
  const cols = Array.from({ length: n }, () => ({ h: 0, items: [] }));
  let typeIndex = 0;
  items.forEach((item) => {
    const typeHeight = item.image ? null : TYPE_HEIGHTS[typeIndex++ % TYPE_HEIGHTS.length];
    const height = typeHeight || 380 * (item.ratio || 0.625);
    const col = cols.reduce((a, b) => (b.h < a.h - 1 ? b : a));
    col.items.push({ item, typeHeight });
    col.h += height + 70;
  });
  return cols;
}

// Pick black or white text for a coloured tile so it stays readable.
export function inkFor(hex) {
  const n = parseInt(hex.slice(1), 16);
  const [r, g, b] = [(n >> 16) & 255, (n >> 8) & 255, n & 255].map((c) => {
    const s = c / 255;
    return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b > 0.4 ? "#111111" : "#ffffff";
}

function Tile({ item, typeHeight, onOpen }) {
  return (
    <button type="button" className="tile" onClick={() => onOpen(item.id)}>
      {item.image ? (
        <span className="tile--media">
          <img src={item.image} alt={`${shortTitle(item.title)} screenshot`} loading="lazy" />
        </span>
      ) : (
        <span
          className="tile--media tile--type"
          style={{ background: item.color, color: inkFor(item.color), minHeight: typeHeight }}
        >
          <span className="tile--type-kicker">{item.kicker}</span>
          <span className="tile--type-title">{tileTitle(item)}</span>
          <span className="tile--type-summary">{item.summary}</span>
        </span>
      )}
      <span className="tile--caption">
        <span className="tile--title">{tileTitle(item)}</span>
        <span className="tile--kicker">{item.kicker}</span>
      </span>
      <span className="tile--open" aria-hidden="true">View ↗</span>
    </button>
  );
}

export default function Gallery({ heading, eyebrow, sub }) {
  const [params, setParams] = useSearchParams();
  const active = params.get("c") || "All";
  const openId = params.get("p");
  const projects = data.projects.filter((p) => !p.earlier);
  const earlier = { ...data.earlierWork, items: data.projects.filter((p) => p.earlier) };
  const shown =
    active === "All"
      ? [...projects.filter((p) => p.featured), earlier]
      : projects.filter((p) => p.categories.includes(active));
  const open = openId === earlier.id ? earlier : projects.find((p) => p.id === openId);
  const columns = layout(shown, useColumnCount());

  const update = (key, value) => {
    const next = new URLSearchParams(params);
    if (value) next.set(key, value);
    else next.delete(key);
    setParams(next, { replace: key === "c", preventScrollReset: true });
  };

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const count = (c) =>
    c === "All"
      ? data.projects.length
      : projects.filter((p) => p.categories.includes(c)).length;

  return (
    <section id="projects" className="gallery--section">
      {heading && (
        <div className="gallery--header">
          {eyebrow && <p className="section--eyebrow">{eyebrow}</p>}
          <h2 className="section--heading">{heading}</h2>
          {sub && <p className="section--sub">{sub}</p>}
        </div>
      )}

      <div className="filters" role="tablist" aria-label="Project categories">
        {["All", ...data.categories].map((c) => (
          <button
            key={c}
            type="button"
            role="tab"
            aria-selected={active === c}
            className={`filter ${active === c ? "filter--active" : ""}`}
            onClick={() => update("c", c === "All" ? null : c)}
          >
            {c}
            <span className="filter--count">{count(c)}</span>
          </button>
        ))}
      </div>

      <div className="masonry" key={active}>
        {columns.map((col, i) => (
          <div className="masonry--col" key={i}>
            {col.items.map(({ item, typeHeight }) => (
              <Tile key={item.id} item={item} typeHeight={typeHeight} onOpen={(id) => update("p", id)} />
            ))}
          </div>
        ))}
      </div>

      {open && <ProjectModal item={open} onClose={() => update("p", null)} />}
    </section>
  );
}
