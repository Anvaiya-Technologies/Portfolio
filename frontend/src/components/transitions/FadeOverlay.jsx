import { motion } from "framer-motion";

const FadeOverlay = () => (
  <motion.div
    className="absolute inset-0 bg-white/10 backdrop-blur-md z-0 pointer-events-none"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1 }}
  />
);

export default FadeOverlay;
