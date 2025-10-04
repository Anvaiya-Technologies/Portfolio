// import React from "react";

// const Contact = () => {
//   return (
//     <section
//       id="contact"
//       className="relative py-20 bg-transparent text-white"
//     >
//       {/* Optional: Overlay to dim animated background */}
//       <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-0"></div>

//       <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
//         <h2 className="text-4xl font-bold text-white mb-6">Get in Touch</h2>
//         <p className="text-lg text-white/90 mb-10">
//           We’d love to hear from you! Fill out the form below.
//         </p>

//         <form
//           action="https://formsubmit.co/anvaiyatechnologies@gmail.com"
//           method="POST"
//           className="relative z-10 max-w-lg mx-auto space-y-6 text-left bg-white/5 backdrop-blur-md p-8 rounded-2xl shadow-[0_0_40px_rgba(0,255,255,0.3)] border border-cyan-400/30"
//         >
//           <div>
//             <label
//               htmlFor="name"
//               className="block text-sm font-medium text-white mb-2"
//             >
//               Name
//             </label>
//             <input
//               type="text"
//               id="name"
//               name="Name"
//               placeholder="Enter your name"
//               required
//               className="w-full p-3 rounded-lg bg-gray-900 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
//             />
//           </div>

//           <div>
//             <label
//               htmlFor="number"
//               className="block text-sm font-medium text-white mb-2"
//             >
//               Phone Number
//             </label>
//             <input
//               type="tel"
//               id="number"
//               name="Phone Number"
//               placeholder="Enter your phone number"
//               required
//               className="w-full p-3 rounded-lg bg-gray-900 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
//             />
//           </div>

//           <div>
//             <label
//               htmlFor="email"
//               className="block text-sm font-medium text-white mb-2"
//             >
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="Email"
//               placeholder="Enter your email"
//               required
//               className="w-full p-3 rounded-lg bg-gray-900 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
//             />
//           </div>

//           <div>
//             <label
//               htmlFor="message"
//               className="block text-sm font-medium text-white mb-2"
//             >
//               Your Message
//             </label>
//             <textarea
//               id="message"
//               name="Message"
//               rows="5"
//               placeholder="Type your message here..."
//               required
//               className="w-full p-3 rounded-lg bg-gray-900 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
//             ></textarea>
//           </div>

//           <div className="text-center">
//             <button
//               type="submit"
//               className="bg-cyan-500 text-white px-8 py-3 rounded-lg shadow-md hover:bg-cyan-600 transition font-medium"
//             >
//               Send Message
//             </button>
//           </div>

//           {/* Hidden inputs for formsubmit.co */}
//           <input type="hidden" name="_captcha" value="false" />
//           <input type="hidden" name="_next" value="http://localhost:3000/" />
//         </form>
//       </div>
//     </section>
//   );
// };

// export default Contact;

import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "", number: "", email: "", message: ""
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // { type: 'success'|'error', msg: '' }

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);
    setLoading(true);
    try {

// IMPORTANT: Your backend runs on port 3001, not 3000
      const API_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:3001';
      const endpoint = `${API_URL}/api/contact`;
      
      console.log('Making request to:', endpoint);

      // change base URL if your API is on a different host
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phoneNumber: form.number,
          message: form.message
        })
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || 'Failed to submit');

      setStatus({ type: 'success', msg: 'Message sent — we will get back to you!' });
      setForm({ name: "", number: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus({ type: 'error', msg: err.message || 'Something went wrong' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-20 bg-transparent text-white">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-0"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">Get in Touch</h2>
        <p className="text-lg text-white/90 mb-10">
          We’d love to hear from you! Fill out the form below.
        </p>

        <form
          onSubmit={handleSubmit}
          className="relative z-10 max-w-lg mx-auto space-y-6 text-left bg-white/5 backdrop-blur-md p-8 rounded-2xl shadow-[0_0_40px_rgba(0,255,255,0.3)] border border-cyan-400/30"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-white mb-2">Name</label>
            <input name="name" value={form.name} onChange={handleChange}
              type="text" id="name" placeholder="Enter your name" required
              className="w-full p-3 rounded-lg bg-gray-900 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500" />
          </div>

          <div>
            <label htmlFor="number" className="block text-sm font-medium text-white mb-2">Phone Number</label>
            <input name="number" value={form.number} onChange={handleChange}
              type="tel" id="number" placeholder="Enter your phone number" required
              className="w-full p-3 rounded-lg bg-gray-900 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500" />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white mb-2">Email</label>
            <input name="email" value={form.email} onChange={handleChange}
              type="email" id="email" placeholder="Enter your email" required
              className="w-full p-3 rounded-lg bg-gray-900 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500" />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-white mb-2">Your Message</label>
            <textarea name="message" value={form.message} onChange={handleChange}
              id="message" rows="5" placeholder="Type your message here..." required
              className="w-full p-3 rounded-lg bg-gray-900 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"></textarea>
          </div>

          <div className="text-center">
            <button type="submit" disabled={loading}
              className="bg-cyan-500 text-white px-8 py-3 rounded-lg shadow-md hover:bg-cyan-600 transition font-medium">
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </div>

          {status && (
            <div className={`mt-2 text-center ${status.type === 'success' ? 'text-green-400' : 'text-rose-400'}`}>
              {status.msg}
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
