import React, { useEffect, useRef } from 'react';

export default function HeroSection() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const cols = Math.floor(canvas.width / 16);
    const drops = Array(cols).fill(1);
    const chars = 'アイウエオカキクケコ01>_<{}[];#$%&ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    const draw = () => {
      ctx.fillStyle = 'rgba(10,14,23,0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#00ff88';
      ctx.font = '14px monospace';
      drops.forEach((y, i) => {
        const ch = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(ch, i * 16, y * 16);
        if (y * 16 > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
      });
    };

    const interval = setInterval(draw, 50);
    return () => { clearInterval(interval); window.removeEventListener('resize', resize); };
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="heroSection" className="hero--section">
      <canvas ref={canvasRef} id="matrix-canvas" />

      <div className="hero--section--content--box">
        <p className="hero--prompt">whoami</p>

        <h1 className="hero--section--title">
          Aryan Neopane<br />
          <span className="hero--section-title--color">Software Engineer</span>
          <span className="cursor" />
        </h1>

        <p className="hero--section-description">
          Building intelligent systems at the intersection of AI/ML, robotics,
          and full-stack engineering. Proficient in Python, C++, TensorFlow,
          PyTorch, and ROS — turning complex problems into elegant solutions.
        </p>

        <div className="hero--stats">
          <div className="hero--stat">
            <span className="hero--stat--number">8+</span>
            <span className="hero--stat--label">Projects Built</span>
          </div>
          <div className="hero--stat">
            <span className="hero--stat--number">5+</span>
            <span className="hero--stat--label">Tech Domains</span>
          </div>
          <div className="hero--stat">
            <span className="hero--stat--number">∞</span>
            <span className="hero--stat--label">Lines of Code</span>
          </div>
        </div>

        <div className="hero--buttons">
          <button className="btn btn-primary" onClick={() => scrollTo('Contact')}>
            Get In Touch
          </button>
          <button className="btn btn-outline-primary hero--btn-secondary" onClick={() => scrollTo('MyPortfolio')}>
            View Projects
          </button>
        </div>
      </div>
    </section>
  );
}
