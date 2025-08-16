import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
        <p className="text-lg text-gray-300 mb-6">We’d love to hear from you! Drop us a message below.</p>
        <form className="max-w-lg mx-auto space-y-4">
          <input type="text" placeholder="Your Name" className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600" />
          <input type="email" placeholder="Your Email" className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600" />
          <textarea placeholder="Your Message" rows="5" className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600"></textarea>
          <button className="bg-cyan-500 px-6 py-3 rounded-lg shadow-md hover:bg-cyan-600 transition">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
