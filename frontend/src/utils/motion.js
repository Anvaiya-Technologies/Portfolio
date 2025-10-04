export const fadeIn = (direction = "up", type = "tween", delay = 0, duration = 0.6) => {
  let x = 0;
  let y = 0;

  if (direction === "left") x = 100;
  if (direction === "right") x = -100;
  if (direction === "up") y = 100;
  if (direction === "down") y = -100;

  return {
    hidden: { opacity: 0, x, y },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type,
        delay,
        duration,
        ease: "easeOut",
      },
    },
  };
};

export const staggerContainer = (stagger = 0.2) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren: stagger,
    },
  },
});
