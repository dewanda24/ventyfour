import { Transition, Easing } from "framer-motion";

// Custom cubic-bezier easing (approximate for "easeOut")
const easeOut: Easing = [0.25, 0.1, 0.25, 1];

// Base transition settings
const baseTransition: Transition = {
  duration: 0.6,
  ease: easeOut,
};

export const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: baseTransition,
  viewport: { once: true, amount: 0.2 },
};

export const slideLeft = {
  initial: { opacity: 0, x: -50 },
  whileInView: { opacity: 1, x: 0 },
  transition: baseTransition,
  viewport: { once: true, amount: 0.2 },
};

export const slideRight = {
  initial: { opacity: 0, x: 50 },
  whileInView: { opacity: 1, x: 0 },
  transition: baseTransition,
  viewport: { once: true, amount: 0.2 },
};

export const fadeIn = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  transition: { duration: 0.5, ease: easeOut },
  viewport: { once: true, amount: 0.2 },
};
