import React, { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "../../lib/utils.js";

// Position of `el` relative to `ancestor`, from layout offsets so that
// transforms (like entrance animations) don't skew the measurement.
const offsetWithin = (el, ancestor) => {
  let x = 0;
  let y = 0;
  let node = el;
  while (node && node !== ancestor) {
    x += node.offsetLeft;
    y += node.offsetTop;
    node = node.offsetParent;
  }
  return { x, y };
};

// A stage-light beam that shines from the top-left corner of `containerRef`
// and lands on `targetRef`.
export const Spotlight = ({ containerRef, targetRef, color = "#5b8cff", className }) => {
  const reduceMotion = useReducedMotion();
  const [geo, setGeo] = useState(null);

  useEffect(() => {
    const container = containerRef.current;
    const target = targetRef.current;
    if (!container || !target) return;

    const measure = () => {
      const { x, y } = offsetWithin(target, container);
      setGeo({
        width: container.offsetWidth,
        height: container.offsetHeight,
        tx: x + target.offsetWidth / 2,
        ty: y + target.offsetHeight / 2,
        tw: target.offsetWidth,
        th: target.offsetHeight,
      });
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(container);
    observer.observe(target);
    return () => observer.disconnect();
  }, [containerRef, targetRef]);

  if (!geo) return null;

  const { width, height, tx, ty, tw, th } = geo;
  // Light source sits just outside the top-left corner.
  const sx = -width * 0.06;
  const sy = -height * 0.12;

  // Unit perpendicular to the beam, to build the cone around its axis.
  const dx = tx - sx;
  const dy = ty - sy;
  const len = Math.hypot(dx, dy);
  const px = -dy / len;
  const py = dx / len;
  const sourceHalf = Math.max(width * 0.02, 12);
  const landingHalf = Math.max(th * 0.75, tw * 0.16);

  const cone = [
    [sx + px * sourceHalf, sy + py * sourceHalf],
    [tx + px * landingHalf, ty + py * landingHalf],
    [tx - px * landingHalf, ty - py * landingHalf],
    [sx - px * sourceHalf, sy - py * sourceHalf],
  ]
    .map((p) => p.join(","))
    .join(" ");

  const blur = Math.max(width * 0.018, 14);

  // The beam is drawn once; only opacity and scale animate, which the
  // browser composites on the GPU instead of re-blurring every frame.
  return (
    <motion.div
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0", className)}
      style={{ transformOrigin: `${sx}px ${sy}px`, willChange: "transform, opacity" }}
      initial={reduceMotion ? false : { opacity: 0, scale: 0.35 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        scale: { duration: 2.2, ease: [0.16, 1, 0.3, 1], delay: 0.15 },
        opacity: { duration: 1.4, ease: "easeOut", delay: 0.15 },
      }}
    >
      <svg className="h-full w-full" viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="none">
        <defs>
          <linearGradient id="beam-fill" gradientUnits="userSpaceOnUse" x1={sx} y1={sy} x2={tx} y2={ty}>
            <stop offset="0%" stopColor={color} stopOpacity="0.55" />
            <stop offset="70%" stopColor={color} stopOpacity="0.18" />
            <stop offset="100%" stopColor={color} stopOpacity="0.06" />
          </linearGradient>
          <filter id="beam-blur" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation={blur} />
          </filter>
        </defs>
        <polygon points={cone} fill="url(#beam-fill)" filter="url(#beam-blur)" />
      </svg>
    </motion.div>
  );
};
