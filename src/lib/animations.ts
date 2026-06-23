import { Variants } from "framer-motion"

const ease = [0.22, 1, 0.36, 1]

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease },
  },
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease },
  },
}

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease },
  },
}

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
}

export const projectCardReveal: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease, delay: i * 0.1 },
  }),
}

export const textReveal: Variants = {
  hidden: { opacity: 0, y: 40, rotateX: -5 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 1, ease },
  },
}

export const heroReveal = {
  initial: { opacity: 0, y: 40 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease },
  },
}

export const pageTransition = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { duration: 0.7, ease },
  },
}

export const lineReveal: Variants = {
  hidden: { width: 0 },
  visible: {
    width: "100%",
    transition: { duration: 1.2, ease },
  },
}
