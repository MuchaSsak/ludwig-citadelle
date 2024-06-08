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

export function scaleInFromCenter(delay = 0) {
  return {
    variants: {
      hidden: { scale: 0, opacity: 0 },
      visible: {
        scale: 1,
        opacity: 1,
        transition: {
          type: "spring",
          stiffness: 100,
          delay,
          duration: 0.5,
        },
      },
    },
    viewport: { once: true },
    initial: "hidden",
    animate: "visible",
  };
}

export function fadeIn(delay = 0) {
  return {
    variants: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          delay,
          duration: 1,
        },
      },
    },
    viewport: { once: true },
    initial: "hidden",
    animate: "visible",
  };
}
