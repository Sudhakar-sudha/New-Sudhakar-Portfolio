import React, { useEffect, useId, useRef, useState } from "react";
import {
  motion,
  animate,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { Code, Server, Terminal, Database, Wrench, Cloud } from "lucide-react";

/* ------------------------------------------------------------------ */
/* Data                                                                */
/* ------------------------------------------------------------------ */

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Code,
    colors: ["var(--color-lightblue-400)", "var(--color-darkblue-500)"],
    description:
      "Building modern, responsive, and dynamic interfaces using React, Next.js, and Tailwind CSS.",
    skills: [
      { name: "React / Next.js", level: 90 },
      { name: "React Native", level: 85 },
      { name: "Tailwind CSS", level: 95 },
      { name: "JavaScript", level: 90 },
      { name: "HTML5 / CSS3", level: 95 },
    ],
  },
  {
    title: "Backend Development",
    icon: Server,
    colors: ["var(--color-lightblue-500)", "var(--color-darkblue-600)"],
    description:
      "Crafting APIs, business logic, and authentication systems with Node.js and Python frameworks.",
    skills: [
      { name: "Node.js / Express.js", level: 88 },
      { name: "Python / Flask / FastAPI", level: 82 },
      { name: "Redux", level: 75 },
      { name: "Next.js (API Routes)", level: 80 },
    ],
  },
  {
    title: "Programming Languages",
    icon: Terminal,
    colors: ["var(--color-lightblue-300)", "var(--color-darkblue-700)"],
    description:
      "Strong foundation in programming languages that power full-stack and backend solutions.",
    skills: [
      { name: "C", level: 88 },
      { name: "Java", level: 82 },
      { name: "Python", level: 75 },
    ],
  },
  {
    title: "Database & Storage",
    icon: Database,
    colors: ["var(--color-gray-700)", "var(--color-lightblue-400)"],
    description:
      "Designing efficient schemas, handling queries, and optimizing data operations for performance.",
    skills: [
      { name: "MongoDB", level: 90 },
      { name: "MySQL", level: 85 },
      { name: "PostgreSQL", level: 75 },
      { name: "SQLite", level: 45 },
    ],
  },
  {
    title: "Tools & Others",
    icon: Wrench,
    colors: ["var(--color-darkblue-700)", "var(--color-lightblue-500)"],
    description:
      "Version control, debugging, and productivity tools that enhance development efficiency.",
    skills: [
      { name: "Git / GitHub", level: 95 },
      { name: "VS Code / Postman", level: 90 },
      { name: "Node / NVM", level: 90 },
      { name: "Android Studio", level: 60 },
    ],
  },
  {
    title: "Cloud & Deployment",
    icon: Cloud,
    colors: ["var(--color-lightblue-400)", "var(--color-darkblue-800)"],
    description:
      "Utilizing cloud tools and deployment services for hosting, media management, and scalability.",
    skills: [
      { name: "MongoDB Atlas", level: 95 },
      { name: "Cloudinary", level: 90 },
      { name: "Vercel", level: 70 },
      { name: "Docker", level: 60 },
    ],
  },
];

const TABS = ["All", ...skillCategories.map((c) => c.title)];

/* Soft round glows scattered down the section */
const BLOBS = [
  { pos: "-left-24 top-[2%] h-60 w-60 sm:h-96 sm:w-96", color: "bg-lightblue-300/40", depth: 90, drift: 28, time: 9 },
  { pos: "-right-24 top-[14%] h-56 w-56 sm:h-80 sm:w-80", color: "bg-lightblue-200/50", depth: -120, drift: -34, time: 11 },
  { pos: "left-[20%] top-[40%] h-52 w-52 sm:h-80 sm:w-80", color: "bg-lightblue-300/30", depth: 140, drift: 36, time: 12 },
  { pos: "-right-20 top-[60%] h-60 w-60 sm:h-96 sm:w-96", color: "bg-lightblue-400/30", depth: -90, drift: -26, time: 10 },
  { pos: "-left-20 top-[84%] h-56 w-56 sm:h-80 sm:w-80", color: "bg-darkblue-500/15", depth: 110, drift: 30, time: 13 },
];

/* ------------------------------------------------------------------ */
/* Background                                                          */
/* ------------------------------------------------------------------ */

function Blob({ pos, color, depth, drift, time, mx, my, reduce }) {
  const x = useTransform(mx, (v) => v * depth);
  const y = useTransform(my, (v) => v * depth);

  return (
    <motion.div
      aria-hidden="true"
      style={reduce ? undefined : { x, y }}
      className={`pointer-events-none absolute ${pos}`}
    >
      <motion.div
        className={`h-full w-full rounded-full blur-3xl ${color}`}
        animate={reduce ? undefined : { y: [0, drift, 0], scale: [1, 1.12, 1] }}
        transition={{ duration: time, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/* Skill ring (custom SVG: gradient stroke, fills + counts on view)     */
/* ------------------------------------------------------------------ */

const R = 34;

function SkillRing({ name, level, colors, reduce }) {
  const uid = useId().replace(/:/g, "");
  const wrapRef = useRef(null);
  const textRef = useRef(null);
  const inView = useInView(wrapRef, { once: true, amount: 0.6 });

  useEffect(() => {
    if (!inView || reduce) return;
    const controls = animate(0, level, {
      duration: 1.2,
      ease: "easeOut",
      onUpdate: (v) => {
        if (textRef.current) textRef.current.textContent = `${Math.round(v)}%`;
      },
    });
    return () => controls.stop();
  }, [inView, level, reduce]);

  return (
    <motion.li
      ref={wrapRef}
      whileHover={reduce ? undefined : { y: -4 }}
      className="flex flex-col items-center rounded-xl p-2 transition-colors duration-300 hover:bg-lightblue-50/70"
    >
      <div className="relative h-20 w-20 sm:h-[84px] sm:w-[84px]">
        <svg viewBox="0 0 80 80" className="h-full w-full -rotate-90" role="img" aria-label={`${name} ${level} percent`}>
          <defs>
            <linearGradient id={`g-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: colors[0] }} />
              <stop offset="100%" style={{ stopColor: colors[1] }} />
            </linearGradient>
          </defs>
          <circle cx="40" cy="40" r={R} fill="none" className="stroke-lightblue-100" strokeWidth="7" />
          <motion.circle
            cx="40"
            cy="40"
            r={R}
            fill="none"
            stroke={`url(#g-${uid})`}
            strokeWidth="7"
            strokeLinecap="round"
            initial={{ pathLength: reduce ? level / 100 : 0 }}
            animate={{ pathLength: inView || reduce ? level / 100 : 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
        </svg>
        <span
          ref={textRef}
          className="absolute inset-0 flex items-center justify-center text-sm font-semibold tabular-nums text-darkblue-800"
        >
          {reduce ? `${level}%` : "0%"}
        </span>
      </div>
      <span className="mt-2 text-center text-xs font-medium leading-snug text-darkblue-700/80 sm:text-sm">
        {name}
      </span>
    </motion.li>
  );
}

/* ------------------------------------------------------------------ */
/* Component                                                           */
/* ------------------------------------------------------------------ */

const Skills = () => {
  const reduce = useReducedMotion();
  const [activeCategory, setActiveCategory] = useState("All");

  // pointer parallax
  const mxRaw = useMotionValue(0);
  const myRaw = useMotionValue(0);
  const mx = useSpring(mxRaw, { stiffness: 40, damping: 18 });
  const my = useSpring(myRaw, { stiffness: 40, damping: 18 });

  const spotXRaw = useMotionValue(300);
  const spotYRaw = useMotionValue(300);
  const spotX = useSpring(spotXRaw, { stiffness: 90, damping: 22 });
  const spotY = useSpring(spotYRaw, { stiffness: 90, damping: 22 });

  const handleMove = (e) => {
    if (reduce) return;
    const rect = e.currentTarget.getBoundingClientRect();
    mxRaw.set(e.clientX / window.innerWidth - 0.5);
    myRaw.set(e.clientY / window.innerHeight - 0.5);
    spotXRaw.set(e.clientX - rect.left);
    spotYRaw.set(e.clientY - rect.top);
  };

  const handleLeave = () => {
    mxRaw.set(0);
    myRaw.set(0);
  };

  const visible =
    activeCategory === "All"
      ? skillCategories
      : skillCategories.filter((c) => c.title === activeCategory);

  return (
    <section
      id="skills"
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      className="relative isolate overflow-hidden py-10 text-darkblue-800"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto mb-10 max-w-2xl text-center sm:mb-12"
        >
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-darkblue-500">Skills</p>
          <h2 className="text-3xl font-bold tracking-tight text-darkblue-800 sm:text-4xl">Technical expertise</h2>
          <p className="mt-3 text-base leading-relaxed text-darkblue-700/70">
            A clear overview of the tools and technologies I use to build robust, scalable products.
          </p>
        </motion.div>

        {/* Category filter (works on every screen size; scrolls sideways on phones) */}
        <div
          role="group"
          aria-label="Filter skills by category"
          className="-mx-4 mb-10 flex gap-2 overflow-x-auto px-4 pb-2 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:justify-center sm:overflow-visible sm:px-0 [&::-webkit-scrollbar]:hidden"
        >
          {TABS.map((tab) => {
            const active = activeCategory === tab;
            return (
              <button
                key={tab}
                type="button"
                aria-pressed={active}
                onClick={() => setActiveCategory(tab)}
                className={`shrink-0 whitespace-nowrap rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300
                  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-darkblue-500
                  ${
                    active
                      ? "border-darkblue-500 bg-darkblue-500 text-white shadow-md shadow-darkblue-500/30"
                      : "border-lightblue-100 bg-white text-darkblue-600 hover:border-lightblue-300 hover:shadow-sm"
                  }`}
              >
                {tab}
              </button>
            );
          })}
        </div>

        {/* Cards */}
        <div
          key={activeCategory}
          className={
            visible.length === 1
              ? "mx-auto grid max-w-md gap-6"
              : "grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          }
        >
          {visible.map((category, i) => {
            const Icon = category.icon;
            return (
              <motion.article
                key={category.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08, ease: "easeOut" }}
                className="flex flex-col rounded-2xl border border-lightblue-100 bg-white/85 p-5 shadow-sm backdrop-blur-sm transition-all duration-300
                           hover:-translate-y-1 hover:border-lightblue-300 hover:shadow-xl hover:shadow-darkblue-800/10 sm:p-6"
              >
                {/* Category header */}
                <div className="flex items-center gap-3">
                  <span
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-white shadow-md"
                    style={{
                      backgroundImage: `linear-gradient(135deg, ${category.colors[0]}, ${category.colors[1]})`,
                    }}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="text-lg font-semibold leading-snug text-darkblue-800">{category.title}</h3>
                </div>

                <p className="mt-3 text-sm leading-relaxed text-darkblue-700/70">{category.description}</p>

                <div className="my-5 h-px bg-gradient-to-r from-transparent via-lightblue-200 to-transparent" />

                {/* Skill rings */}
                <ul className="grid grid-cols-2 gap-x-2 gap-y-4">
                  {category.skills.map((skill) => (
                    <SkillRing
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      colors={category.colors}
                      reduce={reduce}
                    />
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;