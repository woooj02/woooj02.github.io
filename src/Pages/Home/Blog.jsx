const posts = [
  {
    id: 1,
    date: "Apr 2024",
    tag: "Robotics",
    title: "Building an Autonomous Mars Rover from Scratch",
    excerpt:
      "How our team designed a full ROS-based autonomous rover system — from SLAM navigation and arm kinematics to real-time sensor fusion for the University Rover Challenge.",
    readTime: "8 min read",
  },
  {
    id: 2,
    date: "Feb 2024",
    tag: "AI/ML",
    title: "Real-Time ArUco Marker Detection with DepthAI",
    excerpt:
      "A deep dive into deploying OpenCV ArUco detection on the OAK-D camera for precise pose estimation and autonomous rover navigation in outdoor environments.",
    readTime: "6 min read",
  },
  {
    id: 3,
    date: "Dec 2023",
    tag: "Network Analysis",
    title: "PageRank on 280K Nodes: Lessons from the Stanford Web Graph",
    excerpt:
      "Implementing and optimizing PageRank at scale using NetworkX and sparse matrix operations — with visualizations that reveal the hidden structure of the web.",
    readTime: "5 min read",
  },
  {
    id: 4,
    date: "Oct 2023",
    tag: "IoT",
    title: "Smart Home Automation with ESP8266 and Arduino",
    excerpt:
      "Building a low-cost home automation network using MQTT, Arduino, and a custom web dashboard — controlling lights, sensors, and appliances from anywhere.",
    readTime: "7 min read",
  },
];

export default function Blog() {
  return (
    <section className="blog--section" id="Blog">
      <div className="blog--header">
        <p className="sub--title">Writing</p>
        <h2 className="section--heading">Latest Posts</h2>
      </div>

      <div className="blog--grid">
        {posts.map((post) => (
          <article key={post.id} className="blog--card">
            <div className="blog--card--meta">
              <span className="blog--tag">{post.tag}</span>
              <span className="blog--date">{post.date}</span>
            </div>
            <h3 className="blog--title">{post.title}</h3>
            <p className="blog--excerpt">{post.excerpt}</p>
            <div className="blog--footer">
              <span className="blog--read-time">{post.readTime}</span>
              <button className="blog--read-more">
                Read more
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 20 19" fill="none">
                  <path d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                    stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
