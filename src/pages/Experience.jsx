import React, { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useScroll,
  useReducedMotion,
} from "framer-motion";
import { Briefcase, Code, Laptop, GraduationCap } from "lucide-react";

/* ------------------------------------------------------------------ */
/* Data                                                                */
/* ------------------------------------------------------------------ */

const experiences = [
  {
    id: 1,
    role: "Full Stack Developer",
    company: "AIIM Tech Software Solutions",
    duration: "9th June 2025 – Present",
    current: true,
    description:
      "Developing and maintaining full-stack web and mobile applications using the MERN Stack and React Native. Collaborating with teams to build scalable and user-friendly solutions.",
    icon: Code,
    tone: "text-darkblue-500 bg-lightblue-50",
  },
  {
    id: 2,
    role: "Freelance, Trainer & Mentor",
    company: "Self-employed",
    duration: "17th Dec 2024 – Present",
    current: true,
    description:
      "Freelancing as a Full Stack Developer and Technical Mentor, contributing to live and academic projects while guiding students through project development, hands-on training, and technical doubt resolution in Java, React, Node.js, MongoDB, and Python.",
    icon: Laptop,
    tone: "text-lightblue-500 bg-lightblue-100",
  },
  {
    id: 3,
    role: "Final Year Project",
    company: "College Major Project",
    duration: "2024 – 2025",
    description:
      "Developed a full-stack e-commerce platform with React.js, React Native, Node.js, Express.js, and MongoDB, featuring web apps for admins and sellers and mobile apps for users and delivery personnel. Gained practical experience in API integration, authentication, and scalable architecture.",
    icon: GraduationCap,
    tone: "text-darkblue-700 bg-lightblue-100",
  },
  {
    id: 4,
    role: "Intern - Web Developer",
    company: "Mini Projects",
    duration: "2023",
    description:
      "Developed a live website for VPrintTech Offset during my internship using React, Node.js, Express.js, and MongoDB, gaining practical experience in full-stack web development and backend integration.",
    icon: Briefcase,
    tone: "text-gray-700 bg-gray-100",
  },
];

/* ------------------------------------------------------------------ */
/* Component                                                           */
/* ------------------------------------------------------------------ */

const Experience = () => {
  const reduce = useReducedMotion();
  const timelineRef = useRef(null);

  // pointer parallax for blobs
  const mxRaw = useMotionValue(0);
  const myRaw = useMotionValue(0);
  const mx = useSpring(mxRaw, { stiffness: 40, damping: 18 });
  const my = useSpring(myRaw, { stiffness: 40, damping: 18 });

  // pointer spotlight (px inside section)
  const spotXRaw = useMotionValue(300);
  const spotYRaw = useMotionValue(300);
  const spotX = useSpring(spotXRaw, { stiffness: 90, damping: 22 });
  const spotY = useSpring(spotYRaw, { stiffness: 90, damping: 22 });

  // timeline fills as you scroll
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 70%", "end 70%"],
  });
  const fill = useSpring(scrollYProgress, { stiffness: 80, damping: 24 });

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
      id="experience"
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      className="relative isolate overflow-hidden py-10 text-gray-900"
    >
      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto mb-12 max-w-2xl text-center sm:mb-16"
        >
          <h2 className="inline-block text-4xl font-extrabold text-darkblue-800 sm:text-5xl">
            Experience
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mx-auto mt-3 h-1 w-20 origin-center rounded-full bg-gradient-to-r from-darkblue-500 to-lightblue-400"
          />
          <p className="mt-4 text-base leading-relaxed text-gray-600 sm:text-lg">
            From internship projects to building products for real clients and mentoring students.
          </p>
        </motion.div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative">
          {/* base line */}
          <span
            aria-hidden="true"
            className="absolute bottom-0 left-6 top-0 w-px -translate-x-1/2 bg-gray-200 md:left-1/2"
          />
          {/* progress line (fills while scrolling) */}
          <div className="absolute bottom-0 left-6 top-0 w-0.5 -translate-x-1/2 md:left-1/2">
            <motion.div
              aria-hidden="true"
              style={{ scaleY: reduce ? 1 : fill }}
              className="h-full w-full origin-top rounded-full bg-gradient-to-b from-lightblue-400 via-lightblue-500 to-darkblue-600 shadow-[0_0_10px_rgba(14,165,233,0.5)]"
            />
          </div>

          <ol className="space-y-10 sm:space-y-12">
            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              const isLeft = index % 2 === 0;

              return (
                <motion.li
                  key={exp.id}
                  /* comes in one by one from the sides */
                  initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="relative pl-14 md:grid md:grid-cols-2 md:pl-0"
                >
                  {/* Dot */}
                  <span className="absolute left-6 top-7 z-10 -translate-x-1/2 md:left-1/2">
                    {exp.current && !reduce && (
                      <span className="absolute inset-0 animate-ping rounded-full bg-lightblue-400/60" />
                    )}
                    <motion.span
                      initial={reduce ? false : { scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 300, damping: 15, delay: 0.3 }}
                      className="relative block h-4 w-4 rounded-full border-[3px] border-white bg-darkblue-500 shadow-[0_0_12px_rgba(29,78,216,0.6)]"
                    />
                  </span>

                  {/* Card */}
                  <div
                    className={
                      isLeft ? "md:col-start-1 md:pr-12" : "md:col-start-2 md:pl-12"
                    }
                  >
                    <article
                      className={`group rounded-2xl border border-gray-200 bg-white p-5 shadow-md shadow-gray-200/70 transition-all duration-300
                                  hover:-translate-y-1 hover:border-lightblue-400 hover:shadow-xl hover:shadow-lightblue-500/20 sm:p-6
                                  ${isLeft ? "md:text-right" : "md:text-left"}`}
                    >
                      <div
                        className={`mb-3 flex items-center gap-3 ${isLeft ? "md:flex-row-reverse" : ""}`}
                      >
                        <span
                          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 ${exp.tone}`}
                        >
                          <Icon size={24} />
                        </span>
                        <h3 className="text-lg font-semibold leading-snug text-darkblue-800 sm:text-xl">
                          {exp.role}
                        </h3>
                      </div>

                      <p className="font-medium text-darkblue-500">{exp.company}</p>

                      <p
                        className={`mb-3 mt-2 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-medium text-gray-600 ${
                          isLeft ? "md:ml-auto" : ""
                        }`}
                      >
                        {exp.current && (
                          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-lightblue-500" />
                        )}
                        {exp.duration}
                      </p>

                      <p className="text-sm leading-relaxed text-gray-600 sm:text-base">
                        {exp.description}
                      </p>
                    </article>
                  </div>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Experience;