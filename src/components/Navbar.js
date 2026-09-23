import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "../lib/utils.js";
import { navLinks } from "../data/portfolio.js";

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the link of whichever section sits in the middle of the viewport.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    navLinks.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const linkClass = (id) =>
    cn(
      "relative isolate rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200",
      active === id ? "text-white" : "text-slate-400 hover:text-white"
    );

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav
        aria-label="Main"
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between rounded-full border px-4 py-2 transition-all duration-300 sm:px-5",
          scrolled || open
            ? "border-white/10 bg-ink-900/90 shadow-lg shadow-black/30 backdrop-blur-md"
            : "border-transparent bg-transparent"
        )}
      >
        <a
          href="#home"
          className="font-display text-lg font-bold tracking-tight text-white"
          onClick={() => setOpen(false)}
        >
          Kristian<span className="text-accent">.</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map(({ id, label }) => (
            <li key={id}>
              <a href={`#${id}`} className={linkClass(id)} aria-current={active === id ? "true" : undefined}>
                {active === id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-white/10"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                {label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="btn-primary hidden !min-h-[40px] !px-5 !text-sm md:inline-flex">
          Let's talk
        </a>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-full text-2xl text-white md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          <i className={cn("bi", open ? "bi-x-lg text-xl" : "bi-list")} aria-hidden="true" />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ul
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8, transition: { duration: 0.15 } }}
            transition={{ duration: 0.25 }}
            className="mx-auto mt-2 flex max-w-6xl flex-col gap-1 rounded-3xl border border-white/10 bg-ink-900/90 p-3 backdrop-blur-md md:hidden"
          >
            {navLinks.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "flex min-h-[44px] items-center rounded-2xl px-4 text-base font-medium",
                    active === id ? "bg-white/10 text-white" : "text-slate-300"
                  )}
                >
                  {label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
