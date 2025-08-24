import React from "react";

const Services = () => {
  // Define your services in an array
  const services = [
    {
      id: 1,
      title: "Web Development",
      description:
        "We build modern, responsive, and scalable websites tailored to your business needs.",
      icon: "🌐", // you can replace this with an actual icon later
    },
    {
      id: 2,
      title: "App Development",
      description:
        "Native and cross-platform mobile apps with smooth performance and sleek UI/UX.",
      icon: "📱",
    },
    {
      id: 3,
      title: "API Creation & Integration",
      description:
        "Robust API solutions with seamless integration to power your applications.",
      icon: "🔗",
    },
  ];

  return (
    <section id="services" className="py-16 bg-gray-800 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">Our Services</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white/10 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
