import { delay } from "framer-motion";

export const containerVariants = (delay = 0) => ({
  offscreen: {
    opacity: 0,
    y: 30,
  },
  stay: { opacity: 1 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      duration: 2,
      delay: 2.7,
    },
  },
});

export const tagVariants = {
  offscreen: {
    opacity: 0,
    y: 10,
  },
  stay: { opacity: 1 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      duration: 2.8,
      delay: 2.7,
    },
  },
};

export const titleVariants = {
  offscreen: {
    opacity: 0,
    y: 30,
  },
  stay: { opacity: 1 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      duration: 2.2,
      delay: 2.7,
    },
  },
};

export const desVariants = {
  offscreen: {
    opacity: 0,
    y: 20,
  },
  stay: { opacity: 1 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      duration: 2.6,
      delay: 2.7,
    },
  },
};

export const fadeVariants = {
  offscreen: {
    opacity: 0,
  },
  stay: { opacity: 1 },
  onscreen: {
    opacity: 1,
    transition: {
      type: "spring",
      duration: 2.4,
      delay: 2.7,
    },
  },
};

export const quickPopUpVariants = {
  offscreen: {
    opacity: 0,
    y: 20,
  },
  stay: { opacity: 1 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      duration: 2.5,
      delay: 2.7,
    },
  },
};

// slide in from left to right using a delay variant
export const slideInVariants = {
  offscreen: {
    opacity: 0,
    x: -30,
  },
  stay: { opacity: 1 },
  onscreen: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      duration: 2.2,
      delay: 2.7,
    },
  },
};

// slide in from right to left using a delay variant
export const slideInRightVariants = {
  offscreen: {
    opacity: 0,
    x: 40,
  },
  stay: { opacity: 1 },
  onscreen: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      duration: 2.2,
      delay: 2.7,
    },
  },
};
