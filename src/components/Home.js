import React, { useRef } from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar.js";
import { Spotlight } from "./ui/spotlight.js";
import { StarsBackground } from "./ui/stars-background.js";
import { Typewriter } from "./ui/typewriter.js";
import { Reveal, staggerContainer, staggerItem } from "./ui/reveal.js";
import MyPhoto from "../assets/images/kristian.jpg";
import { roles, skillGroups, projects, contact } from "../data/portfolio.js";
import { cn } from "../lib/utils.js";

// Soft blurred color blob used to give sections some depth.
const Glow = ({ className }) => (
  <div
    aria-hidden="true"
    className={cn("pointer-events-none absolute rounded-full blur-3xl", className)}
  />
);

// Oversized faded word sitting behind a section title.
const Watermark = ({ children, light, align = "center", className }) => (
  <span
    aria-hidden="true"
    className={cn(
      "pointer-events-none absolute top-1/2 -z-10 -translate-y-[58%] select-none whitespace-nowrap bg-gradient-to-b bg-clip-text font-display text-[5.5rem] font-extrabold uppercase leading-none tracking-tight text-transparent sm:text-[8rem] lg:text-[10rem]",
      light ? "from-slate-900/[0.08] to-slate-900/0" : "from-white/[0.09] to-white/0",
      align === "center" ? "left-1/2 -translate-x-1/2" : "-left-1 lg:-left-2",
      className
    )}
  >
    {children}
  </span>
);

const SectionHeading = ({ eyebrow, children, className, light, watermark, align }) => (
  <Reveal className={cn("relative isolate", className)}>
    {watermark && (
      <Watermark light={light} align={align}>
        {watermark}
      </Watermark>
    )}
    <p className="eyebrow">{eyebrow}</p>
    <h2 className={`section-title ${light ? "text-slate-900" : ""}`}>{children}</h2>
  </Reveal>
);

const Hero = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative flex min-h-[100svh] items-center overflow-hidden pb-16 pt-28"
    >
      <Spotlight containerRef={sectionRef} targetRef={headingRef} />
      <StarsBackground className="opacity-60" />

      <div className="container-page relative text-center">
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Personal Portfolio
        </motion.p>

        <motion.h1
          ref={headingRef}
          className="mx-auto mt-5 max-w-4xl text-[2.5rem] font-bold leading-[1.12] tracking-[-0.01em] [word-spacing:0.06em] sm:text-6xl lg:text-7xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          Transforming ideas into{" "}
          <span className="text-gradient">digital reality</span>
        </motion.h1>

        <motion.p
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
        >
          Hi, I'm Kristian, a
          <span className="my-1 block min-h-[1.5em] font-display text-xl font-semibold text-white sm:text-2xl">
            <Typewriter words={roles} />
          </span>
          building responsive, user-friendly websites with React.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <a href="#projects" className="btn-primary w-full sm:w-auto">
            View my work <i className="bi bi-arrow-right" aria-hidden="true" />
          </a>
          <a href="#contact" className="btn-ghost w-full sm:w-auto">
            Get in touch
          </a>
        </motion.div>
      </div>
    </section>
  );
};

const facts = [
  {
    icon: "bi-mortarboard",
    label: "Education",
    value: "S.Kom, BINUS University",
  },
  {
    icon: "bi-code-slash",
    label: "Focus",
    value: "Frontend & Fullstack web development",
  },
];

const About = () => (
  <section id="about" className="theme-light relative overflow-hidden bg-white py-24 sm:py-32">
    <Glow className="-right-40 -top-24 h-[28rem] w-[28rem] bg-violet-200/50" />
    <Glow className="-bottom-40 -left-32 h-[26rem] w-[26rem] bg-blue-200/50" />
    <div className="container-page grid items-center gap-12 lg:grid-cols-[5fr_7fr] lg:gap-16">
      <Reveal className="mx-auto w-full max-w-sm lg:max-w-[400px]">
        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-blue-400/40 via-violet-400/20 to-transparent blur-2xl"
          />
          <div className="relative overflow-hidden rounded-[1.75rem] border border-slate-200 bg-slate-100 shadow-xl shadow-slate-900/10">
            <img
              src={MyPhoto}
              alt="Portrait of Kristian"
              loading="lazy"
              className="aspect-[2339/3543] w-full object-cover"
            />
          </div>
        </div>
      </Reveal>

      <div>
        <SectionHeading eyebrow="About me" light watermark="About" align="left">
          Hi, I'm <span className="text-gradient">Kristian</span>
        </SectionHeading>

        <Reveal delay={0.1}>
          <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg">
            I'm a web developer focused on frontend and fullstack development.
            I use React to build responsive, user-friendly websites: dynamic,
            engaging interfaces that work seamlessly across devices, backed by
            clean, maintainable code.
          </p>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            Beyond the technical side, I've been actively involved in activities
            that honed my leadership and communication skills. I work well in
            teams, lead projects, and communicate ideas clearly and
            persuasively.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <dl className="mt-10 grid gap-3 sm:grid-cols-2">
            {facts.map((fact) => (
              <div key={fact.label} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <dt className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  <i
                    className={`bi ${fact.icon} text-blue-600`}
                    aria-hidden="true"
                  />
                  {fact.label}
                </dt>
                <dd className="mt-2 text-sm font-semibold leading-snug text-slate-900">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </div>
  </section>
);

const Skills = () => (
  <section id="skills" className="relative overflow-hidden py-24 sm:py-32">
    <Glow className="-left-40 top-10 h-[30rem] w-[30rem] bg-accent/[0.12]" />
    <Glow className="-bottom-32 -right-40 h-[30rem] w-[30rem] bg-accent-violet/[0.12]" />
    <div className="container-page">
      <SectionHeading eyebrow="Toolbox" className="text-center" watermark="Skills">
        Skills & <span className="text-gradient">technologies</span>
      </SectionHeading>

      <div className="mt-14 grid gap-5 lg:grid-cols-[3fr_2fr]">
        {skillGroups.map((group, i) => (
          <Reveal
            key={group.title}
            delay={i * 0.08}
            className={`card-surface flex flex-col p-5 sm:p-6 ${i === 0 ? "lg:row-span-2" : ""}`}
          >
            <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
              {group.title}
            </h3>
            <motion.ul
              className={`mt-5 grid flex-1 auto-rows-fr gap-3 ${
                i === 0 ? "grid-cols-2 sm:grid-cols-3" : "grid-cols-2"
              }`}
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
            >
              {group.items.map((skill) => (
                <motion.li
                  key={skill.name}
                  variants={staggerItem}
                  className="group flex flex-col items-center justify-center gap-3 rounded-xl border border-white/[0.06] bg-ink-900/60 px-3 py-5 transition-colors duration-200 hover:border-accent/40 hover:bg-ink-800"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white p-2.5 transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-105">
                    <img
                      src={skill.logo}
                      alt=""
                      loading="lazy"
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <span className="text-center text-sm font-medium text-slate-200">
                    {skill.name}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

const Projects = () => (
  <section id="projects" className="theme-light relative overflow-hidden bg-slate-50 py-24 sm:py-32">
    <Glow className="-right-40 top-0 h-[30rem] w-[30rem] bg-blue-200/50" />
    <Glow className="-left-40 top-1/2 h-[28rem] w-[28rem] bg-violet-200/40" />
    <div className="container-page">
      <SectionHeading eyebrow="Selected work" className="text-center" light watermark="Work">
        Featured <span className="text-gradient">projects</span>
      </SectionHeading>

      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:gap-8">
        {projects.map((project, i) => (
          <Reveal
            key={project.title}
            as="article"
            delay={(i % 2) * 0.1}
            className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_24px_50px_-20px_rgba(37,99,235,0.35)]"
          >
            <div className="overflow-hidden border-b border-slate-200 bg-slate-100">
              <img
                src={project.image}
                alt={`Screenshot of ${project.title}`}
                loading="lazy"
                className="aspect-[16/10] w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-xl font-bold text-slate-900">{project.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600 sm:text-base">
                {project.description}
              </p>
              <ul
                className="mt-5 flex flex-wrap gap-2"
                aria-label="Technologies"
              >
                {project.tech.map((t) => (
                  <li
                    key={t}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700"
                  >
                    {t}
                  </li>
                ))}
              </ul>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex min-h-[44px] items-center gap-2 self-start text-sm font-semibold text-blue-600 transition-colors hover:text-blue-800"
              >
                Visit website
                <i
                  className="bi bi-arrow-up-right transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="relative overflow-hidden bg-slate-50 pb-10 pt-4 sm:pt-8">
    <Glow className="bottom-10 left-1/2 h-72 w-[40rem] max-w-full -translate-x-1/2 bg-blue-300/30" />
    <div className="container-page">
      <Reveal className="relative isolate overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-ink-800 to-ink-900 px-6 shadow-2xl shadow-slate-900/20 py-14 text-center sm:px-12 sm:py-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 h-64 w-[36rem] max-w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/25 blur-3xl"
        />
        <Watermark className="top-[18%]">Contact</Watermark>
        <p className="eyebrow relative">Contact</p>
        <h2 className="relative mx-auto mt-4 max-w-2xl text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
          Let's turn your <span className="text-gradient">ideas</span> into a
          stunning <span className="text-gradient">digital reality</span>
        </h2>
        <p className="relative mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
          Get in touch to find out how I can help you reach your goals. I
          welcome new ideas and opportunities for engaging, meaningful projects.
        </p>
        <a
          href={`mailto:${contact.email}`}
          className="btn relative mt-9 h-[44px] w-[198px] animate-shimmer !px-0 !text-[13px] sm:w-[218px] sm:!text-sm border border-white/15 bg-[linear-gradient(110deg,#11142a,45%,#3b4a8a,55%,#11142a)] bg-[length:200%_100%] text-white hover:border-accent/60"
        >
          <i className="bi bi-envelope" aria-hidden="true" />
          Reach me on email
        </a>
      </Reveal>

      <footer className="theme-light mt-10 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-6 sm:flex-row">
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} Kristian. All rights reserved.
        </p>
        <ul className="flex items-center gap-2">
          {contact.socials.map((s) => (
            <li key={s.label}>
              <a
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${s.label} (opens in a new tab)`}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-base text-slate-500 transition-colors duration-200 hover:border-slate-400 hover:text-slate-900"
              >
                <i className={`bi ${s.icon}`} aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </footer>
    </div>
  </section>
);

const Home = () => (
  <div className="relative overflow-x-clip">
    <a
      href="#about"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-ink-950"
    >
      Skip to content
    </a>
    <Navbar />
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  </div>
);

export default Home;
