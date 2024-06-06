export function slideInFromBottom(delay = 0) {
  return {
    variants: {
      hidden: { y: 50, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
        transition: {
          delay,
          duration: 0.35,
        },
      },
    },
    viewport: { once: true },
    initial: "hidden",
    animate: "visible",
  };
}
