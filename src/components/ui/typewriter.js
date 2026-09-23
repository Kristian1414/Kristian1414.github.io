import React, { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

// Types each word, pauses, deletes it, then moves on to the next one.
export const Typewriter = ({ words, typeSpeed = 70, deleteSpeed = 35, pause = 1600 }) => {
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reduceMotion) return;
    const word = words[index % words.length];

    let timeout;
    if (!deleting && text === word) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === "") {
      setDeleting(false);
      setIndex((i) => i + 1);
    } else {
      timeout = setTimeout(
        () => setText(word.slice(0, text.length + (deleting ? -1 : 1))),
        deleting ? deleteSpeed : typeSpeed
      );
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, index, words, typeSpeed, deleteSpeed, pause, reduceMotion]);

  if (reduceMotion) {
    return <span>{words[0]}</span>;
  }

  return (
    <span aria-label={words.join(", ")}>
      <span aria-hidden="true">{text}</span>
      <span
        aria-hidden="true"
        className="ml-0.5 inline-block h-[1em] w-[3px] translate-y-[0.15em] animate-blink rounded-sm bg-accent"
      />
    </span>
  );
};
