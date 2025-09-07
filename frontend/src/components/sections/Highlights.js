// components/sections/Highlights.jsx
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";

import HighlightCard from "../cards/HighlightCard";

const highlights = [
  {
    title: "Fast Performance",
    description: "Optimized for blazing speed.",
    icon: "⚡",
  },
  {
    title: "Secure",
    description: "Military-grade security layers included.",
    icon: "🔒",
  },
  {
    title: "Customizable",
    description: "Easily adapt it to your workflow.",
    icon: "🎨",
  },
];

const Highlights = () => {
  return (
    <section
      id="highlights"
      className="relative z-0 py-20 bg-gradient-to-b from-[#0f172a] via-black to-[#0f172a] overflow-hidden"
    >
      {/* Cinematic Fade Overlay */}
      <motion.div
        className="absolute inset-0 bg-black/30 backdrop-blur-md z-0 pointer-events-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Section Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-4xl font-bold text-white text-center mb-12 relative z-10"
      >
        Highlights
      </motion.h2>

      {/* Highlight Cards */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-20">
        {highlights.map((item, index) => (
          <motion.div
            key={item.title}
            variants={fadeIn("up", "spring", index * 0.3, 0.75)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <HighlightCard {...item} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Highlights;
