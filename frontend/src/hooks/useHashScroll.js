// src/hooks/useHashScroll.js
import { useEffect } from "react";

const useHashScroll = () => {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, []);
};

export default useHashScroll;
