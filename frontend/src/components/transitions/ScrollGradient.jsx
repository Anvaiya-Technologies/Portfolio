import { useScroll, useTransform, motion } from "framer-motion";

const ScrollGradient = () => {
  const { scrollYProgress } = useScroll();
  const bgGradient = useTransform(
    scrollYProgress,
    [0.2, 0.4, 0.6],
    [
      "linear-gradient(to right, #06b6d4, #3b82f6)",
      "linear-gradient(to right, #3b82f6, #a855f7)",
      "linear-gradient(to right, #a855f7, #ec4899)",
    ]
  );

  return (
    <motion.div
      style={{ background: bgGradient }}
      className="absolute inset-0 z-0 pointer-events-none"
    />
  );
};

export default ScrollGradient;
