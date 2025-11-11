import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <h2>Contact</h2>
      <form onSubmit={(e) => e.preventDefault()} className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}
