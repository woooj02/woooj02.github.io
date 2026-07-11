export default function Footer() {
  return (
    <footer className="footer--container">
      <p className="footer--content">
        © {new Date().getFullYear()} Aryan Neopane
      </p>
      <div className="footer--links">
        <a href="https://github.com/woooj02" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/aryan-neopane" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="mailto:woooj02@gmail.com">Email</a>
      </div>
    </footer>
  );
}
