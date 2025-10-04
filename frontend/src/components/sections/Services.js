import React from "react";

// You can swap these icons for SVGs for a more professional look
const icons = [
  // Simple SVG: Computer (Web Development)
  <svg width="48" height="48" fill="none" stroke="currentColor" strokeWidth="2" className="text-blue-400" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M8 19h8"/><circle cx="12" cy="16" r="1"/></svg>,
  // Simple SVG: Mobile (App Development)
  <svg width="48" height="48" fill="none" stroke="currentColor" strokeWidth="2" className="text-pink-400" viewBox="0 0 24 24"><rect x="7" y="2" width="10" height="20" rx="2"/><circle cx="12" cy="18" r="1"/></svg>,
  // Simple SVG: Link/Chain (API)
  <svg width="48" height="48" fill="none" stroke="currentColor" strokeWidth="2" className="text-cyan-400" viewBox="0 0 24 24"><path d="M10 14L21 3"/><rect x="2" y="15" width="7" height="7" rx="2"/><rect x="15" y="2" width="7" height="7" rx="2"/></svg>,
];

const services = [
  {
    id: 1,
    title: "Web Development",
    description:
      "We build modern, responsive, and scalable websites tailored to your business needs.",
    gradient: "from-blue-900 to-slate-700",
    icon: icons[0],
  },
  {
    id: 2,
    title: "App Development",
    description:
      "Native and cross-platform mobile apps with smooth performance and sleek UI/UX.",
    gradient: "from-blue-900 to-pink-700",
    icon: icons[1],
  },
  {
    id: 3,
    title: "API Creation & Integration",
    description:
      "Robust API solutions with seamless integration to power your applications.",
    gradient: "from-blue-900 to-cyan-700",
    icon: icons[2],
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="relative py-20 bg-gradient-to-br from-blue-950 via-slate-900 to-blue-900 overflow-hidden"
    >
      {/* Subtle Glowing Orbs */}
      <div className="absolute -top-32 left-4 w-40 h-40 bg-blue-800/20 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute -bottom-24 right-8 w-32 h-32 bg-cyan-700/15 rounded-full blur-xl animate-pulse"></div>

      <div className="relative max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold mb-14 text-white drop-shadow-lg animate-fade-in-up">
          Our <span className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">Services</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-12">
          {services.map((service, idx) => (
            <div
              key={service.id}
              className={`
                group relative bg-white/5 backdrop-blur-lg p-8 rounded-3xl shadow-xl border border-white/10
                hover:scale-105 transition-transform duration-400
                hover:shadow-[0_0_24px_0px_rgba(45,170,255,0.18)]
                animate-fade-in-up
              `}
              style={{
                animationDelay: `${idx * 0.15 + 0.2}s`
              }}
            >
              {/* Subtle Glowing Icon Background */}
              <div className={`absolute top-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-gradient-to-br ${service.gradient} blur-md opacity-40 group-hover:opacity-55 transition`} />
              {/* Bounce Animation on Icon */}
              <div className="relative flex items-center justify-center mb-6 animate-bounce-slow">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-white">{service.title}</h3>
              <p className="text-gray-200 leading-relaxed">{service.description}</p>
              {/* Subtle Glow on Border */}
              <div className={`absolute inset-0 rounded-3xl pointer-events-none border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 transition duration-400`} />
            </div>
          ))}
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(32px);}
          100% { opacity: 1; transform: translateY(0);}
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s cubic-bezier(.5,0,.5,1) forwards;
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0);}
          50% { transform: translateY(-10px);}
        }
        .animate-bounce-slow {
          animation: bounce-slow 2.2s infinite;
        }
      `}</style>
    </section>
  );
};

export default Services;