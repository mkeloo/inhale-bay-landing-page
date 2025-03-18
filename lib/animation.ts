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
      delay: 0,
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
      delay: 0,
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
      delay: 0,
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
      delay: 0,
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
      delay: 0,
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
      delay: 0,
    },
  },
};

export const slideDownVariant = {
  offscreen: {
    opacity: 0,
    y: -30,
  },
  stay: { opacity: 1 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      duration: 2.2,
      delay: 0,
    },
  },
};

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
      delay: 0,
    },
  },
};

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
      delay: 0,
    },
  },
};