import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3, once: false }); 
  // amount: how much of the section should be visible before animation triggers
  // once: false → allows zoom in/out repeatedly when entering/leaving view

  return (
    <motion.section
      ref={ref}
      className="py-20 bg-gray-900"
      initial={{ scale: 0.8, opacity: 0.6 }}
      animate={{
        scale: isInView ? 1 : 0.8,
        opacity: isInView ? 1 : 0.6,
      }}
      transition={{ duration: 3, ease: "easeOut" }}
    >
      <div className="max-w-6xl mx-auto text-center px-4">
        <h2 className="text-4xl font-bold mb-8">Features</h2>
        <p className="text-lg text-gray-300 mb-12">
          Discover the awesome features of our product
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-800 rounded-2xl shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Fast Performance</h3>
            <p className="text-gray-400">Optimized for blazing speed.</p>
          </div>
          <div className="p-6 bg-gray-800 rounded-2xl shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Secure</h3>
            <p className="text-gray-400">Top-notch security features included.</p>
          </div>
          <div className="p-6 bg-gray-800 rounded-2xl shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Customizable</h3>
            <p className="text-gray-400">Easily adapt to your workflow.</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Features;
