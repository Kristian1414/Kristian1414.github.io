import React from "react";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

// Fades and lifts its children into view once, when they scroll into the viewport.
export const Reveal = ({ children, delay = 0, y = 24, className, as = "div" }) => {
  const Component = motion[as];
  return (
    <Component
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease, delay }}
    >
      {children}
    </Component>
  );
};

export const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

export const staggerItem = {
  hidden: { opacity: 0, y: 16, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease },
  },
};
