import { useEffect, useState } from "react";

export const useSectionObserver = () => {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-64px 0px 0px 0px", // offset for navbar height
        threshold: 0.6,
      }
    );

    sections.forEach((section) => observer.observe(section));

    // Initial detection on load
    const initialSection = Array.from(sections).find((section) => {
      const rect = section.getBoundingClientRect();
      return rect.top <= 64 && rect.bottom >= 64;
    });
    if (initialSection) {
      setActiveSection(initialSection.id);
    }

    return () => observer.disconnect();
  }, []);

  return activeSection;
};
