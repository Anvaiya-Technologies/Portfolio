// import React, { useRef } from "react";
// import { motion, useInView } from "framer-motion";

// function Features() {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { amount: 0.3, once: false });

//   return (
//     <motion.section
//       ref={ref}
//       className="relative py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden"
//       initial={{ scale: 0.6, opacity: 0 }}
//       animate={{
//         scale: isInView ? 1 : 0.6,
//         opacity: isInView ? 1 : 0,
//       }}
//       transition={{ duration: 3.5, ease: "easeOut" }}
//     >
//       {/* Overlay to prevent background bleed */}
//       <div className="absolute inset-0 bg-black/30 backdrop-blur-sm z-0" />

//       <div className="relative z-10 max-w-6xl mx-auto text-center px-4">
//         <h2 className="text-4xl font-bold text-white mb-8 drop-shadow-lg">
//           Features
//         </h2>
//         <p className="text-lg text-white/90 mb-12 drop-shadow-md">
//           Discover the awesome features of our product
//         </p>

//         <div className="grid md:grid-cols-3 gap-8">
//           {[
//             {
//               title: "Fast Performance",
//               desc: "Optimized for blazing speed.",
//             },
//             {
//               title: "Secure",
//               desc: "Top-notch security features included.",
//             },
//             {
//               title: "Customizable",
//               desc: "Easily adapt to your workflow.",
//             },
//           ].map((item, idx) => (
//             <div
//               key={idx}
//               className="p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-cyan-400/20 shadow-[0_0_30px_rgba(0,255,255,0.2)] hover:scale-105 transition"
//             >
//               <h3 className="text-xl font-semibold text-cyan-400 mb-4 drop-shadow">
//                 {item.title}
//               </h3>
//               <p className="text-white/90 drop-shadow-sm">{item.desc}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </motion.section>
//   );
// }

// export default Features;

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

// Card animation variants
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
      duration: 2,
      ease: "easeOut",
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8, filter: "blur(8px)" },
  show: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 1.2, ease: "easeOut" },
  },
};

function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3, once: true });

  return (
    <motion.section
      ref={ref}
      className="relative py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden"
      initial={{ scale: 0.6, opacity: 0 }}
      animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.6, opacity: 0 }}
      transition={{ duration: 3.5, ease: "easeOut" }}
    >
      {/* Overlay to soften background */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm z-0" />

      <motion.div
        className="relative z-10 max-w-6xl mx-auto text-center px-4"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
      >
        <h2 className="text-4xl font-bold text-white mb-8 drop-shadow-lg">
          Features
        </h2>
        <p className="text-lg text-white/90 mb-12 drop-shadow-md">
          Discover the awesome features of our product
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Fast Performance",
              desc: "Optimized for blazing speed.",
            },
            {
              title: "Secure",
              desc: "Top-notch security features included.",
            },
            {
              title: "Customizable",
              desc: "Easily adapt to your workflow.",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-cyan-400/20 shadow-[0_0_30px_rgba(0,255,255,0.2)] hover:scale-105 transition"
            >
              <h3 className="text-xl font-semibold text-cyan-400 mb-4 drop-shadow">
                {item.title}
              </h3>
              <p className="text-white/90 drop-shadow-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}

export default Features;
