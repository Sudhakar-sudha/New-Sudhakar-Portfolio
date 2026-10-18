import React, { useRef } from "react";
import { motion, useSpring, useScroll, useReducedMotion } from "framer-motion";
import { GraduationCap, BookOpen, Award, MapPin } from "lucide-react";

/* ------------------------------------------------------------------ */
/* Data                                                                */
/* ------------------------------------------------------------------ */

const educationData = [
  {
    id: 1,
    degree: "Master of Computer Application",
    institution: "Alagappa University",
    location: "Karaikudi",
    year: "2025 - Present",
    current: true,
    description:
      "Comprehensive curriculum covering software development, algorithms, and database systems. Active in coding competitions and tech clubs.",
    icon: GraduationCap,
    tone: "text-darkblue-500 bg-lightblue-50",
  },
  {
    id: 2,
    degree: "Bachelor of Computer Science",
    institution: "Ayya Nadar Janaki Ammal College",
    location: "Sivakasi",
    year: "2022 - 2025",
    grade: "CGPA: 7.5/10",
    description:
      "Focused on programming, data structures, and web technologies. Participated in intercollegiate hackathons and seminars.",
    achievements: ["First Class with Distinction"],
    icon: GraduationCap,
    tone: "text-lightblue-500 bg-lightblue-100",
  },
  {
    id: 3,
    degree: "Higher Secondary",
    institution: "S.H.N.V. Matriculation Higher Secondary School",
    location: "Sivakasi",
    year: "2020 - 2022",
    grade: "89%",
    description: "Science stream with Mathematics, Physics, Chemistry, and Biology.",
    achievements: ["District Level Football Player", "Perfect Attendance"],
    icon: BookOpen,
    tone: "text-darkblue-700 bg-lightblue-100",
  },
  {
    id: 4,
    degree: "Secondary School",
    institution: "S.H.N.V. Matriculation Higher Secondary School",
    location: "Sivakasi",
    year: "2019 - 2020",
    grade: "73%",
    description: "Science, Mathematics, and Social Science.",
    achievements: ["Perfect Attendance"],
    icon: Award,
    tone: "text-gray-700 bg-gray-100",
  },
];

/* ------------------------------------------------------------------ */
/* Component                                                           */
/* ------------------------------------------------------------------ */

const Education = () => {
  const reduce = useReducedMotion();
  const timelineRef = useRef(null);

  // timeline fills as you scroll
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 70%", "end 70%"],
  });
  const fill = useSpring(scrollYProgress, { stiffness: 80, damping: 24 });

  return (
    <section
      id="education"
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
            Education
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mx-auto mt-3 h-1 w-20 origin-center rounded-full bg-gradient-to-r from-darkblue-500 to-lightblue-400"
          />
          <p className="mt-4 text-base leading-relaxed text-gray-600 sm:text-lg">
            My academic journey and milestones that shaped my career.
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
            {educationData.map((edu, index) => {
              const Icon = edu.icon;
              const isLeft = index % 2 === 0;

              return (
                <motion.li
                  key={edu.id}
                  /* comes in one by one from the sides */
                  initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="relative pl-14 md:grid md:grid-cols-2 md:pl-0"
                >
                  {/* Dot */}
                  <span className="absolute left-6 top-7 z-10 -translate-x-1/2 md:left-1/2">
                    {edu.current && !reduce && (
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
                          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 ${edu.tone}`}
                        >
                          <Icon size={24} />
                        </span>
                        <h3 className="text-lg font-semibold leading-snug text-darkblue-800 sm:text-xl">
                          {edu.degree}
                        </h3>
                      </div>

                      <p className="font-medium text-darkblue-500">{edu.institution}</p>

                      <p
                        className={`mb-3 mt-2 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-medium text-gray-600 ${
                          isLeft ? "md:ml-auto" : ""
                        }`}
                      >
                        {edu.current && (
                          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-lightblue-500" />
                        )}
                        {edu.year}
                      </p>

                      {/* Location & Grade */}
                      {(edu.location || edu.grade) && (
                        <div
                          className={`mb-3 flex flex-wrap items-center gap-2 text-sm text-gray-600 ${
                            isLeft ? "md:justify-end" : ""
                          }`}
                        >
                          {edu.location && (
                            <>
                              <MapPin className="h-4 w-4 text-darkblue-500" />
                              <span>{edu.location}</span>
                            </>
                          )}
                          {edu.location && edu.grade && (
                            <span className="text-gray-400">•</span>
                          )}
                          {edu.grade && (
                            <span className="font-semibold text-darkblue-500">{edu.grade}</span>
                          )}
                        </div>
                      )}

                      <p className="text-sm leading-relaxed text-gray-600 sm:text-base">
                        {edu.description}
                      </p>

                      {/* Achievements */}
                      {edu.achievements && edu.achievements.length > 0 && (
                        <div className="mt-4">
                          <div
                            className={`mb-2 flex items-center gap-2 text-darkblue-600 ${
                              isLeft ? "md:justify-end" : ""
                            }`}
                          >
                            <Award className="h-4 w-4" />
                            <span className="text-sm font-semibold">Achievements:</span>
                          </div>
                          <div
                            className={`flex flex-wrap gap-2 ${isLeft ? "md:justify-end" : ""}`}
                          >
                            {edu.achievements.map((achievement, achIndex) => (
                              <motion.span
                                key={achievement}
                                initial={reduce ? false : { opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5 + achIndex * 0.1 }}
                                className="rounded-full border border-lightblue-200 bg-lightblue-50 px-3 py-1 text-xs font-medium text-darkblue-600"
                              >
                                {achievement}
                              </motion.span>
                            ))}
                          </div>
                        </div>
                      )}
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

export default Education;