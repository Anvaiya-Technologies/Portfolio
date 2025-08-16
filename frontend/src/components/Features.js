import React from "react";

const features = [
  { title: "AI Powered", desc: "Leverage advanced AI for automation" },
  { title: "Scalable", desc: "Grow with ease as your needs expand" },
  { title: "Secure", desc: "Enterprise-level data security" },
  { title: "Analytics", desc: "Gain insights with powerful analytics" },
];

const Features = () => {
  return (
    <section id="features" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">🌟 Features</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="p-6 bg-gray-800 rounded-xl shadow-md hover:bg-gray-700 transition">
              <h3 className="text-2xl font-semibold text-cyan-400">{feature.title}</h3>
              <p className="mt-3 text-gray-300">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
