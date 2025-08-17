import React from "react";

const highlights = [
  { title: "100+ Clients", desc: "Trusted by businesses worldwide" },
  { title: "99.9% Uptime", desc: "Reliable cloud infrastructure" },
  { title: "24/7 Support", desc: "Always here to help you" },
];

const Highlights = () => {
  return (
    <section id="highlights" className="py-20 bg-black/40">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center">
        {highlights.map((item, idx) => (
          <div key={idx} className="p-6 bg-gray-800 rounded-xl shadow-lg hover:scale-105 transition">
            <h2 className="text-3xl font-bold text-cyan-400">{item.title}</h2>
            <p className="mt-3 text-gray-300">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Highlights;
