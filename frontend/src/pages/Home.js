import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import heroimage1 from "./assets/img/herosection1.png";
import heroimage2 from "./assets/img/herosection2.png";
import heroimage3 from "./assets/img/herosection3.png";

const heroSlides = [
  {
    headline: "One Unified Technology Experience",
    subtitle: "Empowering your digital transformation journey.",
    img: heroimage1,
  },
  {
    headline: "Your Vision. Our Code. Unlimited Possibilities",
    subtitle: "From sleek design to powerful solutions, we bring your ideas to life.",
    img: heroimage2,
  },
  {
    headline: "Building Websites & Apps That Grow Your Business",
    subtitle: "Custom digital solutions designed to attract customers and boost revenue.",
    img: heroimage3,
  },
];

const Home = () => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setIndex((i) => (i + 1) % heroSlides.length);
        setFade(false);
      }, 500);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col">
      <div className="absolute right-0 top-0 h-full w-1/2 bg-brand-light -z-10" />
      <Navbar />

      {/* Hero Section */}
      <main className="flex-grow flex items-center">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row gap-12 items-center">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div
              className={`space-y-6 transition-opacity duration-500 ${
                fade ? "opacity-0" : "opacity-100"
              }`}
            >
              <h1 className="text-5xl font-bold text-brand-dark">
                {heroSlides[index].headline}
              </h1>
              <p className="text-xl text-gray-600">
                {heroSlides[index].subtitle}
              </p>
            </div>
            <div className="flex gap-4">
              <button className="btn-primary">Contact Us</button>
              <button className="btn-secondary">Our Services</button>
            </div>

            {/* Company Metrics */}
            <div className="mt-8 flex gap-8 text-gray-800">
              <div className="shadow-card rounded-xl p-4 bg-white text-center">
                <h3 className="text-2xl font-bold text-brand-blue">25+</h3>
                <p className="text-sm">Years Experience</p>
              </div>
              <div className="shadow-card rounded-xl p-4 bg-white text-center">
                <h3 className="text-2xl font-bold text-brand-blue">2500+</h3>
                <p className="text-sm">Happy Clients</p>
              </div>
              <div className="shadow-card rounded-xl p-4 bg-white text-center">
                <h3 className="text-2xl font-bold text-brand-blue">12+</h3>
                <p className="text-sm">Offices</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-1/2">
            <img
              src={heroSlides[index].img}
              alt="Technology solutions"
              className={`w-full rounded-2xl shadow-2xl transition-transform duration-500 ${
                fade ? "scale-95 opacity-0" : "scale-100 opacity-100"
              }`}
            />
          </div>
        </div>
      </main>

      {/* Navigation dots */}
      <div className="flex justify-center gap-3 mt-8 mb-12">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setFade(true);
              setTimeout(() => {
                setIndex(i);
                setFade(false);
              }, 500);
            }}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              index === i
                ? "bg-brand-blue w-6"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
