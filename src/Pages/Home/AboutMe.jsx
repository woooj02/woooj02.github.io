export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src="./img/about-me.png" alt="About Me" />
      </div>
      <div className="about--section--box">
        <p className="section--title">About</p>
        <h1 className="skills-section--heading">About Me</h1>
        <p className="hero--section-description">
          I'm a software engineer with a multidisciplinary background spanning AI/ML,
          robotics, cybersecurity, and full-stack development. I thrive at the intersection
          of hardware and software — from building autonomous rovers to deploying production
          web apps.
        </p>
        <p className="hero--section-description">
          My toolkit includes Python, C++, TensorFlow, PyTorch, ROS, Django, React, and SQL.
          I bring a systems-thinking mindset to every project — optimizing for performance,
          scalability, and elegance.
        </p>
      </div>
    </section>
  );
}
