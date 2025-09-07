import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="relative py-20 bg-transparent text-white">
      {/* Optional: Overlay to dim animated background */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-0"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">Get in Touch</h2>
        <p className="text-lg text-white/90 mb-10">
          We’d love to hear from you! Fill out the form below.
        </p>

        <form
          action="https://formsubmit.co/anvaiyatechnologies@gmail.com"
          method="POST"
          className="relative z-10 max-w-lg mx-auto space-y-6 text-left bg-white/5 backdrop-blur-md p-8 rounded-2xl shadow-[0_0_40px_rgba(0,255,255,0.3)] border border-cyan-400/30"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-white mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="Name"
              placeholder="Enter your name"
              required
              className="w-full p-3 rounded-lg bg-gray-900 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>

          <div>
            <label
              htmlFor="number"
              className="block text-sm font-medium text-white mb-2"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="number"
              name="Phone Number"
              placeholder="Enter your phone number"
              required
              className="w-full p-3 rounded-lg bg-gray-900 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-white mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="Email"
              placeholder="Enter your email"
              required
              className="w-full p-3 rounded-lg bg-gray-900 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-white mb-2"
            >
              Your Message
            </label>
            <textarea
              id="message"
              name="Message"
              rows="5"
              placeholder="Type your message here..."
              required
              className="w-full p-3 rounded-lg bg-gray-900 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-cyan-500 text-white px-8 py-3 rounded-lg shadow-md hover:bg-cyan-600 transition font-medium"
            >
              Send Message
            </button>
          </div>

          {/* Hidden inputs for formsubmit.co */}
          <input type="hidden" name="_captcha" value="false" />
          <input
            type="hidden"
            name="_next"
            value={window.location.origin + "/#contact"}
          />
          <input type="hidden" name="_next" value={window.location.href} />

        </form>
      </div>
    </section>
  );
};

export default Contact;
