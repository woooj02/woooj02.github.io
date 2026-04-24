import { useState } from "react";

export default function ContactMe() {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${form.firstName} ${form.lastName}`);
    const body = encodeURIComponent(
      `Name: ${form.firstName} ${form.lastName}\nEmail: ${form.email}\nPhone: ${form.phone}\n\nMessage:\n${form.message}`
    );
    window.open(`mailto:lynxrover2023CS@gmail.com?subject=${subject}&body=${body}`, '_blank');
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="Contact" className="contact--section">
      <div>
        <p className="sub--title">Get In Touch</p>
        <h2>Contact Me</h2>
      </div>

      {sent && (
        <div className="contact--success">
          <span className="neon-text">✓ Message ready — check your email client!</span>
        </div>
      )}

      <form className="contact--form--container" onSubmit={handleSubmit}>
        <div className="container">
          <label className="contact--label">
            <span className="text-md">First Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="firstName"
              placeholder="Aryan"
              value={form.firstName}
              onChange={handleChange}
              required
            />
          </label>
          <label className="contact--label">
            <span className="text-md">Last Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="lastName"
              placeholder="Neopane"
              value={form.lastName}
              onChange={handleChange}
              required
            />
          </label>
          <label className="contact--label">
            <span className="text-md">Email</span>
            <input
              type="email"
              className="contact--input text-md"
              name="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={handleChange}
              required
            />
          </label>
          <label className="contact--label">
            <span className="text-md">Phone Number</span>
            <input
              type="tel"
              className="contact--input text-md"
              name="phone"
              placeholder="+1 (555) 000-0000"
              value={form.phone}
              onChange={handleChange}
            />
          </label>
        </div>
        <label className="contact--label">
          <span className="text-md">Message</span>
          <textarea
            className="contact--input text-md"
            name="message"
            rows="6"
            placeholder="Type your message..."
            value={form.message}
            onChange={handleChange}
            required
          />
        </label>
        <div>
          <button type="submit" className="btn btn-primary contact--form--btn">
            Send Message
          </button>
        </div>
      </form>
    </section>
  );
}
