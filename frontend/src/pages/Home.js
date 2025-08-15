import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import heroimage1 from "./assets/img/herosection1.png";
import heroimage2 from "./assets/img/herosection2.png";
import heroimage3 from "./assets/img/herosection3.png";
import WebService from "./assets/img/web development.jpg";
import AppService from './assets/img/app developement.jpg';
import ApiService from './assets/img/api.jpg';

const Home = () => {
  const heroSlogan = [
    {
      headline: "Your Vision. Our Code. Unlimited Possibilities",
      subtitle:
        "From sleek design to powerful features, we bring your ideas to life.",
      img: heroimage1,
    },
    {
      headline: "Stand Out. Get Noticed. Win Customers.",
      subtitle:
        "We craft user-friendly, high-performance websites and apps that make an impact.",
      img: heroimage2,
    },
    {
      headline: "We Build Websites & Apps That Grow Your Business",
      subtitle:
        "Custom digital solutions designed to attract customers and boost your revenue.",
      img: heroimage3,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === heroSlogan.length - 1 ? 0 : prevIndex + 1
        );
        setFade(false);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, [heroSlogan.length]);

  // our Services
  const services = [
    {
      title: "Web Development",
      subheading:
        "Building fast, responsive, and scalable websites using MERN, WordPress, Next.js, and more.",
      buttonText: "Learn More",
      img: WebService
    },
    {
      title: "Mobile App Development",
      subheading:
        "Creating cross-platform mobile apps with Flutter and React Native for seamless user experiences.",
      buttonText: "Learn More",
      img: AppService
    },
    {
      title: "API Development & Integration",
      subheading:
        "Designing and integrating robust APIs to connect your applications with third-party services and data sources.",
      buttonText: "Learn More",
      img: ApiService
    },
  ];

  return (
    <div className="relative min-h-screen flex flex-col overflow-x-hidden">
      {/* Background layer on right side - hidden on mobile */}
      <div className="absolute right-0 top-0 h-full w-1/2 bg-blue-200 -z-10 hidden md:block" />

      <Navbar />

      <div className="flex-grow flex items-center pt-16 md:pt-3">
        <div className="container mx-auto px-4 md:px-6 py-8">
          <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-center">
            {/* Left content */}
            <div className="w-full lg:w-1/2 space-y-6 md:space-y-8 order-2 lg:order-1">
              <div
                className={`space-y-4 md:space-y-6 transition-all duration-500 ${
                  fade ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
                }`}
              >
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
                  {heroSlogan[currentIndex].headline}
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed">
                  {heroSlogan[currentIndex].subtitle}
                </p>
              </div>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 md:py-4 md:px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm md:text-base">
                Contact Us
              </button>
            </div>

            {/* Right image */}
            <div className="w-full lg:w-1/2 order-1 lg:order-2 mb-8 lg:mb-0">
              <img
                src={heroSlogan[currentIndex].img}
                alt="Hero illustration"
                className={`w-full h-auto max-w-md mx-auto lg:max-w-none transition-all duration-500 ${
                  fade ? "opacity-0 scale-95" : "opacity-100 scale-100"
                }`}
              />
            </div>
          </div>

          {/* Dots navigation */}
          <div className="flex justify-center gap-3 mt-8 md:mt-12">
            {heroSlogan.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setFade(true);
                  setTimeout(() => {
                    setCurrentIndex(index);
                    setFade(false);
                  }, 500);
                }}
                className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? "bg-blue-600 md:w-6"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
      {/* // Our Services  */}

      {/* Our Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Our Services
          </h2>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col"
              >
                {/* Service Image */}
                <img
                  src={service.img}
                  alt={service.title}
                  className="rounded-t-xl h-48 w-full object-cover"
                />

                {/* Service Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 flex-grow">
                    {service.subheading}
                  </p>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300">
                    {service.buttonText}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
