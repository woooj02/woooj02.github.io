import { useEffect, useRef } from "react";
import ProjectLinks from "./ProjectLinks";
import { inkFor, shortTitle, tileTitle } from "./Gallery";

export default function ProjectModal({ item, onClose }) {
  const closeRef = useRef(null);

  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    closeRef.current?.focus();
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div className="modal--backdrop" onClick={onClose}>
      <article
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button ref={closeRef} type="button" className="modal--close" onClick={onClose} aria-label="Close">
          ✕
        </button>

        {item.image ? (
          <div className="modal--media">
            <img src={item.image} alt={`${shortTitle(item.title)} screenshot`} />
          </div>
        ) : (
          <div className="modal--media modal--type" style={{ background: item.color, color: inkFor(item.color) }}>
            <span>{tileTitle(item)}</span>
          </div>
        )}

        <div className="modal--body">
          <p className="modal--kicker">{item.kicker}</p>
          <h2 id="modal-title" className="modal--title">{item.title}</h2>
          <p className="modal--description">{item.description}</p>
          {item.items && (
            <ul className="modal--list">
              {item.items.map((sub) => (
                <li key={sub.id}>
                  <div>
                    <span className="modal--list-title">{tileTitle(sub)}</span>
                    <span className="modal--list-summary">{sub.summary}</span>
                  </div>
                  {sub.github && (
                    <a href={sub.github} target="_blank" rel="noopener noreferrer" className="card--link">
                      Code ↗
                    </a>
                  )}
                </li>
              ))}
            </ul>
          )}
          {item.tags.length > 0 && (
            <div className="card--tags">
              {item.tags.map((tag) => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
          )}
          <ProjectLinks item={item} />
          {item.note && <p className="card--note">{item.note}</p>}
          {item.categories.length > 0 && <div className="modal--cats">
            {item.categories.map((c) => (
              <span key={c}>{c}</span>
            ))}
          </div>}
        </div>
      </article>
    </div>
  );
}
