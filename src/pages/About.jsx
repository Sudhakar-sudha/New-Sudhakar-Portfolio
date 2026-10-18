import React, { useEffect, useRef } from 'react';
import {
  motion,
  animate,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from 'framer-motion';
import {
  MapPin,
  Building2,
  Layers,
  GraduationCap,
  Users,
  Lightbulb,
  PencilRuler,
  Code2,
  CloudUpload,
  ArrowUpRight,
  Mail,
} from 'lucide-react';

/* ------------------------------------------------------------------ */
/* Data                                                                */
/* ------------------------------------------------------------------ */

const FACTS = [
  { icon: MapPin, label: 'Based in', value: 'Sivakasi, Tamil Nadu' },
  { icon: Building2, label: 'Working at', value: 'AIIM Tech Software Solutions' },
  { icon: Layers, label: 'Core stack', value: 'MERN Stack & React Native' },
];

const SERVICES = [
  {
    icon: Layers,
    title: 'Real-time Project Development',
    text: 'Websites, web apps and mobile apps for startups and businesses, built to be used in the real world.',
  },
  {
    icon: GraduationCap,
    title: 'College Mini & Final-Year Projects',
    text: 'Project ideas, complete development and clear explanations, so you understand what you submit.',
  },
  {
    icon: Users,
    title: 'Internship & Placement Guidance',
    text: 'Practical training, code reviews and career guidance for aspiring developers.',
  },
];

const STEPS = [
  { icon: Lightbulb, title: 'Share your idea', text: 'We discuss what you need, your goals and your timeline.' },
  { icon: PencilRuler, title: 'Plan & design', text: 'I plan the features and the screens before writing code.' },
  { icon: Code2, title: 'Build & test', text: 'Clean development with regular updates, tested before delivery.' },
  { icon: CloudUpload, title: 'Launch & support', text: 'Deployment to the live server, plus help after launch.' },
];

const STATS = [
  { to: 5, suffix: '+', label: 'Live Projects' },
  { to: 1, suffix: '+', label: 'Years Experience' },
  { to: 5, suffix: '+', label: 'Students Guided' },
];

/* ------------------------------------------------------------------ */
/* Helpers                                                             */
/* ------------------------------------------------------------------ */

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { delay, duration: 0.6, ease: 'easeOut' },
});

function SectionTitle({ eyebrow, title, subtitle, center = false }) {
  return (
    <motion.div {...reveal()} className={center ? 'mx-auto max-w-2xl text-center' : ''}>
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-darkblue-500">{eyebrow}</p>
      <h2 className="text-3xl font-bold tracking-tight text-darkblue-800 sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-3 text-base leading-relaxed text-darkblue-700/70">{subtitle}</p>}
    </motion.div>
  );
}

/* Number that counts up when it scrolls into view */
function CountUp({ to, suffix = '', reduce }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });

  useEffect(() => {
    if (!inView || reduce) return;
    const controls = animate(0, to, {
      duration: 1.4,
      ease: 'easeOut',
      onUpdate: (v) => {
        if (ref.current) ref.current.textContent = `${Math.round(v)}${suffix}`;
      },
    });
    return () => controls.stop();
  }, [inView, to, suffix, reduce]);

  return <span ref={ref}>{reduce ? `${to}${suffix}` : `0${suffix}`}</span>;
}

/* One round blob: outer layer follows the pointer, inner layer floats */
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
        transition={{ duration: time, repeat: Infinity, ease: 'easeInOut' }}
      />
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/* Component                                                           */
/* ------------------------------------------------------------------ */

const Aboutus = () => {
  const reduce = useReducedMotion();

  // normalised pointer position (-0.5 … 0.5) for blob parallax
  const mxRaw = useMotionValue(0);
  const myRaw = useMotionValue(0);
  const mx = useSpring(mxRaw, { stiffness: 40, damping: 18 });
  const my = useSpring(myRaw, { stiffness: 40, damping: 18 });

  // pointer position inside the section (px) for the spotlight
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

  return (
    <section
      id="about"
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      className="relative isolate overflow-hidden py-10 text-darkblue-800"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        {/* ---------- Intro ---------- */}
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
          {/* Photo */}
          <motion.div {...reveal()} className="relative mx-auto w-full max-w-xs sm:max-w-sm lg:max-w-md">
            <div className="overflow-hidden">
              <img
                src="./sudhakar.png"
                alt="Sudhakar, Full Stack Developer"
                loading="lazy"
                className="h-full w-full object-contain"
              />
            </div>

            {/* Floating badge */}
            <motion.div
              animate={reduce ? undefined : { y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-5 -right-1 flex items-center gap-3 rounded-2xl border border-lightblue-100 bg-white px-4 py-3 shadow-lg shadow-darkblue-800/10 sm:-right-6"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lightblue-500 opacity-60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-lightblue-500" />
              </span>
              <div className="leading-tight">
                <p className="text-sm font-semibold text-darkblue-800">Open to freelance</p>
                <p className="text-xs text-darkblue-700/60">Students & startups</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Text */}
          <div>
            <SectionTitle eyebrow="About me" title="I turn ideas into working products." />

            <motion.div
              {...reveal(0.1)}
              className="mt-6 space-y-4 text-base leading-relaxed text-darkblue-700/80 md:text-lg"
            >
              <p>
                I’m <strong className="font-semibold text-darkblue-800">Sudhakar</strong>, a Full Stack Developer and
                freelancer from <strong className="font-semibold text-darkblue-800">Sivakasi</strong>. I build web and
                mobile applications that are fast, scalable and easy to use.
              </p>
              <p>
                At <strong className="font-semibold text-darkblue-800">AIIM Tech Software Solutions</strong> I work on
                the <strong className="font-semibold text-darkblue-800">MERN Stack</strong> and{' '}
                <strong className="font-semibold text-darkblue-800">React Native</strong>. Outside work, I help college
                students and startups with real projects and practical mentoring.
              </p>
            </motion.div>

            {/* Quick facts */}
            <motion.ul {...reveal(0.2)} className="mt-7 grid gap-3">
              {FACTS.map(({ icon: Icon, label, value }) => (
                <li
                  key={label}
                  className="flex items-center gap-4 rounded-xl border border-lightblue-100 bg-white/80 px-4 py-3 shadow-sm backdrop-blur-sm
                             transition-all duration-300 hover:-translate-y-0.5 hover:border-lightblue-300 hover:shadow-md"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-lightblue-50 text-darkblue-500">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="min-w-0 leading-tight">
                    <span className="block text-xs font-medium uppercase tracking-wider text-darkblue-700/50">
                      {label}
                    </span>
                    <span className="block break-words text-sm font-semibold text-darkblue-800 sm:text-base">
                      {value}
                    </span>
                  </span>
                </li>
              ))}
            </motion.ul>

            {/* Calls to action */}
            <motion.div {...reveal(0.3)} className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-darkblue-500 to-lightblue-500 px-6 py-3 text-sm font-semibold text-white
                           shadow-lg shadow-darkblue-500/30 transition duration-300 hover:-translate-y-0.5 hover:shadow-xl
                           focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-darkblue-500"
              >
                <Mail className="h-4 w-4" />
                Get in touch
              </a>
              <a
                href="#experience"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-lightblue-200 bg-white px-6 py-3 text-sm font-semibold text-darkblue-600
                           transition duration-300 hover:-translate-y-0.5 hover:border-lightblue-400 hover:shadow-md
                           focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-darkblue-500"
              >
                See my experience
              </a>
            </motion.div>
          </div>
        </div>

        {/* ---------- What I do ---------- */}
        <div className="mt-20 sm:mt-28">
          <SectionTitle
            center
            eyebrow="What I do"
            title="How I can help you"
            subtitle="Alongside my job, I work as a freelancer with hands-on support for students and startups."
          />

          <div className="mt-10 grid gap-5 sm:mt-12 md:grid-cols-3 md:gap-6">
            {SERVICES.map(({ icon: Icon, title, text }, i) => (
              <motion.article
                key={title}
                {...reveal(i * 0.1)}
                className="group rounded-2xl border border-lightblue-100 bg-white/85 p-6 shadow-sm backdrop-blur-sm transition-all duration-300
                           hover:-translate-y-1 hover:border-lightblue-300 hover:shadow-xl hover:shadow-darkblue-800/10"
              >
                <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-lightblue-50 text-darkblue-500 transition-colors duration-300 group-hover:bg-darkblue-500 group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="text-lg font-semibold text-darkblue-800">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-darkblue-700/70 sm:text-base">{text}</p>
              </motion.article>
            ))}
          </div>
        </div>

        {/* ---------- How I work ---------- */}
        <div className="mt-20 sm:mt-28">
          <SectionTitle
            center
            eyebrow="How I work"
            title="Simple 4-step process"
            subtitle="Clear steps from the first idea to a live product."
          />

          <ol className="relative mt-10 grid gap-10 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {/* connector line (desktop) */}
            <span
              aria-hidden="true"
              className="absolute left-[12.5%] right-[12.5%] top-7 hidden h-px bg-gradient-to-r from-lightblue-200 via-lightblue-400 to-lightblue-200 lg:block"
            />
            {STEPS.map(({ icon: Icon, title, text }, i) => (
              <motion.li key={title} {...reveal(i * 0.1)} className="relative text-center">
                <span className="relative z-10 mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-lightblue-200 bg-white text-darkblue-500 shadow-md shadow-darkblue-800/10">
                  <Icon className="h-6 w-6" />
                  <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-darkblue-500 text-[10px] font-bold text-white">
                    {i + 1}
                  </span>
                </span>
                <h3 className="mt-4 text-base font-semibold text-darkblue-800">{title}</h3>
                <p className="mx-auto mt-1.5 max-w-[16rem] text-sm leading-relaxed text-darkblue-700/70">{text}</p>
              </motion.li>
            ))}
          </ol>
        </div>

        {/* ---------- LocalEStartup ---------- */}
        <motion.div
          {...reveal()}
          className="relative mt-20 overflow-hidden rounded-3xl bg-gradient-to-br from-darkblue-600 via-darkblue-500 to-lightblue-500 p-6 text-white shadow-2xl shadow-darkblue-800/20 sm:mt-28 sm:p-12"
        >
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/15 blur-3xl"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-20 left-1/3 h-48 w-48 rounded-full bg-lightblue-300/25 blur-3xl"
          />

          {/* Shine sweep */}
          <span
            aria-hidden="true"
            className="resume-shine pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12
               bg-gradient-to-r from-transparent via-white/30 to-transparent"
          />

          <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-lightblue-100">My platform</p>
              <h3 className="text-2xl font-bold sm:text-3xl">LocalEStartup</h3>
              <p className="mt-3 text-base leading-relaxed text-lightblue-50">
                I started LocalEStartup to bridge the gap between learning and real-world development. It helps
                students and startups turn their ideas into deployable digital solutions.
              </p>
            </div>

            <a
              href="https://localestartup.in"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-darkblue-600 shadow-lg
                 transition-transform duration-300 hover:-translate-y-0.5
                 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Visit LocalEStartup
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </motion.div>

        {/* ---------- Stats ---------- */}
        <div className="mt-14 grid gap-4 sm:mt-16 sm:grid-cols-3">
          {STATS.map(({ to, suffix, label }, i) => (
            <motion.div
              key={label}
              {...reveal(i * 0.1)}
              className="rounded-2xl border border-lightblue-100 bg-white/85 px-6 py-8 text-center shadow-sm backdrop-blur-sm
                         transition-all duration-300 hover:-translate-y-1 hover:border-lightblue-300 hover:shadow-lg hover:shadow-darkblue-800/10"
            >
              <p className="bg-gradient-to-r from-darkblue-600 to-lightblue-500 bg-clip-text text-4xl font-extrabold tabular-nums text-transparent sm:text-5xl">
                <CountUp to={to} suffix={suffix} reduce={reduce} />
              </p>
              <p className="mt-1 text-sm font-medium text-darkblue-700/70 sm:text-base">{label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Aboutus;