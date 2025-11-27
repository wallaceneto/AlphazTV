// Animation variants
const animationVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 150 : -150,
    opacity: 0,
  }),
  center: { x: 0, opacity: 1 },
  exit: (direction) => ({
    x: direction > 0 ? -150 : 150,
    opacity: 0,
  }),
};

export { animationVariants }