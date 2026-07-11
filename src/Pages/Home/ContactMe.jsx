export default function ContactMe() {
  return (
    <section id="contact" className="contact--section">
      <div className="section--header">
        <p className="section--eyebrow">Contact</p>
        <h2 className="section--heading">Get in touch</h2>
        <p className="section--sub">
          The fastest way to reach me is email. I'm based in the Denver metro area.
        </p>
      </div>

      <div className="contact--links">
        <a href="mailto:woooj02@gmail.com" className="contact--card">
          <span className="contact--card-label">Email</span>
          <span className="contact--card-value">woooj02@gmail.com</span>
        </a>
        <a
          href="https://github.com/woooj02"
          target="_blank"
          rel="noopener noreferrer"
          className="contact--card"
        >
          <span className="contact--card-label">GitHub</span>
          <span className="contact--card-value">github.com/woooj02</span>
        </a>
        <a
          href="https://www.linkedin.com/in/aryan-neopane"
          target="_blank"
          rel="noopener noreferrer"
          className="contact--card"
        >
          <span className="contact--card-label">LinkedIn</span>
          <span className="contact--card-value">linkedin.com/in/aryan-neopane</span>
        </a>
      </div>
    </section>
  );
}
