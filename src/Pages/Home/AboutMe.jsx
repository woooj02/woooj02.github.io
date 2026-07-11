import data from "../../data/index.json";

export default function AboutMe() {
  return (
    <section id="about" className="about--section">
      <div className="section--header">
        <p className="section--eyebrow">About</p>
        <h2 className="section--heading">Background</h2>
      </div>

      <div className="about--grid">
        <div className="about--text">
          <p>
            I'm a software engineer in the Denver metro area. I hold a B.S. in Computer
            Science from the University of Colorado Denver (Dec 2023, GPA 3.59) along
            with a Cybersecurity and Secure Computing Certificate, and I've run Linux
            as my daily driver since 2021.
          </p>
          <p>
            What sets my work apart is that I operate what I build. My projects don't
            end at a working demo — they get deployed to my own VPS infrastructure with
            nginx, systemd services, scheduled jobs, structured logging, alerting, and
            nightly backups, and then they keep running. An LLM agent pipeline I built
            has run unattended for over a year; a content pipeline publishes on schedule
            across four channels; a wellness product is live on the open web.
          </p>
          <p>
            At UC Denver I was a Teaching Assistant for Software Engineering — leading
            weekly office hours and code reviews covering Python, C++, OOP, and
            debugging, and writing supplemental walkthroughs that improved student
            comprehension scores by 20%. I also led the CS team on our University Rover
            Challenge entry, taking embedded C++ sensor subsystems from requirements
            through hardware integration and test.
          </p>
        </div>

        <div className="skills--groups">
          {data.skillGroups.map((group) => (
            <div key={group.label} className="skills--group">
              <h3 className="skills--group-label">{group.label}</h3>
              <div className="card--tags">
                {group.items.map((item) => (
                  <span key={item} className="tag">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
