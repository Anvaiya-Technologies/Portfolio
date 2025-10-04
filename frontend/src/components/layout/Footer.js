import React from "react";
import {
  FaFacebook,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-zinc-950 text-gray-300 py-12 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-y-10 gap-x-16 items-start">
        {/* Our Services */}
        <div>
          <h3 className="text-lg font-semibold tracking-wide mb-4 text-white">
            Our Services
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white transition">
              • Web Design & Development
            </li>
            <li className="hover:text-white transition">
              • Mobile App Development
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="md:col-span-2 flex flex-col items-center justify-center">
          <h3 className="text-lg font-semibold tracking-wide mb-4 text-white text-center md:text-left">
            Follow Us
          </h3>
          <div className="flex justify-center md:justify-start space-x-4">
            {[
              { icon: FaWhatsapp, color: "bg-green-500", link: "https://wa.me/your-number" },
              { icon: FaFacebook, color: "bg-blue-600", link: "https://www.facebook.com/profile.php?id=61579594349032" },
              { icon: FaLinkedinIn, color: "bg-blue-700", link: "https://www.linkedin.com/in/anvaiya-technologies-84a46437a/" },
              { icon: FaInstagram, color: "bg-pink-600", link: "https://www.instagram.com/anvaiyatech/" },
              { icon: FaTwitter, color: "bg-sky-500", link: "https://x.com/AnvaiyaTech" },
            ].map(({ icon: Icon, color, link }, idx) => (
              <a
                key={idx}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className={`${color} p-3 rounded-full hover:scale-105 transition-transform`}
              >
                <Icon className="text-white text-lg" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 pt-6 border-t border-gray-700 text-xs text-gray-400 text-center">
        © {new Date().getFullYear()} Anvaya Technologies. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
